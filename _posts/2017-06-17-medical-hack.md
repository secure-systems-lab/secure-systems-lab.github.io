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
experts.  I talked to vendors, hospital IT personnel, and security experts 
which helped me learn a lot about the deployment environment and general use
models of devices.  I want to focus on one of the key parts of the event ---
a hack-a-thon.

The hack-a-thon had about 30 participants had 5 different medical devices 
available to hack.  Of these, my hack-a-thon partner and I spent a substantial
amount of time working with one device.   We were able to work with others 
and make a working exploit that gave us a root shell.  We used this to display 
a ransom-ware style message on the device's screen to threaten the user.  

Even more frightening, we found that devices of that type are remotely 
discoverable and exploitable.  At least in the configuration we tested, the 
device attempts to receive instructions from a server over HTTPS.  However,
there is no certificate checking!  So any man-in-the-middle attacker could
control this hostname and/or IP address and compromise all devices of this
type.

There were a host of other issues with the device.  We found the device was 
riddled with CSRF vulnerabilities, code injection faults, and
basic failures in logic (such as neglecting to check the old password on the 
password change page). Furthermore, after dumping the OS image we found 
there were dozens of pieces of outdated software installed which had over a 
thousand known security issues (combined).

While this device was the worst offender across all medical devices at the
hack-a-thon, there were a host of issues on other devices as well.  
Another researcher found a different device would tell you the username and 
password hash if you provided the wrong password or username.  Since the
password was not salted, you could simply search for the hash on Google to
find the password (the company's name!).

Overall, it was a really interesting time and taught me a lot about the
thinking of vendors in the space and the challenges that are ahead. 
The vendors I spoke with are trying hard in this space, which is evident
by the fact that newer devices are much more secure than older ones.  I hope
that we can work with them in the future to help!
