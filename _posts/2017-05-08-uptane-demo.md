---
layout: article
title: "Demonstrated defense: Uptane takes a test drive"
subnav: blog
comments: true
tagline: 'While the Uptane group continues to invite white hat hackers
 to “break our system” before malicious parties attempt to do so for real,
several of the developers..'
author: '<a href="/people#lois_delong">Lois Anne DeLong</a>'
categories:
  - '<a href="/projects#uptane">Uptane</a>'

---  

While the Uptane group continues to [invite white hat hackers](http://engineering.nyu.edu/press-releases/2017/01/18/call-issued-white-hat-hackers-find-flaws-new-automotive-software-updater) to “break our system” before malicious parties attempt to do so for real,
several of the developers behind the project decided to put on their black hats
and test the defenses themselves. To let potential users see how Uptane—a
secure update framework for automotive computing units—works,
<a href="people#sebastien_awwad">Sebastien Awwad</a>
and <a href="people#vlad_diaz">Vladimir Diaz</a>, developers with NYU’s Secure
Systems Laboratory, have prepared and posted a demonstration on YouTube. The 13 minute presentation at https://www.youtube.com/watch?v=Iz1l7IK_y2c&feature=youtu.be
shows how Uptane provides resilience against six different, and increasingly
malicious simulated attacks—a small sampling of the many threats against which
Uptane can defend.

Awwad provides a brief overview of the system, then conducts and narrates a
normal update. This is followed by the attacks, which begin with a “very basic”
man-in-the-middle attack on the Director Repository, a live repository of
instructions for each vehicle. Attacks are also conducted against the system's
Image Repository, a more static repository of available updates, as well as on
both simultaneously. The attacks escalate from there, until they conclude with
a demonstration of how OEMs or suppliers can bring repositories back after a
major key compromise, and prevent harm stemming from the use of compromised
keys by malicious actors.

Within the demo, two Raspberry Pis are used as stand-ins for primary and
secondary clients in an automobile, Electronic Control Units (ECUs)
such as the infotainment ECU and a transmission control unit. A monitor
displays the web-based front-end for the central services that assign updates
to vehicles.

The Uptane project provides a mechanism to securely distribute software updates
to cars, thus avoiding the comprehensive array of security attacks that can
attack critical systems.  For additional information on Uptane,
[go to its web site](https://uptane.github.io/).
