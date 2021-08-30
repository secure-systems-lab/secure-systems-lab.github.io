---

layout: article
title: "Santa's signatures part 1 -- Did the Grinch intercept your Christmas card?: The importance of signature verification"
subnav: blog
comments: true
tagline: 'Why cryptographic signatures are only useful when paired with  verification.'
author: '<a href="/people#marina_moore">Marina Moore</a>'
categories:
  - Informational

---

Recently, there has been greater awareness of the importance of using cryptographic signatures as a protective measure when distributing software and metadata. This is a big win for the overall security of software ecosystems, but on their own, signatures do not enhance software security. Anyone can sign a holiday card as “Santa Claus,” but if a kid wants to be sure that the card has not been altered since Santa signed it, more evidence is needed.

In this series of posts, I want to spend some time talking about the importance of signature verification and understanding what is and isn’t achieved by validating a signature. To start, let’s define what we mean by a cryptographic signature. A signature is a bit of cryptography attached to an asset that allows whoever controls a given [private key](https://en.wikipedia.org/wiki/Public-key_cryptography) to attest to the validity of that asset. Anyone with a computer can generate a signature for an asset using their own private key. The benefit of signatures is they provide assurance of the veracity of the data associated with them. To verify a signature, another entity can use a public key associated with the private key to ensure that the signature was made by a particular trusted party, and that the data associated with the signature was not altered in transit.

Using a cryptographic signature, a kid can ensure that after Santa wrote and signed your Christmas card, the Grinch didn’t change a few words in the middle. The signature allows for assurance of the integrity of the message from when Santa signed it in the North Pole to when a kid opened it in the living room on Christmas Day.

[Go to part 2: Who is signing your Christmas card?: Establishing trust](https://ssl.engineering.nyu.edu/blog/2021-07-27-signature-trust)
