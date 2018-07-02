---

layout: article
title: "Eliminating Weak Links in the Software Supply Chain"
subnav: blog
comments: true
tagline: 'There is a growing awareness in the open source software development
community that, even if a new or revised program is secured at each individual
step of its development an uncontaminated final product is still not guaranteed. The nature...'
author: '<a href="/people#lois_delong">Lois Anne DeLong</a>'
categories:
  - '<a href="/projects#in-toto">in-toto</a>'
---
There is a growing awareness in the open source software development community that,
even if a new or revised program is secured at each individual step of its development,
an uncontaminated final product is still not guaranteed. The nature of the software
supply chain is such that multiple entities will generally interact with a product
before it reaches the user. It is very common for a program to be written by one team of
developers, and then have a completely different team do the testing, packaging, and
distribution. So what happens in these “spaces in-between?” What is to prevent a
malicious actor from tampering with the product as it is in transit from one stage
to another? And, how do we know if the work was carried out only by those authorized
to do so, or if the final product matches its expected design and function?

Over the past two years, a team at the Secure Systems Lab of NYU Tandon has been
developing and deploying a framework called in-toto.  It is designed to
secure the integrity of the software supply chain from end to end, and at
every point in-between. Developed in collaboration with a research team at
the New Jersey Institute of Technology, the framework attests to the integrity
and verifiability of all actions performed while writing and compiling code,
and testing and deploying software.

In roughly the same time frame, a team at Google was contemplating how to provide
a similar form of end to end protection for container images in the cloud. Enlisting
the help of JFrog, Red Hat, IBM, Black Duck, Twistlock, Aqua Security and CoreOS, Google
launched Grafeas, an API that “provides organizations with a central source of
truth for tracking and enforcing policies across an ever growing set of software
development teams and pipelines.” Build, auditing and compliance tools can use
the Grafeas API to store, query and retrieve comprehensive metadata on software
components of all kinds.

At the most recent edition of KubeCon+Cloud Native Con Europe 2018, held May 2
to 4 in Copenhagen, Denmark, Wendy Dembowski of Google and Lukas Pühringer of NYU,
delivered a presentation that explored the combined potential of these programs
to protect the “software supply chain security ecosystem.” The talk featured
real-life examples, documenting how these tools have been deployed on projects
for Debian, Arch Linux, reproducible builds, and Docker. Primarily, though,
the talk pointed towards how these tools can be combined to facilitate
continuous delivery in the cloud. As noted in the conference program,
continuous delivery has become a “prevalent concept in the cloud native
ecosystem,” by “drastically simplified and accelerated development and
eployment of software.” However, in doing so, it has created
“an attractive target for attacks.” Linking these independent projects presents
an opportunity to ensure enhanced software supply chain security in the cloud, no
matter what the delivery mechanism for the product may be.

Though potentially these two products could be combined in a number of configurations,
in the talk Dembowski and Pühringer highlighted  in the operation illustrated below. Basically,
it shows in-toto using its metadata to verify the supply chain of a software product, and then
pushing the results into a Grafaes attestation. The attestation—simply a “yes” or a “no” as to
whether it passed or failed verification—would be forwarded to the Grafeas server in the cloud
where it would instruct the “Admission Controller” as to whether or not it is safe to
admit to the cloud.

The value of such a merger would greatly reduce the attack surface for malicious players.
An article about the conference, written by Antoine Beaupré for LWN.net, quotes Pühringer as
saying that “Grafeas provides a well-defined API” that “allows the user access to where
you can push metadata”—be it package versions, builds, images, deployments or attestation,
such as those provided by in-toto. Because Grafeas is “well-integrated in the
cloud ecosystem,” while “in-toto provides all the steps in the chain,” Pühringer concludes,
“It seems natural to marry the two projects.”
