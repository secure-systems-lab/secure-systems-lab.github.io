---
layout: article
title: "Medical Device Insecurity --- A Prescription For Disaster"
subnav: blog
comments: true
tagline: 'This past week I spent time in Finland working with medical device 
experts.  I talked to vendors, hospital IT personnel, and security 
experts which helped me learn a lot...'
author: '<a href="/people#justin_cappos">Justin Cappos</a>'
categories:
  - '<a href="/projects#upccinate">Upccinate</a>'

---
This past week I spent time in Finland working with medical device 
experts.  I talked to vendors, hospital IT personnel, and security experts, 
which helped me learn a lot more about the deployment environment and general use
models of these devices.  I want to focus on one of the key parts of the event ---
a hack-a-thon.

About 30 hackathon participants had the opportunity to break
one of five different medical devices. Of these, my hack-a-thon partner and I
spent a substantial amount of time working with one device. We were able to work
with others to fashion an exploit that gave us a root shell. We then used this
flaw to display a ransom-ware style message on the device's screen to 
threaten the user.  

Even more frightening, we found that devices of that type can be discovered
and exploited remotely. At least in the configuration we tested, the 
device attempts to receive instructions from a server over HTTPS.  However,
there is no certificate checking!  So, any man-in-the-middle attacker could
control this hostname and/or IP address, and, consequently, compromise all
devices of this type.

There were a host of other issues with the device.  We found it was 
riddled with CSRF vulnerabilities, code injection faults, and
basic failures in logic, such as neglecting to check the old password on the 
password change page. Furthermore, after dumping the OS image, we found 
dozens of pieces of outdated software installed. All combined, the device had
more than a thousand known security issues.

While the product we hacked was the worst offender across all the medical devices at the
hack-a-thon, the other four had a host of issues as well.  
Another researcher found a different device would tell you the username and 
password hash even if you provided the wrong password or username.  Since the
password was not salted, you could simply search for the hash on Google to
find the password (the company's name!).

Overall, it was a really interesting time and taught me a lot about the
mindset of vendors in the space, and the challenges ahead in improving security
in this sector. The vendors I spoke with are trying hard to address these 
issues, which is evident by the fact that newer devices are much more secure 
than older ones.  I hope that we can work with them in the future to help 
secure these devices in which even the smallest vulnerability can have a 
profound impact on human health!
