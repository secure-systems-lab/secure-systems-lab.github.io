---
layout: article
title: Where the Rubber Meets the Road. Lessons learned from NetCheck
subnav: blog
comments: true
tagline: "In 2014, Eleni Gessiou, Yanyan Zhuang,
Justin Cappos, and four of their students introduced a new diagnostic tool
called..."
author: '<a href="/people#justin_cappos">Justin Cappos</a>'
categories:
  - '<a href="/projects#netcheck">NetCheck</a>'

---
In 2014, Eleni Gessiou, <a href="/people#yanyan_zhuang">Yanyan Zhuang</a>,
<a href="/people#justin_cappos">Justin Cappos</a>, and four of their students
introduced a new diagnostic tool called
[NetCheck](https://netcheck.poly.edu/projects/project) designed to detect the
causes of failure in networked applications. What set this tool apart from other
fault diagnostic tools is that it could pinpoint the cause of failure, even
if little was known about the network or the application itself. The system
functioned “by simulating a set of system call (syscall) invocation traces
collected at runtime using standard blackbox tracing tools, and running them
against a network model,” Zhuang explained.

Initial findings about the tool were quite positive. In a
[paper](http://www.cs.ubc.ca/~yyzh/nsdi14netcheck.pdf) presented that
year at the Usenix Networked Systems Design and Implementation (NSDI)
conference, the research team noted that,
when run on traces that reproduce faults identified in 30 popular open-source
projects, NetCheck “correctly diagnosed over 95%” of the bugs.” The paper
also reports that NetCheck was “able to diagnose problems in such popular
applications as Skype and VirtualBox.”

Following its introduction, a few practitioners tried out the tool in a number
of different contexts.  One major financial company employed NetCheck to
debug issues in their setup, but released little information publicly about
their experiences.  However, the Seattle project (link), used NetCheck to
help to diagnose network issues in its own deployment.  Through this experience,
some of NetCheck’s limitations and unstated assumptions became apparent.
Cappos recently elaborated on these limitations, and explains why the biggest
challenges in implementing the tool are ones that the lab alone can not resolve.

1. **[Big hurdle] Acquiring traces is non-trivial for many deployment
environments:** Collecting system call traces has a few challenges of its own.
“First, for many deployment environments, it requires a fair amount of
know-how,” Cappos explains. “A cloud provider would need to trace the specific
thread that serves a user’s connections. Due to load balancers and/or failures,
the user’s requests may be handled by different machines at different times,
which may make this tracing difficult, to put it mildly.” Furthermore, since
tracing is done on a per-thread or per-process basis, many traces on a server
will incidentally capture requests and other information from other users,
thus creating some significant privacy issues.
  * *Potential remediation.*  This fundamental problem can not be remediated by SSL
and thus prevents NetCheck from working for distributed applications in the
cloud. However, within these limitations, server administrators certainly
could use it to debug things within their own environments.  If the user
sends the server administrator the network trace, that would also work well.
NetCheck is also useful for peer-to-peer software.

2. **[Big hurdle] On many operating systems, system call tracing tools yield
incomplete or less than accurate results:** One consequence of this is that traces
from some OSs (such as Mac and Windows) often lack all of the elements NetCheck
requires for analysis.  For example, dtrace (on Mac) will not capture the
SO_REUSEADDR flag’s setting.  Instead, it captures the memory address where
this flag is stored.  As a result, many important parts of the trace would be
omitted.

  * *Potential remediation.*  To address this issue, “OS vendors would need to
build more accurate tools,” Cappos asserts. “This is a fundamental issue that
is difficult for us to surmount since, in some cases, it would requires kernel
access to non-open source OSes.”

3. **[Medium hurdle] Traces are not uniform across operating systems:** Further
complicating things, traces can differ substantially on different OSes.
Experience has shown that system call tracing tools may record different
information even when executing ‘POSIX’-compliant programs.  “As it stands
now we would need to build one tracing tool per system to reliably access
all the trace elements required,” Cappos says. “Since the idea behind the
development of the tool was for it to be useful across multiple operating
systems, substantially more effort would be needed to make and test the tool
in different environments.”

  * *Potential remediation.*  A former NYU student,
[Savvas Savvides](https://www.cs.purdue.edu/homes/ssavvide/), built a
[parser](https://github.com/ssavvides/posix-omni-parser) that is meant to
abstract away OS differences in traces.  This parser is currently being used in
our on-going work with <a href="/projects#crashsimulator">CrashSimulator</a>, but,
it would need to be much more complete to address this issue effectively.
As an extreme example, working with
Windows (via the WindowsAPI) would require re-engineering almost the entire
set of system call interactions in NetCheck.

4. **[Medium hurdle]The classification of errors was too broad to be
practical:** “NetCheck works by looking for error patterns that can be classified
by the presence of bugs or evidence of specific types of behavior. The initial
study documented in the paper  looked at 70 traces, and at the time we
published, we thought we had done a good job,” Cappos states. But, often only
one or two of those traces focused on a specific situation of significance,
such as NAT traversal or using a VPN.  As such, when using NetCheck in other
scenarios, “we found we had overfit for our initial test set. Thus, the high
level output we received from the classifier was not as useful as we had
originally expected.”

* *Potential remediation.*  More data would be very useful in improving the
classification.  With sufficient practical effort, we feel it is likely we
could do a better job of categorization.  However, as it now stands,
NetCheck’s results are “too broad or too vague, and would require too much work
from a much larger dataset than could be reasonably obtained,” Cappos affirms.

5. **[Small hurdle] In practice, collection would have many incomplete traces:**
System call tracing for large running applications would be unlikely to start
when the server begins running.  The reason is that servers often run over very
long periods of time to handle user requests.  While it is possible to begin
tracing a running application, NetCheck would need to be
modified to do so.  Uncertainty about what issues might have occurred
before the start of the trace could cause additional errors in diagnosis.

* *Potential remediation.*  “This seems more like an implementation detail at
first glance,” Cappos notes, “but without accounting for it, it isn’t clear if
there may be research problems lurking here.  If NetCheck were more widely
used, we would explore this area further.”

6. **[Small hurdle] Co-locating traces is a substantial challenge in some
environments:**  Even if you can get different parties to agree to acquire and
share traces, locating these (potentially large) files on the same system to
run the analysis is time consuming. Less effective tools, such as ping and
traceroute, require much less effort. As such, NetCheck is mostly useful
for specialized debugging by moderately skilled users.  

* *Potential remediation.*  N/A.

Though he still calls it “an appropriate idea for a research paper,”  Cappos
recently decided to stop trying to transition NetCheck into practical use,
and retired it from the SSL’s active project roster owing to the many problems
cited above.  Yet, even as NetCheck recedes to the archives, Zhuang makes
the case for its importance in  opening an important new avenue for research.
By pointing out that “people make assumptions when they code,” Zhuang contends
that there is a direct connection from the ideas in NetCheck to two current lab
initiatives: <a href="/projects#atomsofconfusion">Atoms of Confusion</a>  and
<a href="/projects#blindspots">API Blindspots</a>. Both projects deal with
understanding how human perceptions and actions in writing and understanding
code can influence code quality.  In this indirect manner, NetCheck’s potential
 may finally come to fruition.
