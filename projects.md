---
title: Projects
layout: default
---

Though all of SSL’s research initiatives—past and present— revolve around ensuring secure operation of computer systems, the specific areas addressed by the team vary greatly. Current initiatives can be grouped into five general categories.

## Current & Ongoing Projects

##### Remote Utilization and Testing of Wireless Devices

<a name="seattle"></a>
- **[Seattle](https://seattle.poly.edu/html/)**:
Seattle is a software program that supports research in networking and distributed systems. Through its Clearinghouse, Seattle also offers a research platform that runs on resources—such as laptops, servers, and phones— donated by users and institutions. It currently serves updates to more than 40K geographically distributed devices around the world. Its applications have included the development of secure testbeds that can gather information from mobile devices with no privacy threat to the device owner (see Sensibility Testbed below), and teaching modules used to help students learn key concepts about network systems and the Internet.

  * Products: Our website contains information and links to educational modules, and a clearinghouse of available resources for those who wish to download and use the Seattle program, or donate use of their devices for research purposes.  

  * Project members:  Albert Rafetseder,
Lukas Pühringer,
Sebastien Awwad,
Rohan Ketan Bhirangi,
Ajay Shenoy,
Deepankar Jaisia,
Justin Cappos

  * Tags: networking, research platform, cloud technology

<a name="sensibility"></a>
- **[Sensibility Testbed](https://sensibilitytestbed.com/)**:
 Given the close proximity of smartphones to users,
researchers would benefit from accessing smartphone sensors. By giving the user
control over what amount and type of data gathered, Sensibility ensures the
privacy of user information.  Sensibility also has additional security
protections that ensure the safety of the device, while giving researchers
access to unique information.

**TODO: ADD IMAGE**

  * Products: [Install our Android app](https://play.google.com/store/apps/details?id=com.sensibility_testbed)
or learn more by [visiting our blog](https://seattlesensor.wordpress.com/)!

  * Project members:  [Yanyan Zhuang](http://www.cs.uccs.edu/~yzhuang/),
Yu Hu,
Lukas Pühringer,
Felix Wang,
[Richard Weiss](http://evergreen.edu/faculty/instructor/weissr),
[Leon Resnik](https://www.cs.rit.edu/people/faculty/lr),
Justin Cappos
**TODO: Somehow indicate the difference between internal links and
external collabs.  People in the lab should have this link go to their
entry on this site...**

  * Tags: Testbeds, Security, Systems, Internet of Things, Networking  
** TODO: These should not just be text, but be used to allow searching, etc. **

**TODO: Need some kind of break between projects.  Either space or a horizontal
line or both.**


  ##### Password Protection and Improved Network Security


<a name="pph"></a>
- **[PolyPasswordHasher (PPH)](https://polypasswordhasher.github.io/PolyPasswordHasher/)**:  Password database disclosures can be devastating, costing companies billions of dollars in damages. Polypasswordhasher is a secure password storage system that is highly resilient to cracking because it interrelates stored password data. Potential hackers need to crack passwords in sets, rather than individually. For many scenarios, cracking a PolyPasswordHasher-enabled database would be unfeasible, even for an adversary with millions of computers.

  * Products:  Basic reference implementations of PPH have been written for Python, C, and Ruby. Easy to integrate libraries for different applications, including the Pluggable Authentication Module (PAM) used in a number of operating systems, including Linux and OS X. PPH is also used in the Seattle Clearinghouse and BioBank.

  * Project Members:   Santiago Torres-Arias,
  Vladimir Diaz,
  Shuyuan "Lolaly" Luo,
  Justin Cappos

  * Tags: Password storage database, password cracking, asymmetric effort, password resiliency

<a name="cachecash"></a>
- **CacheCash**:  With the rising demand for online content, decentralized delivery networks have emerged as an attractive solution to distribute the workload. The downside of these systems is that the incentives used to encourage content distributers can also encourage dishonest behavior. CacheCash is designed to address both the honesty and efficiency issues associated with many decentralized networks. A cryptocurrency system that provides a delivery mechanism on top of a currency exchange medium, CacheCash enforces honest behavior both through the use of cryptographic primitives and through a payment scheme that makes honest behavior more profitable for all concerned. In addition to its security aspects, early findings suggest CacheCash can scale to meet growing demand and adds only minimal bandwidth cost to users.

* Products:  Reference implementation coming soon.

* Project Members:   Ghada Almashaqbeh,
Luqin Wang,
[Allison Bishop Lewko](http://www.cs.columbia.edu/~allison/),
Justin Cappos

* Tags: content delivery networks, Bitcoin, cryptocurrency, peer to peer networks,blockchain.

##### Secure Software Updates

<a name="tuf"></a>
- **[The Update Framework (TUF)](https://theupdateframework.github.io/)**: TUF provides a comprehensive, flexible security framework that developers can integrate into any software update system, or native programming language due to its concise, self-contained architecture and specification. It offers developers and users protection from a host of potential attacks through the use of images and signing strategies.

  * Products: Currently deployed at [Leap](https://leap.se/en/2014/darkest-night), [Flynn](https://flynn.io/docs/development#the-update-framework-%28tuf%29\), and[Docker](http://schd.ws/hosted_files/linuxconcontainerconeurope2016/50/When%20the%20going%20gets%20tough%2C%20get%20TUF%20going%21%20Linuxcon%20EU.pdf\). Integrations are ongoing at repositories for Ruby, CoreOS, Haskell, OCaml, and Python’s PyPI.

  * Project Members:  Vladimir Diaz,
  Sebastien Awwad,
  Trishank Kuppusamy,
  Artiom Baloian,
  Felix Wang,
  Justin Cappos

  * Tags: software updates, package managers, application updaters, security framework, delegations, signing keys


<a name="uptane"></a>
- **[Uptane](https://uptane.github.io/)**: Cars today use a truly enormous
amount of software.  Like any
software, this software has bugs.  Unfortunately there is not a secure way
to update the software in cars today.  Our Uptane project provides a
mechanism to securely distribute updates to cars.  Uptane can counter a
comprehensive array of security attacks, and is resilient to partial
compromises, while addressing  automotive specific vulnerabilities and
limitations.

  * Products: [Our website](https://uptane.github.io/) contains high level
information about the project, including the
[design specification](need link) and [deployment considerations](need link).
For those who want lower level details, we also provide a
[implementation guide](need link), an open source
[reference implementation](need link), [compliance tests](need link), and
a [runnable demo](need link).


  * Project members:  Trishank Kuppusamy, Sebastien Awwad, Akanitoro Brown,
Damon McCoy, Russ Bielawski (UMTRI), Cameron Mott (SWRI), Sam Lauzon (UMTRI),
André Weimerskirch (UMTRI), Justin Cappos.  **TODO: Need links **

  * Tags: Security, Software Updates, Internet of Things



  ##### Secure Software Development

<a name="in-toto"></a>
- **in-toto**: Do you know where your software has been? Most software developers are careful to secure each step of their products supply chain, but  there is little or no security protection in-between these steps. in-toto  holistically enforces the integrity of a software supply chain by gathering and signing information about the chain itself. Through the use of “link metadata,” in-toto provides documentation that ensures clear accountability as to how software is written, packaged and distributed...and by who.

  * Products: in-Toto is currently being integrated into other lab projects, including PolyPasswordHasher.

  * Project Members: Santiago Torres-Arias,
  Lukas Pühringer,
  Vladimir Diaz,
  Artiom Baloian,
  Justin Cappos

  * Tags: software supply chain, link metadata, software tampering  

<a name="lind"></a>
- **Lind**: a virtual machine design that prevents the triggering of kernel bugs by locking all system calls into popular access paths. The design is based on the idea that popular paths—ones used every day to access basic system requests—are much less likely to contain vulnerabilities. This limited kernel access reduces the possibility of interaction with flawed code.

  * Products:

  * Project Members: Yiwen Li,
  Brendan Dolan-Gavitt,
  Justin Cappos

  * Tags: virtual machine, kernel bugs, popular paths

<a name="crashsimulator"></a>
- **CrashSimulator**: a tool that simulates “real-world” testing for new and upgraded software without the complications of “real-world” deployment. The program enables software developers to identify vulnerabilities in product designs long before they are packaged and released.		

  * Lessons Learned:

##### Understanding Code at the most Basic Level

<a name="atoms"></a>
- **Atoms of Confusion**: Within every confusing piece of software codes
  are small patterns that can lead developers  to outputs that radically
differ from what was intended. In studying these “atoms of confusion” we
look to build a firm empirical foundation for reducing code confusion in
software development and, thus, also reduce the frequency of buggy and
malfunctioning programs.

  * Project members:  Dan Gopstein, Devon Powell, Jake Iannacone, Lois Anne
DeLong, Apple Yan (PSU), Martin Yeh (PSU), Yanyan Zhuang (UCCS), Justin Cappos

  * Products:  The [project website](https://atomsofconfusion.com) provides
a rough background of our theory, studies, and analysis for this work.
We make all of our [study
materials and anonymized data](http://atomsofconfusion.com/experiments.html)
openly available so that other researchers can replicate, validate, and
build on our findings.

  * Tags: Software Engineering


<a name="blindspots"></a>
- **API Blindspots**: This project, a collaboration with researchers at the University of Florida, the University of Massachusetts-Amherst, and the University of Colorado, Colorado Springs, seeks to identify security-related blind spots in Application Programming Interfaces (APIs).
  * Products:


  ## Foundational Projects

These earlier lab projects are now completed and no new work on them is currently being done. However, these research initiatives remain important for a number of reasons. First, they set some parameters for the practical, problem-solving type of research the lab would do. And, in some cases, they pioneered approaches to particular security areas that continue to evolve into today’s products.

<a name="netcheck"></a>
- **NetCheck/CheckAPI**: NetCheck is a tool that can determine the cause of a failure in a networked application, without any application or network-specific knowledge, and without any modification to the application or its infrastructure. By treating an application as a blackbox, a diagnosis can be made using just a set of system call (syscall) invocation traces from the relevant end-hosts. By simulating the syscalls against a network model, syscalls that deviate from expected network semantics can be identified. In return, these deviations can be mapped to a diagnosis by using a set of heuristics.

  * Products: The source code for the NetCheck tool and all relevant documentation remain available at https://netcheck.poly.edu/projects/project/wiki.

  * Lessons Learned:

<a name="upir"></a>
- **upPIR**: upPIR is a secure protocol by which a client can privately retrieve information from a set of mirrors. By packaging the required information with other data that potentially could be requested, the user's preference can be masked. In doing so, the privacy of the client is protected as the nature of the requested information can not be used to give away his sexual orientation, religious beliefs, political beliefs, or other sensitive data about the client and/or her company.

  * Products:

  * Lessons Learned:
