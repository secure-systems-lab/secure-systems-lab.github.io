---

layout: article
title: "Santa's signatures part 4 -- Saving Santa some signing: Using delegations to distribute data"
subnav: blog
comments: true
tagline: ''
author: '<a href="/people#marina_moore">Marina Moore</a>'
categories:
  - Informational

---

In parts 1-3, we discussed how very bright children can use signatures, verification, and namespacing to ensure that their Christmas cards actually came from Santa. But Santa is busy managing his Christmas empire, and so he needs to have his elves sign Christmas cards on his behalf. The problem is how can he let children know the card is still from him. Even a magical holiday icon cannot distribute every elf’s driver’s licence to every child. So what he needs is a simple way to indicate when he is passing his signing responsibility on to an elf.

Santa can achieve this through the use of delegations. As the delegator, Santa passes some of his responsibilities to another party (the delegatee), which in this case is an elf. In terms of package signing, a delegation is a statement that serves as proof that someone else has been authorized to sign.  When using cryptographic signatures, a delegation would include information about the public key of the delegatee and the scope of their trust, signed by the delegator. A user that trusted the delegator can then verify the delegation using a trusted public key, they can then use the public key indicated in the delegation to verify the package.

For example, a delegation may contain the following information, wrapped in a cryptographic signature by a trusted party. (adapted from the TUF specification):

```
"delegations": {
      "keys": {
        "f761033eb880143c52358d941d987ca5577675090e2215e856ba0099bc0ce4f6": {
          "keytype": "ed25519",
          "scheme": "ed25519",
          "keyval": {
            "public": "b6e40fb71a6041212a3d84331336ecaa1f48a0c523f80ccc762a034c727606fa"
          }
        }
      },
"roles": [
        {
          "keyids": [
            "f761033eb880143c52358d941d987ca5577675090e2215e856ba0099bc0ce4f6"
          ],
          "name": "project",
          "paths": [
            "project/file3.txt"
          ]
        }
      ]
```

This metadata indicates that the public key starting with “b6e4” is trusted to sign “project/file3.txt.”

In the above example, the delegator took advantage of namespaces to delegate authority only for “project/file3.txt,” and not for other files in the project. Namespaces separate a collection of items by name so that one can delegate authority for some, but not all items. For example, a Linux developer could delegate the “ls” utility to a developer without giving this individual permission to sign “chmod”.

Santa can take advantage of namespaces so that a rogue elf has limited ability to forge Santa’s signature. He can designate an elf for each language in which he writes Christmas cards, and that elf is only allowed to sign cards written in that language. This combination of delegations and namespacing allows for fine-grained control over who is trusted to sign and what they are trusted to sign.

Namespacing provides some protection in the event of a stolen cryptographic key, as the delegatee’s key is limited in scope. For example, a particularly careless elf might lose a signing  key going home from the North Pole bar. If the key is picked up by the Grinch, he would only be able to use it for children delegated to that elf. Further, once the sheepish elf reports the stolen key to Santa, Santa could re-issue a delegation that does not include the stolen key.

Delegations do not have to stop at one level. Say the elf responsible for Spanish-language Christmas cards finds herself in trouble this year as there are too many cards for her alone to sign. She decides to further delegate some of these cards through the North Pole bureaucracy. To do so, she signs a new delegation that includes four of her direct reports who will split up the card signing. She uses namespacing to give each of them control over one-fourth of the Spanish-language cards and signs this delegation with her own signature. She distributes her signed delegation alongside each of the cards, so that the addressed child can verify the chain of delegations.

Now, Santa can safely delegate Christmas card signing to his elves without sharing his signing key or giving away too much power. And, a child verifying their Christmas card can start with a trusted key for Santa, use this to verify a delegation to the responsible elf, check for further delegations, and then compare the signature on their Christmas card to that elf’s signature.

Previous posts in this series:
* [Part 1: Did the Grinch intercept your Christmas card?: The importance of signature verification](https://ssl.engineering.nyu.edu/blog/2021-07-26-signature-verification)
* [Part 2: Who is signing your Christmas card?: Establishing trust](https://ssl.engineering.nyu.edu/blog/2021-07-27-signature-trust)
* [Part 3: Ensuring the Easter Bunny isn’t signing your Christmas cards: Applying limitations of trust](https://ssl.engineering.nyu.edu/blog/2021-07-28-signature-namespaces)
