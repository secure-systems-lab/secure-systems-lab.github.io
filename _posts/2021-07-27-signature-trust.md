---

layout: article
title: "Santa's signatures part 2 -- Who is signing your Christmas card?: Establishing trust"
subnav: blog
comments: true
tagline: ''
author: '<a href="/people#marina_moore">Marina Moore</a>'
categories:
  - Informational

---

In the previous post, we established that a kid can verify a card has not been changed since Santa signed it. The kid now wants to ensure that it was actually Santa or one of his trusted elves who signed the card. In this post, we ask how the kid can ensure that a signature came from a trusted holiday emissary, and not from the Grinch.


<img align="right" src="https://imgs.xkcd.com/comics/pgp_2x.png" style="margin: 0px 20px"/>

For cryptographic signatures, the source of truth lies in a verification strategy using a trusted public key infrastructure (PKI) system. I won’t go into all of the details of PKI systems here, though for an example of how to distribute keys you should check out [The Update Framework (TUF)](https://theupdateframework.io). But, basically, the PKI system is like Santa’s driver’s licence. It is a trusted source that affirms what Santa’s signature should look like on your Christmas card. Thus, it’s not the signature alone that assures little Timmy or Jane that Santa left them a card, but also the evidence that some authority—in this case the North Pole DMV—affirmed what Santa’s signature, and those of his elves, look like.

But what if a fake license was substituted for the real one at some point? To check if such a substitution is possible, we would need some key contextual information. In verifying signatures, that might include knowing who owns the private key used. For example, a software updater may send a signed package, along with the public key necessary to verify that package all in the same protocol. Yet, if an attacker is able to interrupt network traffic or gain access to the software repository, that attacker can then change both the package and the key used to sign the package. It would be the equivalent of the Grinch signing a letter with Santa’s name, and attaching a fake driver’s licence with a matching signature. This leaves the recipient no better off than when they download unsigned data.


<img align="right" src="/img/signature-verification-exploit.jpg" style="margin: 0px 20px"/>

In order to ensure that software is not only signed, but valid, you must ensure that you are using a public key that was communicated over a secure channel, thus keeping out any interfering Grinches. For cryptographic signatures, a secure channel can be a trusted PKI system such as TUF, or an offline mechanism. These mechanisms act like government issued ids and allow you to verify the identity of an individual. By ensuring that the public keys are communicated securely, you can ensure that when they are used to verify data, that data actually came from a trusted signer.

In this post, we established how to obtain a collection of trusted keys, but on it’s own this isn’t sufficient to build a secure signature system. In future posts, I will focus on other important considerations when using cryptographic signatures, including ensuring that signatures are valid at the time they are verified, ensuring that the revocation of keys or signatures is communicated to the verifier, and effectively communicating signing algorithms.
