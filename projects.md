---
title: Projects
layout: default
---

Though all of SSL’s research initiatives—past and present— revolve around ensuring secure operation of computer systems, the specific areas addressed by the team vary greatly. Current initiatives can be grouped into five general categories.

## Current & Ongoing Projects

##### Remote Utilization and Testing of Wireless Devices

<a name="seattle"></a>
- **[Seattle](https://seattle.poly.edu/html/)**:
As networks and distributed systems grow more complex, there is a genuine need to better understand how they operate. Seattle is a software program that supports both research and educational initiatives in these areas. Designed as a collaborative effort, all Seattle projects are run on resources—such as laptops, servers, and phones— donated by users and institutions. It currently serves updates to more than 40K geographically distributed devices around the world.

  * Products: Our website contains information and links to educational modules, and a clearinghouse of available resources for those who wish to download and use the Seattle program, or to donate use of their devices for research purposes.  

  * Project members:  Albert Rafetseder,
Lukas Pühringer,
Sebastien Awwad,
Rohan Ketan Bhirangi,
Ajay Shenoy,
Deepankar Jaisia,
Justin Cappos

  * Tags: networking, research platform, cloud technology, device

<a name="sensibility"></a>
- **[Sensibility Testbed](https://sensibilitytestbed.com/)**:
 Given the close proximity of smartphones to users,
researchers could benefit from accessing smartphone sensors. By giving the user
control over what amount and type of data is gathered, Sensibility ensures the
privacy of user information. Sensibility also has additional security
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
- **[PolyPasswordHasher (PPH)](https://polypasswordhasher.github.io/PolyPasswordHasher/)**:  If a password database disclosure occurs, it can be devastating, costing companies billions of dollars in damages. Polypasswordhasher offers a new approach to securing stored passwords. By interrelating stored password data, potential hackers are forced to crack passwords in sets. This increases the attackers  level of difficulty, making a PolyPasswordHasher-enabled database very hard to breach, even for an adversary with millions of computers.

  * Products:  Basic reference implementations of PPH have been written for Python, C, and Ruby. Easy to integrate libraries for different applications, including the Pluggable Authentication Module (PAM), are used in a number of operating systems, including Linux and OS X. PPH is also used in the Seattle Clearinghouse and BioBank.

  * Project Members:   Santiago Torres-Arias,
  Vladimir Diaz,
  Shuyuan "Lolaly" Luo,
  Justin Cappos

  * Tags: Password storage database, password cracking, asymmetric effort, password resiliency

<a name="cachecash"></a>
- **CacheCash**:  With the rising demand for fast and efficient delivery of online content, decentralized provider networks have emerged as an attractive solution. The downside of these systems is keeping all parties involved honest and reliable. CacheCash combines proven cryptographic strategies with a payment scheme that makes honest behavior profitable for all concerned. In addition to its security aspects, early findings suggest CacheCash can also scale to meet growing demands, while adding only minimal bandwidth cost for users.

* Products:  Reference implementation coming soon.

* Project Members:   Ghada Almashaqbeh,
Luqin Wang,
[Allison Bishop Lewko](http://www.cs.columbia.edu/~allison/),
Justin Cappos

* Tags: content delivery networks, Bitcoin, cryptocurrency, peer to peer networks, blockchain.

##### Secure Software Updates

<a name="tuf"></a>
- **[The Update Framework (TUF)](https://theupdateframework.github.io/)**: Software must be updated frequently to not only ensure improved operations, but also to address flaws that are often corrected in later versions. Unfortunately, updates can introduce new flaws, and thus pose a security risk. TUF is a comprehensive, flexible framework to secure such updates. Developers can integrate TUF into any software update system, or native programming language due to its concise, self-contained architecture and specification. It offers developers and users protection from a host of potential attacks.

  * Products: Currently deployed at [Leap](https://leap.se/en/2014/darkest-night), [Flynn](https://flynn.io/docs/development#the-update-framework-%28tuf%29\), and[Docker](http://schd.ws/hosted_files/linuxconcontainerconeurope2016/50/When%20the%20going%20gets%20tough%2C%20get%20TUF%20going%21%20Linuxcon%20EU.pdf\). Integrations are ongoing at repositories for Ruby, CoreOS, Haskell, OCaml, and Python’s PyPI.

  * Project Members:  Vladimir Diaz,
  Sebastien Awwad,
  Trishank Kuppusamy,
  Artiom Baloian,
  Felix Wang,
  Justin Cappos

  * Tags: software updates, package managers, application updaters, security framework, delegations, signing keys


<a name="uptane"></a>
- **[Uptane](https://uptane.github.io/)**: Cars today rely on an enormous
amount of software.  Like any
software, this software has bugs.  Unfortunately there is not a secure way
to update the software in cars today.  Our Uptane project provides a
mechanism to securely distribute updates to cars.  Uptane can counter a
comprehensive array of security attacks, and is resilient to partial
compromises, while addressing  automotive-specific vulnerabilities and
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
- **in-toto**: Do you know who has handled your software prior to its installation on your machine? While most developers are careful to secure each step in their products' supply chain, there is little assurance about what happens in-between these steps. The in-toto system holistically enforces the integrity of a software supply chain by gathering and signing information about the chain itself. As such, in-Toto provides documentation that ensures clear accountability as to how software is written, packaged and distributed...and by who.

  * Products: The in-Toto program is currently being integrated into other lab software, including PolyPasswordHasher.

  * Project Members: Santiago Torres-Arias,
  [Reza Curtmola](https://web.njit.edu/~crix/),
  Lukas Pühringer,
  Vladimir Diaz,
  Artiom Baloian,
  Justin Cappos

  * Tags: software supply chain, link metadata, software tampering  

<a name="lind"></a>
- **Lind**: Despite the best efforts of developers most program kernels contain flaws, and strategies to defend against triggering them have fallen short. Lind is a new virtual machine design that defends against these bugs by locking all system calls into popular access paths. The design is based on the idea that popular paths—ones used every day to access basic system requests—are much less likely to contain vulnerabilities. This limited kernel access reduces the possibility of interaction with flawed code.

  * Project Members: Yiwen Li,
  Brendan Dolan-Gavitt,
  Justin Cappos

  * Tags: virtual machine, kernel bugs, popular paths

<a name="crashsimulator"></a>
- **CrashSimulator**: CrashSimulator is a tool that replicates “real-world” testing for new and upgraded software without the complications of “real-world” deployment. The program enables software developers to identify vulnerabilities in product designs long before they are packaged and released.		

  * Project members: Preston Moore,
  Phyllis Frankl,
  Justin Cappos

  * Tags: software testing, software flaws, simulation tools


##### Understanding Code at the most Basic Level

<a name="atoms"></a>
- **Atoms of Confusion**: Within every confusing piece of software codes
  are small patterns that can lead developers  to outputs that radically
differ from what was intended. In studying these “atoms of confusion” we
look to build a firm empirical foundation for reducing code confusion in
software development and, thus, also reduce the frequency of buggy and
malfunctioning programs.

  * Project members:  Dan Gopstein, Devon Powell, Jake Iannacone, Lois Anne
DeLong, Apple Yan (PSU), [Martin Yeh (PSU)](http://brandywine.psu.edu/person/martin-yeh), [Yanyan Zhuang(UCCS)](http://www.cs.uccs.edu/~yzhuang/), Justin Cappos

  * Products:  The [project website](https://atomsofconfusion.com) provides
a rough background of our theory, studies, and analysis for this work.
We make all of our [study
materials and anonymized data](http://atomsofconfusion.com/experiments.html)
openly available so that other researchers can replicate, validate, and
build on our findings.

  * Tags: Software engineering, code complexity, code comprehension


<a name="blindspots"></a>
- **API Blindspots**: This project, a collaboration with researchers at the University of Florida, the University of Massachusetts-Amherst, and the University of Colorado, Colorado Springs, seeks to identify security-related blind spots in Application Programming Interfaces (APIs).

* Project members: Rad Akefirad, Lois Anne DeLong, Justin Cappos, [Daniela Oliveira (UF)](http://www.daniela.ece.ufl.edu/Home.html), Olabode Anise (UF), [Natalie Ebner (UF)](http://www.psych.ufl.edu/~ebner/), Donovan Ellis (UF) [Yuriy Brun (UMass-Amherst)](https://people.cs.umass.edu/~brun/), [Yanyan Zhuang(UCCS)](http://www.cs.uccs.edu/~yzhuang/).

* Tags: Software engineering, code complexity, program comprehension

  ## Foundational Projects

These earlier lab projects are now completed and no new work is currently being carried out.

<a name="netcheck"></a>
- **NetCheck**: NetCheck is a tool that can determine the cause of a failure in a networked application, without any modification to the application or its infrastructure. By treating an application as a blackbox, a diagnosis can be made using just a set of system call (syscall) invocation traces from the relevant end-hosts.

  * Products: On the [project web page](https://netcheck.poly.edu/projects/project/wikisource), code for the NetCheck tool and all relevant documentation remain available.

<a name="upir"></a>
- **upPIR**: upPIR is a secure protocol that allows users to mask their information requests by privately retrieving information from a set of mirrors. By packaging the required information with other data that potentially could be requested, the user's preferences—and any assumptions that could be deduced from those preferences—remain hidden.

  * Products: The prototype code for this project is available on our [github repository](https://github.com/trishankkarthik/multiblockpir).
