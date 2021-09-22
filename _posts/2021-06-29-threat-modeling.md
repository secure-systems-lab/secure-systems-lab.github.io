---

layout: article
title: "Design by Calvinball: Why it doesn’t work for secure system design"
subnav: blog
comments: true
author: '<a href="/people#marina_moore">Marina Moore</a>'
categories:
  - Informational

---

The design of secure software systems can be a lot like Calvinball. Drawn from the comic strip Calvin and Hobbes by Bill Watterman, the little boy Calvin invents a sport named after himself in which the players make up the rules as they go. As a result, no two games are the same. Once a rule is created, it lasts the rest of the game. New rules can be created, but no existing ones can be removed. This results in very chaotic games, with players switching sides, singing songs, and literally moving the goalposts.

The way software is designed and developed has a lot in common with Calvinball. Developers can choose to start with a threat model, or to focus first on usability and add security features later. However, in the latter case, once initial decisions have been made, it may be impossible to reverse them in order to embrace a holistic approach to security. Thus the developers will be forced to either leave out important security guarantees, or re-design the software in a way that will likely not be backwards compatible with the initial, insecure design. Instead, starting with a clear and thorough threat model makes it easier to ensure that the most important risks are accounted for from the beginning.

The need to identify and prioritize those “most important risks” is another reason for threat modeling during the design stage. When designing secure software systems, it is tempting to want a system that is impervious to all attacks. However, no one has yet achieved un-hackable software. Unfortunately, this desire can create a Calvinball-like hodge-podge of security layers. Instead, designers should borrow a page from the manufacturers of physical safes. The safes in banks and other facilities designed to hold cash, bonds, gold, and other valuables are rated for how many minutes they can withstand fire or another type of assault. In cybersecurity, it is a given that state-of-the-art cryptography can be broken by an attacker with unlimited resources, as cryptographic algorithms assume that an attacker is limited by the processing speed of modern computers.  Instead of aiming for perfect security, we instead ask questions like “Who am I protecting against?”, “What resources do I expect an attacker to have?”, and “What is the most sensitive data in my system?” so that our architecture can systematically mitigate those risks. We ask these questions through the process of threat modeling.

So what is a threat model? According to [OWASP](https://owasp.org/www-community/Threat_Modeling), threat modeling “works to identify, communicate, and understand threats and mitigations within the context of protecting something of value”. This process allows the designers of security systems to state upfront in the design process what attacks the system is designed to protect against, and what is out of scope for a particular project. Software engineers then use the threat model to develop defensive strategies against the enumerated attacks. When reviewing code, they can test the safeguards implemented to prevent these attacks.

In software design by Calvinball, defining and prioritizing security strategies has to be the first rule written, so that no future rule violates the security properties on which users of the software rely. Threat modelling should be the critical first step in the process of creating secure software. Software security systems that do not specify what they are securing against are far less likely to successfully mitigate more likely or impactful attacks. There is good reason for this. Without a threat model, system designers can be tempted to take shortcuts or fail to think of a particular attack scenario. The programmers will have no way to ensure that their system prevents the highest priority attacks. Without insight into the expected resources of an attacker, it is difficult to make good decisions about cryptographic algorithms, protocols, or policies.

Security systems without a threat model can be labeled “designed by Calvinball.” Strategies that evolve on the fly without clearly defined security goals and priorities may resolve issues on a piecemeal level, but also create an ever thickening matrix of modifications and restrictions that can fail to mitigate the most serious attacks. In fact, developers that do not consider security threats early in the design process can implement a system that simply cannot mitigate certain attacks without redesigning the entire system. For example, if key compromise is not considered early in the design process, the system may rely on trusted keys with no way to ensure that these keys are current and uncompromised.

To conclude, I’d like to challenge the reader to try to think of well-designed security systems that did not start with a well-defined threat model. I’m curious if anyone has an example of such a system, and can provide insight on how that system overcame inaccurate assumptions about attacker capabilities.

Calvinball could be a great way to spend an afternoon with friends on a beautiful summer day. Using it as a model for designing software for use in the real world could be “game over.”
