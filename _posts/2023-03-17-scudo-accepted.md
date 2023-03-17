---
layout: article
title: Uptane Community Endorses Scudo as Automotive Software Supply Chain Security Solution
subnav: blog
comments: true
tagline: "Last year, the Uptane project released a whitepaper that introduced Scudo, an open framework that utilizes in-toto to secure automotive software supply chains.We are now excited to share that Scudo has been accepted by a simple majority of the active members of the Uptane community."
author: '<a href="/people#lois_delong">Lois Anne DeLong</a> and <a href="/people#aditya_sirish">Aditya Sirish</a>'
categories:
  - '<a href="/projects#in-toto">in-toto</a>'
  - '<a href="/projects#uptane">Uptane</a>'
---


Last year, the Uptane project released a whitepaper that introduced Scudo, an open framework that utilizes in-toto to secure automotive software supply chains. This was followed shortly afterwards by the development of a Proposed Uptane Revisions and Enhancements (PURE) document titled “Scudo: Addressing Software Supply Chain Security in Uptane.” Referred to as PURE 3, this document included a more detailed discussion of how the framework can be integrated into automotive software supply chains.

We are now excited to share that the Scudo PURE has been accepted by a simple majority of the active members of the Uptane community. In this context, the “accepted” status indicates that the Uptane community recommends and stands behind Scudo as the framework of choice for automotive software supply chain security guarantees.

Commenting on the new status of Scudo, Trishank Kuppusamy, a Staff Security Engineer at Datadog, sees it as another step forward for an industry “that pioneered software supply chain security by co-designing and adopting Uptane.” Kuppusamy, a long time contributor to both Uptane and in-toto, adds, “now with its extension, Scudo, the automotive industry will gain the same kind of defense-in-depth security that was first seen with the [Datadog Agent integrations](https://www.datadoghq.com/blog/engineering/secure-publication-of-datadog-agent-integrations-with-tuf-and-in-toto/). With Uptane, we were able to safely give a robot on the cloud the power to install different firmware on different vehicles. Now, incorporating its sibling technology, in-toto, to create Scudo makes it possible to add the entire end-to-end, cryptographically verifiable history of how that firmware was developed, tested, and released in the first place. The addition of in-toto means that you can detect meddler-in-the-middle attacks such as [SUNBURST](https://www.reversinglabs.com/blog/sunburst-the-next-level-of-stealth) before any tampered firmware can be installed on vehicles. This is critical for meeting the Biden-Harris administration’s [EO 14028](https://www.federalregister.gov/d/2021-10460/p-54) and [strategy](https://www.federalregister.gov/d/2021-10460/p-54) for improving our national cybersecurity.”

“Protecting the integrity of the software supply chain will soon become a priority for automotive stakeholders,” adds André Weimerskirch, a vice president with global responsibility for product cybersecurity at Lear, and a member of the Uptane Steering Committee. “The automotive industry is continuously improving security and raising the bar by increasing protection for the software supply chain via Scudo, is the next logical step after deploying secure software over the air strategies (such as Uptane) and establishing a comprehensive software bill of materials (SBOM)”.

Professor Justin Cappos of NYU Tandon, who is also on the Uptane Steering Committee, echoes the sentiments above. “This is an exciting new capability for the automotive sector which directly comes from the use of open standards,” he observes.  “In this case, two communities have worked hard to ensure they interoperate seamlessly. This is one of the core benefits of open standards — the community members can do the work to integrate technologies so that the result is greater than the sum of their parts.”

PURE 3 can be found in the [Uptane PUREs repository](https://github.com/uptane/pures/blob/main/pure3.md). For a higher level overview of Scudo, the latest version of the whitepaper can be found [here](https://uptane.github.io/papers/scudo-whitepaper.pdf).