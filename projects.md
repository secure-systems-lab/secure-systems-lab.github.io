---
title: Projects
layout: default
---

Though all of SSL’s research initiatives—past and present— revolve around ensuring secure operation of computer systems, the specific areas addressed by the team vary greatly. Current initiatives can be grouped into five general categories.

## Current & Ongoing Projects

##### Remote Utilization and Testing of Wireless Devices

- **Seattle**: The oldest of the lab’s projects, and the foundation technology behind several emerging initiatives, one of which is described below. Seattle is a platform for networking and distributed systems research that runs on resources—such as laptops, servers, and phones— donated by users and institutions. It currently serves updates to over 40K geographically distributed devices around the world. https://seattle.poly.edu/html/.
  - Products: Educational modules for classroom use designed to teach basic concepts in networking and system security; A clearinghouse of available resources to be accessed by users.  

Lessons Learned:

Sensibility Testbed: Based on the design scheme of Seattle,  Sensibility is a distributed platform that allows researchers to directly run experiments on end-user devices. By giving the user control over what amount and type of data can gathered, Sensibility ensures the security of user information and the safety of the device, while giving researchers access to information that would otherwise be difficult to collect. https://sensibilitytestbed.com/projects/project.
Products:  NOTE: Do we want to mention the Hackathon Yanyan conducted last Spring, or any of the adaptations mentioned in the Tsumiki paper?


Password Protection and Improved Network Security
(Note: I’m not sure these two belong together. Would welcome input)

PolyPasswordHasher (PPH) is a secure password storage system that's highly
resilient to offline password cracking. It achieves this resilience by
introducing asymmetry in the effort that servers require to verify
passwords, and crackers require to crack them.
https://polypasswordhasher.github.io/PolyPasswordHasher/
Products:  Basic reference implementations of PPH  have been written for Python,  C,  and Ruby. A Django implementation that can be easily deployed is also in development. Research initiatives on PPH this summer have focused on providing easy to integrate libraries for different applications, including the Pluggable Authentication Module (PAM) and a Passport module. PAM is an authentication scheme used in a number of operating systems, including Linux and OS X, while the Passport module is authentication middleware that allows web users to store and authenticate their account with PPH by choosing “login with PPH”. Both modules can enable more applications to use PPH and increase the security of their password database exponentially in exchange for only modest adaptations to the OS or user behavior.

CacheCash:  CacheCash presents a new design model for automated content delivery networks in which cryptocurrency payments are utilized to motivate participants to work honestly. Building on top of such a cryptocurrency, CacheCash creates an opportunity to construct a distributed, secure, and efficient incentivized content delivery system that does not depend upon a single entity to handle payments.


Secure Software Updates
The Update Framework (TUF): TUF provides a comprehensive, flexible security framework that developers can integrate with any software update system, or native programming language due to its concise, self-contained architecture and specification. It offers developers and users protection from a host of potential attacks through the use of images and signing strategies. https://theupdateframework.github.io/
TUF technology can be applied in many settings. Currently in development, the UPTANE project is adapting TUF to ensure secure updates of software on the electronic control units of vehicles. UPTANE can counter a comprehensive array of security attacks, and  is resilient to partial compromises, while  addressing  automotive specific vulnerabilities and limitations. This latter initiative is a collaboration between the New York University Tandon School of Engineering (NYU), the University of Michigan's Transport Research Institute (UMTRI), and the Southwest Research Institute (SWRI). (Note: Should UPTANE be listed as a product under TUF?)

Current deployments: Flynn, LEAP, and Docker software repositories

On-going integrations:  Repositories for Ruby, CoreOS, Haskell, OCaml, and Python’s PyPi

Secure Software Development
Toto: A program that holistically enforces the integrity of a software supply chain by gathering and signing information about the chain itself. Through the use of “link metadata,” Toto provides documentation that ensures clear accountability as to how software is written, packaged and distributed...and by who.

Lind: a virtual machine design that prevents the triggering of kernel bugs by locking all system calls into popular access paths. The design is based on the idea that popular paths—ones used every day to access basic system requests—are much less likely to contain vulnerabilities. This limited kernel access reduces the possibility of interaction with flawed code.

CrashSimulator: a tool that simulates “real-world” testing for new and upgraded software without the complications of “real-world” deployment. The program enables software developers to identify vulnerabilities in product designs long before they are packaged and released.		

Understanding Code at the most Basic Level
Atoms of Confusion: Within every confusing piece of software codes are small patterns that can lead developers  to outputs that radically differ from what was intended. In studying these “atoms of confusion” we look to build a firm empirical foundation for reducing code confusion in software development and, thus, also reduce the frequency of buggy and malfunctioning programs. This project is a collaboration with researchers at Pennsylvania State University and the University of Colorado, Colorado Springs, and is conducted with the support of the National Science Foundation.
Products:  A web site, containing all study materials, is currently in development. A number of follow-up stories have also been planned.


API Blindspots: This project, a collaboration with researchers at the University of Florida, the University of Massachusetts-Amherst, and the University of Colorado, Colorado Springs, seeks to identify security-related blind spots in Application Programming Interfaces (APIs).
Products:


Foundational Projects
These earlier lab projects are now completed and no new work on them is currently being done. However, these research initiatives remain important for a number of reasons. First, they set some parameters for the practical, problem-solving type of research the lab would do. And, in some cases, they pioneered approaches to particular security areas that continue to evolve into today’s products.

NetCheck/CheckAPI: NetCheck is a tool that can determine the cause of a failure in a networked application, without any application or network-specific knowledge, and without any modification to the application or its infrastructure. By treating an application as a blackbox, a diagnosis can be made using just a set of system call (syscall) invocation traces from the relevant end-hosts. By simulating the syscalls against a network model, syscalls that deviate from expected network semantics can be identified. In return, these deviations can be mapped to a diagnosis by using a set of heuristics.
Products:  The source code for the NetCheck tool and all relevant documentation remain available at https://netcheck.poly.edu/projects/project/wiki.


upPIR: upPIR is a secure protocol by which a client can privately retrieve information from a set of mirrors. By packaging the required information with other data that potentially could be requested, the user's preference can be masked. In doing so, the privacy of the client is protected as the nature of the requested information can not be used to give away his sexual orientation, religious beliefs, political beliefs, or other sensitive data about the client and/or her company.
Products:
