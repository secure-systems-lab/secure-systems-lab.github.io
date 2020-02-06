---
layout: article
title: "Contrasting Transparent Logs and The Update Framework"
subnav: blog
comments: true
tagline: "When and where would you use one over the other?"
author: 'Trishank Karthik Kuppusamy and Marina Moore'
categories:
  - 'Informational'
---

## TLDR

Both Transparent Logs and The Update Framework were designed to protect end-users from a compromise of package repositories, but ultimately reflect different assumptions about how security should be managed. Transparent Logs are better at providing an immutable history of packages, which lends itself to third-party auditing. The Update Framework is better at providing a higher degree of compromise resilience, as well as built-in procedures for recovering from a compromise. One can obtain the best of both worlds by combining both systems.

## Introduction

In recent conversations about the effectiveness of [The Update Framework (TUF)](https://theupdateframework.io/) à la [Docker Content Trust](https://docs.docker.com/engine/security/trust/content_trust/) and [Uptane](https://uptane.github.io/) as a method to prevent package tampering, the idea of [Transparent Logs (TLs)](https://research.swtch.com/tlog) à la [Certificate Transparency](https://www.certificate-transparency.org/) and the [Go checksum database](https://go.googlesource.com/proposal/+/master/design/25530-sumdb.md) often came up. It became clear to us that there is some genuine confusion about what these two technologies have to offer, and which might be better, given that different attacks often require different types of defenses. In response, we have compiled the strengths and weaknesses of each technology to help repository managers select the best strategy for securing the packages they host.

Both TLs and TUF can be used to protect packages from being tampered with by man-in-the-middle attacks (MitM) attackers. Both systems were designed around the principle that package repositories are not naively trusted by package managers. Both systems provide signed hashes of packages, so that package managers can verify the integrity of downloaded packages with some degree of authenticity. In contrasting these solutions, the primary difference appears to be that TLs seek to provide immutable history via append-only logs, as well as third-party auditing of these logs, whereas TUF concentrates on providing a higher degree of compromise resilience, as well as recovery from compromise when, and not if, it happens.

In plain terms, if the main goal is to have a public list of packages that different auditors check, TLs provide this functionality. If one wants to be able to limit the damage from a repository or key compromise and securely recover from this, TUF provides this functionality.

## Threat model

To better understand the differing approaches of TLs and TUF, we need to first characterize the nature of the threat both are designed to address. Figure 1 depicts the relationships between the different parties and the two systems.

<img align="center" src="/img/blog/2020-02-03-transparent-logs/figure-1.png" style="margin: 0px 20px"/>

**Figure 1**: A rough illustration of the various relationships between package developers, package repositories, TUF metadata repositories, Transparent Logs, attackers, and end-users.

We define a compromise as a situation where attackers can control all of the following:

1. The network connection between end-users and Transparent Logs, The Update Framework metadata repository, and / or package repositories. They may do this with MitM attacks, by exploiting weaknesses in cryptographic keys or libraries, and / or by breaking into the endpoints themselves.
1. One or more online signing keys accessible by automation on the endpoints above, but no offline keys kept on, say, [Hardware Security Modules](https://en.wikipedia.org/wiki/Hardware_security_module) or hardware tokens with GPG support off the endpoints above.

## Immutable history and third-party auditing vs. compromise resilience and recovery

TLs provide some compromise resilience in that they prevent old logs containing old versions of packages from being deleted, even if the log itself has been taken over. This is in addition to preventing MitM attacks on end-users. Furthermore, third-party auditing allows for detection of new, malicious versions of packages [^1]. And, it does all of this without requiring package developers to sign anything. However, although third-party auditing can help to detect these malicious, new versions of packages, it does not prevent them from being added in the first place [^2]. In addition, third-party auditing requires an interested third party to provide resources toward detecting malicious packages. This auditing model does not scale to small projects with fewer users or resources.

TUF can be configured (à la [Diplomat](https://www.usenix.org/node/194973), [PEP 458](https://www.python.org/dev/peps/pep-0458/), and [PEP 480](https://www.python.org/dev/peps/pep-0480/)) to provide a higher degree of compromise resilience in that attackers cannot tamper with all packages without being detected. To do so, though, some developers must be willing to sign their packages independently of the repository. Furthermore, it also provides explicit procedures out-of-the-box to recover from a compromise when, and not if, it happens. However, TUF relies on checks performed on metadata from the repository. Without an immutable history and third-party audits, a compromise of multiple keys means that attackers can replace metadata and packages on the repository in a way that is not immediately detectable by package managers (e.g., by dropping packages). This is more problematic in cases where the repository automatically signs metadata for package developers.

In a nutshell, the security provided by TLs is heavily dependent on the ability of large organizations, such as Google, to prevent a repository compromise. Since TLs do not prevent new, malicious versions of packages from being added in this scenario, and do not immediately provide ways to recover from such attacks, prevention of these attacks becomes much more important.

In contrast, TUF can be configured so that malicious versions of packages either cannot be added to the repository, or, if added, will not be trusted by package managers. This simple but significant difference means that security can easily be maintained by independent or nonprofit package repository maintainers with significantly less resources than those of large tech organizations, such as Google. In exchange for this simplicity, TUF’s security relies on repository administrators, as well as package developers who choose to opt into it, maintaining the security of offline keys.

Therefore, situations where one strategy might be preferable over another may be dictated by which of these purposes is most important. We also propose that, because the two technologies are complementary, adopting both could offer enhanced security against a larger variety of attacks than using just one.

## Getting the best of both worlds

<img align="center" src="/img/blog/2020-02-03-transparent-logs/figure-2.png" style="margin: 0px 20px"/>

**Figure 2**: A rough illustration of the various possible relationships between a package repository P, a TUF metadata repository T, a Transparent Log L, a mirror M, and auditors.

TLs and TUF both aim to protect users from malicious packages. TLs provide immutable history, as well as built-in third-party auditing, whereas TUF provides a high degree of compromise resilience, as well as built-in procedures for recovery. A package repository using both systems could gain all of these benefits.

More precisely, consider a package repository P, a TUF metadata repository T with [consistent snapshots](https://github.com/theupdateframework/specification/blob/master/tuf-spec.md#7-consistent-snapshots), a transparent log L, and a mirror M, as illustrated in Figure 2. We assume that T, L, and M are independent. Whenever P publishes a new package, metadata must be updated accordingly on T. This ultimately means producing new version N of the timestamp metadata that T must submit to L and M. L must append hash(N), whereas M must download all new metadata that follow from N. P and T are free to garbage collect obsolete metadata and packages, whereas L must archive all timestamp metadata produced by T, and M must archive all packages and metadata ever published by P and T respectively.

The most important property of this system is that auditors now have a tamper-proof record of who published what and when. Auditors can query L for the hash(N) of every version N of the timestamp metadata they are interested in, query M for all TUF metadata that follows from N, and audit the metadata for particular packages.

As a desirable side-effect, auditors can now also detect [forking attacks](https://www.usenix.org/legacy/event/osdi04/tech/full_papers/li_j/li_j.pdf), where T may have shown different timestamps to different end-users. They may do so using the same method outlined in the previous paragraph (assuming that [hashes](https://www.usenix.org/conference/atc17/technical-sessions/presentation/kuppusamy) are recorded in the snapshot metadata produced by T).

## Comparison matrix

The table below offers a side-by-side comparison of the security features of the two systems.

<img align="center" src="/img/blog/2020-02-03-transparent-logs/figure-3.png" style="margin: 0px 20px"/>

In particular, the Datadog TUF and in-toto integration mentioned in the last column is discussed in more detail [here](https://www.datadoghq.com/blog/engineering/secure-publication-of-datadog-agent-integrations-with-tuf-and-in-toto/).

## Conclusion

TLs and TUF both help secure package repositories, but their priorities and goals differ, and so provide complementary virtues. When used separately, TLs provide an immutable history of a repository with third-party auditing, whereas TUF provides compromise resilience and procedures for recovering from a compromise. Used together, these technologies can provide all of the aforementioned properties. If anyone would like to implement a combination of TLs and TUF, or discuss the differences between these systems, please reach out to us on [the TUF mailing list](https://groups.google.com/forum/?fromgroups#!forum/theupdateframework).

## Acknowledgements

We would like to thank Justin Cappos, Nick Coghlan, Lois Anne DeLong, Ernest W. Durbin III, Sumana Harihareswara, Joshua Lock, Santiago Torres-Arias, and the Python community for their feedback.

## Footnotes

[^1]: A major design goal for Google was to make sure that the community would not have to trust them blindly, and thus these mechanisms are a means to an end, which is removing trust.

[^2]: In fact, assuming that the TL and package repository are independent, this does not even require attackers to compromise the TL. Since the TL would [automatically](https://go.googlesource.com/proposal/+/master/design/25530-sumdb.md#checksum-database) fetch missing versions of packages, all attackers would have to to do is to add malicious versions of packages to the repository (such as the GitHub repository belonging to the package developers), and somehow convince developers to refer to these malicious versions (say, by publishing new tags on GitHub). In this sense, TLs still depend on [Trust-On-First-Use (TOFU](https://go.googlesource.com/proposal/+/master/design/25530-sumdb.md#module-authentication-with)). While Go encourages pinning packages using [Semantic Versioning](https://semver.org/), which ameliorates the issue to some extent, the fact remains that malicious versions of packages can still be added automatically, which is especially problematic when package managers such as [`pip`](https://pypi.org/project/pip/) automatically try to find the latest versions of packages.
