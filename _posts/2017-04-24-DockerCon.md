---
layout: article
title: Notes from DockerCon 2017
subnav: blog
comments: true
tagline: "This week several members of the lab went to <a 
href="http://2017.dockercon.com/">DockerCon 2017</a> to learn about some of 
the exciting new things happening in the Docker eco-system.  We also gave a 
talk on <a href="/projects#tuf">TUF</a>..."
author: '<a href="/people#justin_cappos">Justin Cappos</a>'
categories:
  - '<a href="/projects#tuf">TUF</a>'
  - '<a href="/projects#in-toto">in-toto</a>'
  - '<a href="/projects#lind">lind</a>'
---  

This week, several members of the lab went to <a 
href="http://2017.dockercon.com/">DockerCon 2017</a> to learn about some of
the exciting new things happening in the Docker eco-system.  We also gave a
talk on <a href="/projects#tuf">TUF</a>, focusing on it's integration into
<a href="https://github.com/docker/notary">Notary</a>, one of the key
security systems in Docker.  

There are many amazing things happening in the Docker ecosystem.
However, three main things stuck with me, and I'd like to highlight them here.

**Securely distributing secrets.**  A major problem that arises in cloud
systems is how to insert secret information into a new VM or container
instance when you start it.  For example, how do you get your configuration
file with the database's password into your cloud system?  If you put it in
your image, as some developers accidentally do, attackers can read out
these secrets.

Docker's security team has been extending Notary's implementation of TUF to 
ensure the secure distribution of secrets.  Their technique securely maps the
secret into the file system of the worker container.  Even though the secret
is mapped as a file, it is actually only stored in memory and is never
written to disk.  The Docker team has added a lot of clever
design aspects to make this possible.  I'm sure I'll be
talking in more detail about this new technique in a future post.

**Moby makes it easier to customize Docker.**  One of the highlights from
the keynote was that Docker will be making it much easier to replace bits
and pieces of their infrastructure. That is, the company has made it much easier
to pull out bits of
Docker so they can be repurposed.  This change also makes it easier to build
a custom component and insert it into Docker.  This is particularly
interesting for us because of our interest in integrating technologies
like <a href="/projects#lind">Lind</a> into container systems.

**Software supply chain.**  One of the key things our <a
href="/projects#in-toto">in-toto</a> project has been focused on over
the past few years is providing security early in the development process.
Multiple different companies at DockerCon are clearly starting to think in
this direction as well.  Evidence of this can be seen by the amount of 
activity dealing with scanning
containers to ensure that they do not contain libraries with known
vulnerabilities, as well as assertions that the CI/CD process was run on the
software.  

This certainly indicates to us that we are focusing on a
pressing and important problem.  However, we can provide much more
holistic security, starting with the VCS or even the editor.  We also
support a lot of supply chain verification on the software that goes into
containers.  We've had some discussions with people on Docker's security 
team and with the security groups of a few other major projects.  The 
response to the added benefits and additional rigor of in-toto has been 
very positive.  Now we will start to work with them toward full 
integration of in-toto in the products!

![Justin illustration poster](ssl-site/img/justin_docker_424.jpg)
