---

layout: article
title: "Santa's signatures part 3 -- Ensuring the Easter Bunny isn’t signing your Christmas cards: Applying limitations of trust"
subnav: blog
comments: true
tagline: ''
author: '<a href="/people#marina_moore">Marina Moore</a>'
categories:
  - Informational

---

In parts 1 and 2, we learned how to verify a signature from Santa, and to ensure that this signature actually came from a trusted party. However, the kid trusts a lot of different holiday icons, so how do they place limitations on who they trust to send cards for each holiday. Maybe for a birthday, a child could get cards from any holiday character, but the kid wants to ensure that the Easter Bunny isn’t overstepping and signing Christmas cards as well.

One initial solution here is to maintain a mapping of every holiday to the entity trusted to sign cards for that holiday. However, there are a lot of holidays to keep track of, and each icon may replace or revoke keys, which would need to be reflected in the mapping. Further, Santa likes to delegate a lot of his Christmas card signing to his elves (which we will talk more about in a future post), so he wants to make sure that the elves’ keys are trusted by anyone who trusts his signature.

Communicating which individual keys are eligible to sign packages can be a time- and labor-intensive process. Namespacing is an effective way to manage the issue of who can sign for what. This mechanism, which is included by default in The Update Framework (TUF), can be used to define which key is trusted for each piece of software. To do so, you start by securely communicating a set of public keys and the subset of software packages that each key is trusted to sign (the namespace).

Not all keys should be trusted for every piece of software. A valid signature for Santa Claus should not be used to validate a Halloween card. A Debian developer trusted for maintaining the documentation shouldn’t need to be trusted to sign the kernel (though this is what happens today). This means that you not only need to know ahead of time what keys you trust, but also which of these keys should be used to verify specific packages.

Now, our skeptical child can not only ensure that his Christmas card is authentic, they can make the same claim of every holiday card throughout the year. However, they still need to securely receive each trusted key. In the next part, we will discuss how to simplify key distribution through the use of delegations.

[Go to part 4: Saving Santa some signing: Using delegations to distribute data](https://ssl.engineering.nyu.edu/blog/2021-08-12-signature-delegations)

Previous posts in this series:
* [Part 1: Did the Grinch intercept your Christmas card?: The importance of signature verification](https://ssl.engineering.nyu.edu/blog/2021-07-26-signature-verification)
* [Part 2: Who is signing your Christmas card?: Establishing trust](https://ssl.engineering.nyu.edu/blog/2021-07-27-signature-trust)
