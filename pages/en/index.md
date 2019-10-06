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
{% assign booChallengePage=translatedPages | where: 'ref', 'coderdojo-boo-challenge-2019' | first %}

{% capture alertMessage %}
  Halloween Boo Coderdojo Challenge 2019 is on, see mode details [here]({{booChallengePage.url | relative_url}})!
{% endcapture %}

{% include alert.html
   type="info"
   content=alertMessage
%}

{% include split-50.html 
   sections="partial-class-information,partial-class-scratch,partial-class-web,partial-class-electronic" 
%}
