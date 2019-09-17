---
lang:       en
ref:        class-list
caption:    assets/images/ait-eng-building.png
---

{% assign translatedPages=site.pages     | where:'lang', page.lang %}
{% assign scratchPage=translatedPages    | where: 'ref', 'class-scratch'    | first %}
{% assign webPage=translatedPages        | where: 'ref', 'class-web'        | first %}
{% assign electronicPage=translatedPages | where: 'ref', 'class-electronic' | first %}

The following classes are available:

[Scratch]({{scratchPage.url | relative_url}}) / 
[Web]({{webPage.url | relative_url}}) / 
[Electronics]({{electronicPage.url | relative_url}})

Our group of volunteers count many professional developers.
They will be happy to support you learning any other programming language: Java, Python, C#, Typescript and many more!
