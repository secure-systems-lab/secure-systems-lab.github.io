---

layout: article
title: "in-toto at the Reproducible Builds Summit-Paris 2018"
subnav: blog
comments: true
tagline: 'Last December, the fourth annual Reproducible Builds summit drew an international cross-section of computer professionals to Paris. Though ...'
author: '<a href="/people#lukas_puhringer">Lukas Pühringer</a>'
categories:
  - '<a href="/projects#in-toto">in-toto</a>'

---

Last December, the fourth annual [Reproducible Builds](https://reproducible-builds.org/events/paris2018/) summit drew an international cross-section of computer professionals to Paris. Though most of the attendees were involved in some way with Linux distributions and open source softwarloe projects, their backgrounds and affiliations were quite diverse. Yet, they all shared the common perception that software builds should be “reproducible,” meaning, as defined by [reproducible-builds.org](https://reproducible-builds.org/), that any party should be able to generate “bit-by-bit identical copies of all specified artifacts, given the same source code, build environment and build instructions.”

Reproducibility is a quality which has grown very desirable in recent days because by establishing a consensus on what a "correct" build entails, it  also allows users to identify "incorrect" results that could indicate a system compromise. For attackers, a build system is a particularly attractive target, because, as with other steps in the software supply chain, they can impact millions of users with just one successful compromise. As advocates for supply chain security, the [in-toto](https://in-toto.github.io) team was happy to once more be given the opportunity to share its visions about software security at this year’s summit.  

### **From stripping timestamps to sketching out user stories**

Reproducible Builds 2018 was a three-day, open-agenda, off-device event in which the full plenum periodically decided what [topics](https://reproducible-builds.org/events/paris2018/report/) were to be explored. Then participants branched off into smaller groups to discuss these issues in greater depth. These self-hosted sessions incorporated technical
workshops about relevant tooling, bootstrapping and hardware issues, theoreticaldiscussions about terminology and trust models, and hands-on hackathons, where new package builds were made reproducible.

According to several core members, for the first time in the series of summits, there was strong interest in how to make the merits of reproducible builds available to the end-users. It was perceived as a sign of maturity that this year’s summit spent less time on troubleshooting fundamental issues of reproducibility, such as timestamps, and more time on thinking about infrastructure that allows the user to determine whether a package she or he wants to install is "correct,"

### **Verifying reproducibility with in-toto**
Over the course of the summit, the in-toto team was excited to share how our framework can communicate and compare build results through its metadata format and verification protocol. Using in-toto tools, clients can verify the reproducibility of a product and hence agree upon the correctness of their installs. Furthermore, we had a chance to showcase and discuss an in-toto/Debian integration on which our team, together with community members (kudos to [kpcyrd](https://github.com/kpcyrd) and [Morten Linderud](https://github.com/Foxboron)) had worked in the weeks prior to the summit.

Our proposed system consists of federated [“rebuilders”](https://salsa.debian.org/reproducible-builds/debian-rebuilder-setup)that autonomously rebuild Debian packages and generate corresponding attestations using the in-toto metadata format (see [rebuilder@NYU](https://reproducible-builds.engineering.nyu.edu/) and [rebuilder@University of Bergen](http://158.39.77.214/) for rebuilders in action). By using a custom [“in-toto apt transport method,”](https://github.com/in-toto/apt-transport-in-toto) the installation client transparently fetches the relevant attestations from the available rebuilders and verifies them using a local policy file.The default action for this scenario may be to only install the downloaded package if enough trusted rebuilders agree on its contents.

### **Debian is only the beginning**
The feedback we received at the summit was very positive. However, a few participants were curious about how our concept would work beyond the scope of Debian. For instance, one attendee mentioned that fetching rebuild attestations as an online operation during package installation was not feasible in his case.

We easily dispelled this notion for summit attendees and are happy to reiterate it here. The in-toto framework does not prescribe how the attestations for a certain activity are to be aggregated or distributed in order to verify integrity and authenticity. In more general terms, while our proposed rebuilder setup and apt client plugin are indeed tailored to the specific needs of Debian, the underlying in-toto metadata format and verification protocol may be used in any scenario that requires signed evidence for an activity and a way to prove its authenticity and the integrity.

### **Expanding the limits of reproducible builds**
As the conversations continued, another issue emerged. Even if a quorum of rebuilders agreed on a correct result, they could have all built with the same compromised source code. If this is the case, the flawed code could go unnoticed. The general community response to that concern seemed to be that such a concern is not in the scope of the Reproducible Builds project and that, furthermore, it is less problematic because source code is easier to audit than binaries. While both claims are valid, using in-toto compliant metadata to communicate build results would make it very easy to extend verification up the supply chain. in-toto link metadata is able to record the inputs, as well as the outputs, of each activity of the supply chain. It also provides policy language to continuously link the materials and products of all activities, from writing the source code, over to quality assurance,until building and packaging the binaries.

We are excited to see the reproducible builds community grow, and we would encourage participants to continuethis important work. As the in-toto team looks for ways to secure the whole software supply chain, strong individual links--such as those reproducible builds can ensure--will be needed to support these efforts.

### **Get involved**
Ready to make your favorite software reproducible?  Check out the
[Reproducible Builds homepage](https://reproducible-builds.org/) to learn how.

Want to encourage reproducibility on a larger scale? If you have available computing resources, consider setting up a [rebuilder](https://salsa.debian.org/reproducible-builds/debian-rebuilder-setup). With each additional rebuilder who can independently attest for build results and publish corresponding in-toto metadata, users can be more confident that they are installing non-compromised packages. To get involved, [reach out to the in-toto team](https://github.com/in-toto/in-toto/blob/develop/MAINTAINERS.txt).
