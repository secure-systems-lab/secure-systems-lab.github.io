---

layout: article
title: "Uptane Releases  V.1.1.0  of its Standard; Introduces Deployment Best Practices"
subnav: blog
comments: true
tagline: 'There is little doubt that cars have caught the attention of hackers, and little hope that these trends will be reversed.'
author: '<a href="/people#lois_delong">Lois Anne DeLong</a>'
categories:
  - '<a href="/projects#uptane">Uptane</a>'

---

According to the [2020 Global Automotive Cybersecurity Report]((https://upstream.auto/upstream-security-global-automotive-cybersecurity-report-2020/), 
released by UpStream Security in December 2020, cyber attacks on vehicles increased 99% from 2018 to 2019, and by 700% since 2016. There is little doubt
that cars have caught the attention of hackers, and little hope that these trends will be reversed. Therefore, there is a growing need for clear and precise security protections, which should ideally be based on lessons learned in practice in the automotive industry.

In 2016, [Uptane](https://uptane.github.io/), an open-source software security project designed with direct input from automotive manufacturers and 
suppliers, was introduced to address this threat. In a nutshell, Uptane implementations secure automotive systems by establishing a set of checks and balances on a vehicle’s  electronic control units (ECUs) to ensure the authenticity of incoming software updates.
It is designed for “compromise-resilience,” or to limit the impact of a compromised software repository, an automotive insider attack, a leaked signing key, and similar attacks.. Uptane principles can be incorporated into most existing software update packages, but offers particular support for over-the-air (OTA) software distribution strategies.
Over the past four years, as the framework has been developed, tested and implemented, hacks against vehicles have gone from isolated incidents by 
individuals to carefully coordinated assaults by governments and large-scale criminal enterprises.  "Nation-state actors have increasingly attacked 
software delivery mechanisms and the software supply chain,” states Dr. Justin Cappos, who is a founder of the Uptane project. “Without strong protections
like Uptane, these attacks against the automotive industry will be successful, leading to massive damage and loss of life.”

Nevertheless, technology is useless or even dangerous if not implemented properly. Shortly after its official launch, leaders of the Uptane project and 
representatives from the automotive industry began the process of standardizing the technology, releasing Version 1.0.0 of its Standard for Design and 
Implementation under the auspices of [IEEE/ISTO](https://ieee-isto.org/) on July 31, 2019. In parallel, the group began establishing a set of best practices
for deploying Uptane  to assure that the consistency of its security guarantees are preserved across different platforms and deployment situations. 
Now that the Uptane framework has been widely adopted, including integration into [Automotive Grade Linux](https://www.automotivelinux.org/), 
an open source system currently used by many large OEMs, and implementations by a number of tier 1 suppliers, including 
[Airbiquity](https://www.airbiquity.com/blog-events/blog-posts/delivering-secure-automotive-ota-updates-uptane-and-otamatic) and 
[HERE](https://www.here.com/company/press-releases/en/2019-28-05  ), the Uptane project announces the release of its first update to that Standard. 
[Version.1.1.0](https://uptane.github.io/papers/uptane-standard.1.1.0.html) was officially released on January 8, 2021.  While the new version does
not specify major changes to existing implementations, it clarifies procedures, establishes a style guide for consistency in spelling, capitalization, 
and use of punctuation, and describes options for simplifying operations with no loss of security.

The new version of the Standard is accompanied for the first time by a version-controlled *Deployment Best Practices* companion document. While most of 
the information in this latter document has been available on the Uptane website for several years, this deployment guidance is now being released as a
stand-alone document at the request of auto manufacturers. As Patti Vacek, one of the software engineers behind the first open-source Uptane 
implementation from Here Technologies, explains, “These best practices have been informed by years of experience of putting the Standard into action. 
Our partners have found this information to be a useful extension to the Standard, especially when it comes to making important decisions about 
trade-offs and real-world implementation details.”  Along with his colleague, Jon Oster,  Vacek serves on the Uptane Standards team, a group 
representing a cross-section of auto manufacturers, tier 1 suppliers, and representatives of academia and government regulatory agencies. 

A significant emphasis of the review process was clarifying Uptane to fulfill proliferating regulations and international standards within the 
automotive industry. Key cybersecurity and software update regulations from the United Nations Economic Commission for Europe (UNECE WP 29) become
law in the European Union,  Japan, and Korea this month. The regulation will apply to all new vehicle models in 2022, and all existing vehicle models
in 2024. Closely related international standards work is also in progress on ISO/SAE 21434 Road Vehicles Cybersecurity Engineering, and 
ISO 24089 Road Vehicles Software Update, and so all automotive OEMs will need to adapt the design of their automotive  connected systems. 
“The emergence of these comprehensive automotive cybersecurity standards and regulations offers a historic opportunity to dramatically improve the 
cybersecurity and safety of new vehicles,” says security consultant Ira McDonald, who has been an invited expert in the Trusted Computing Group 
since 2006, and is an Uptane Steering Committee member.

During the review period the team also identified issues to be addressed in 2021. Marina Moore, a Ph.D. candidate at NYU Tandon who has been a 
developer on Uptane for the past two years observes, “Through this process, we started discussions about breaking changes that will be needed in
future releases to ensure that the Uptane standard continues to evolve for additional industry use cases.” The Uptane Standards team plans a second 
minor release in June 2021, and a larger revision, which will include more significant changes to the technology, in December 2021.

Initially developed under a grant from the [U.S. Department of Homeland Security](https://engineering.nyu.edu/), Uptane represents contributions
from a team of engineers at New York University Tandon School of Engineering in Brooklyn, NY, the [University of Michigan Transportation Research Institute](https://umtri.umich.edu/)
in Ann Arbor, MI, and the [Southwest Research Institute](https://en.wikipedia.org/wiki/Southwest_Research_Institute) in Austin, TX. Uptane was 
first announced in a paper written by Dr. Trishank Kuppusamy, Akan Brown, and Sebastien Awwad, Dr. Damon McCoy, and Cappos from NYU Tandon; 
Cameron Mott from Southwest Research Institute, and  Russ Bielawski, Sam Lauzon and  Andre Weimerskirch from the University of Michigan, 
and was presented at the 2016 Embedded Security in Cars Conference (Escar USA 2016). Over a four year year period, more than 30 individuals
and 17 organizations have provided input to the design, development and implementation of Uptane. A full list of contributors to the project can 
be found [here](https://uptane.github.io/people.html) 
