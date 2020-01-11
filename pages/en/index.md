---
layout:     default
lang:       en
ref:        index
title:      Home
showTitle:  false
permalink:  /en/
---

{% assign translatedPages=site.pages       | where:'lang', page.lang %}
{% assign aboutClassesPage=translatedPages | where: 'ref', 'class-information'            | first %}
{% assign challengePage=translatedPages | where: 'ref', 'esa-astro-pi-challenge-2019-2020' | first %}

{% capture alertMessage %}
  Take part in the European Astro Pi Challenge, see more details [here]({{challengePage.url | relative_url}})!
{% endcapture %}

{% include alert.html
   type="info"
   content=alertMessage
%}

{% include split-50.html
   sections="partial-class-information,partial-class-scratch,partial-class-web,partial-class-electronic"
%}
