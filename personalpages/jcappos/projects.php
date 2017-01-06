<?php
$title ="RESEARCH PROJECTS";
//SET FONT SIZE HERE //>
$fontSize ="30px";
require 'header2.php';
?>







<!-- ####################################################################################################### -->

<div class="wrapper row4">
  <div id="container" class="clear">
  
    <!-- ####################################################################################################### -->
    <div id="homepage" class="clear">
    <div class="fl_right">
    
   <h1>Current Research</h1>
<p><span>I'm currently working on several research projects (in stealth mode) with&nbsp;</span><a href="http://www.nycmedialab.org/">NYC Media Lab</a><span>&nbsp;and&nbsp;</span><a href="http://www.nyuwireless.org/">NYU WIRELESS</a><span>.</span></p>

<p>I tend not to publicize my work until after publication or broad adoption.
Hence, most of my ongoing work is not listed here.</p>
<h2>Seattle</h2>
<p><a href="https://seattle.poly.edu/">Seattle</a>&nbsp;provides a secure facility for the execution of code (geared primarily toward networking and distributed systems). We have built a testbed that as of December 2012 has about 3-6 thousand available VMs at a time (with a pool of about 20 thousand nodes). Seattle has seen significant use both in <a href="http://portal.acm.org/citation.cfm?id=1508905">educational</a>&nbsp;and&nbsp;<a href="http://groups.geni.net/geni/wiki/Gec8Workshops#SeattleGENItutorial">research</a>&nbsp;communities.</p>
<p>If you're interested in educational materials for networking, cloud, or computer security classes, I recommend looking at Seattle's&nbsp;<a href="https://seattle.poly.edu/html/education.html">reusable educational modules</a>. Seattle has been used in about 50 classes across more than a dozen universities.</p>
<p>Seattle's educational materials are the top ranked resource on the&nbsp;<a href="http://education.sigcomm.org/">ACM SIGCOMM Educational Resources</a>&nbsp;website. Assignments using Seattle are being included in the next versionof the&nbsp;<a href="http://www.pearsonhighered.com/kurose-ross/">most popular networking textbook</a>.</p>
<p>One of the important building blocks of the Seattle testbed is our code code execution sandbox. Our sandbox is designed to resist implementation flaws and is easily extensible with new policies. This means that users can feel confident that Seattle does not pose a major security risk. For more details on the security properties of our sandbox, please see our&nbsp;<a href="http://portal.acm.org/citation.cfm?id=1866307.1866332">CCS paper</a>.</p>
<p>For more information, please visit&nbsp;<a href="https://seattle.poly.edu/">our website</a>.</p>
<h2>TUF</h2>
<p>The TUF project focuses on fixing security issues in software updaters in a holistic manner. Unfortunately, many software updaters cannot be easily modified because they are either closed source or poorly maintained. However, as&nbsp;<a href="http://www.cs.arizona.edu/people/justin/packagemanagersecurity/">our previous work</a>&nbsp;<a href="http://portal.acm.org/citation.cfm?id=1455841">has shown</a>, many existing software update systems are vulnerable to man-in-the-middle attackers. To secure these software updaters, we will intercept the client's software updater traffic using a proxy on the local machine. The client-side proxy will retrieve security metadata from a repository we control to protect even those clients that use insecure updaters.</p>
<p>We recently examined how to construct a software update system that is&nbsp;<a href="http://portal.acm.org/citation.cfm?id=1866315">resilient to key compromise</a> and included this design inside of TUF.</p>
<p>For more information, please visit&nbsp;<a href="http://www.updateframework.com/">http://www.updateframework.com/</a>.</p>



<hr/>
<h1>Past Projects</h1>

<h2>Stork / Raven</h2>
<p><a href="http://www.cs.arizona.edu/stork">Stork</a>&nbsp;(and the follow on project&nbsp;<a href="http://raven.cs.arizona.edu/">Raven</a>) provide intelligent package management for real world systems. In particular, we focus on problems with current package managers related to security, virtualization, and scale.</p>
<p>We've also examined the&nbsp;<a href="http://www.cs.arizona.edu/people/justin/packagemanagersecurity/">security of different package managers</a>. We looked at ten popular package managers and found they are vulnerable to a variety of attacks. Furthermore, launching these attacks is trivial because we demonstrate it is simple to obtain an official mirror for a distribution.</p>
<p>Ryan Globbi at the CERT was kind enough to contact the developers to responsibly disclose the vulnerabilities and also published a&nbsp;<a href="http://www.cert.org/blogs/vuls/2008/07/using_package_managers.html">blog entry</a>&nbsp;on the subject. There was also a&nbsp;<a href="http://it.slashdot.org/it/08/07/10/227220.shtml">spirited discussion</a>&nbsp;about this research on&nbsp;<a href="http://slashdot.org/">slashdot</a>&nbsp;and other popular forums.</p>
<h2>Rhizoma</h2>
<p>Rhizoma is a constraint-based runtime system for distributed applications which is self-hosting. The application manages itself to the extent of acquiring and releasing resources (in particular, virtual machines) in response to failures, offered load, or changing policy. Operators developing and deploying application using Rhizoma specify desired application deployment using a form of constrained logic programming, and the Rhizoma runtime uses this to drive resource requests continuously during the lifetime of the application.</p>
<h2>San Ferm&iacute;n</h2>
<p>San Ferm&iacute;n is a system for aggregating large amounts of data from the nodes of large-scale distributed systems. Each San Ferm&iacute;n node individually computes the aggregated result by swapping data with other nodes to dynamically create its own binomial tree. Nodes that fall behind abort their trees, thereby reducing overhead. Having each node create its own binomial tree makes San Ferm&iacute;n highly resilient to failures and ensures that the internal nodes of the tree have high capacity, thereby reducing completion time.</p>


        </div>
      <?php

require 'sidebar2.php';
?>

<!-- ####################################################################################################### -->
<div class="wrapper row5">
   <div id="copyright" class="clear">
   
 <?php
require 'footer.php';
?>
