---
lang:       en
ref:        partial-class-information
caption:    assets/images/ait-eng-building.png
readMore:   class-information
---

{% assign translatedPages=site.pages       | where:'lang', page.lang %}
{% assign aboutClassesPage=translatedPages | where: 'ref', 'class-information' | first %}

CoderDojo Athlone is held in the AIT Engineering Building - every Saturday from 11am to 1pm following the school calendar 
(except if advertised on our [calendar]({{aboutClassesPage.url | relative_url}})).
