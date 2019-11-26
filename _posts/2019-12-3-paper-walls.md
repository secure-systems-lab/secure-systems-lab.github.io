---
layout: article
title: "Tearing Down the Paper Walls: Valuing Practical Problem-solving in Academia"
subnav: blog
comments: true
tagline: 'While at KubeCon last week in San Diego. one of the 12K attendees present came up to me and said, ''You're at NYU. What are you doing at KubeCon?''...'
author: '<a href="https://ssl.engineering.nyu.edu/personalpages/jcappos/">Justin Cappos</a>'
categories:
  - 'Informational'

---

While at KubeCon last week in San Diego. one of the 12K attendees present came up to me and said, ''You're at NYU. What are you doing at KubeCon?''  While I was unsurprised by the question, I was surprised to learn that the attendee was a PhD student at a major US university.  [Anonymity provided so as not to embarrass anyone.]  The student was even more surprised that an academic like myself had created two CNCF projects and was active in the community.

I met with the student's advisor a bit later and chatted about what brought them to the conference.  The response was that the professor and student were here to learn about how the technology they were researching is used in practice. Their hope was that this might help them write better papers for a major academic conference. However, the professor realized that academia wasn't looking at the same problems. Industry solutions are complex as a necessary part of handling real world problems and thus are both too difficult to package into academic papers, and are harder still to improve on.  So as I understand it, the professor and his student will not be back to the conference because what they heard and saw at this meeting was not sufficiently useful in their endless quest to publish papers.

### **So what to do?**

I refuse to fall into this trap and would strongly advocate for reversing this trend.  The real world is the real world, despite what some in academia may like to think.  It is our place to enact change, have a positive impact, and help people, or else what use are we to society?

I also refuse to propagate a belief in the value of papers over real world impact in the students I advise.  It is certainly possible to do both.  For example, my PhD student, Santiago Torres-Arias, has two first author USENIX Security papers (see https://ssl.engineering.nyu.edu/papers/torres_toto_usenixsec-2016.pdf and https://ssl.engineering.nyu.edu/papers/torres-toto-usenix19.pdf), and papers at ASIACCS, CODASPY, and NSDI.  More impressively, his [NSDI paper](https://ssl.engineering.nyu.edu/papers/kuppusamy_nsdi_16.pdf) was on improvements to [TUF](https://theupdateframework.github.io/), a secure update system that is used in the cloud by such prominent adopters as Amazon, Google, Microsoft, IBM, Docker, VMware, RedHat, Digital Ocean, DataDog, Cloudflare, and others).  He is also the lead for the [in-toto](https://in-toto.io/) project, which is used by thousands of companies (Twitter, NBC, PBS, DataDog, Activision, Conde Nast, etc.).  Our work on [git attacks](https://ssl.engineering.nyu.edu/papers/torres_toto_usenixsec-2016.pdf) caused the resulting defense to be deployed by git in 2016, protecting effectively every piece of software that uses it.

We undoubtedly could have had more publications in the same timeframe had we opted to ignore practical impact.  We could have had even more papers by simply worrying about the ''least publishable unit.''  That is, getting the most number of raw papers, for the least effort, often by creating derivative work.  What is odd is I have often heard academics decry the ''least publishable unit,'' while actively avoiding the hard work needed to have practical impact.  I fail to see a strong distinction between those who do not work toward practical impact and those who work toward the ''least publishable unit.''  In both cases, it is just writing pieces of paper for which the only likely audience are other academics.

When evaluating tenure cases, I will take the practical impact of the candidate strongly into account.  There are three main dimensions I would like to see in evaluating practical impact:

1. *An externally measurable contribution.* This could be something like an open source project where one can observe that source code has been merged.  I have reviewed several proposals where the faculty claimed such impact, but I was unable to find evidence to support that claim.  A reference to a commit or a link to a blog post the company made about integration provides a direct means for verification.  

2. *Substantial positive impact.* Any change integrated into a piece of software should have a substantial positive impact.  Improving important software in significant ways is a key dimension that should be valued.

3. *Research relevant addition.* The difference in the code should be in an important direction (such as a security, usability, or efficiency improvement) and involve a substantial amount of creativity and thought. Designing and deploying the first system that protects against an emerging threat is a researcher trailblazing the way. Adding a missing feature to a piece of software which its competitors already have, not so much.

I ask other faculty to consider using these criteria when evaluating practical impact.  A few faculty giving practical impact the appropriate emphasis can have a big impact on the next generation of researchers.
