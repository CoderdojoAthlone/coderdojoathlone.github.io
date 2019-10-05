---
layout:     default
lang:       en
ref:        index
title:      Home
showTitle:  false
permalink:  /en/
---

{% assign translatedPages=site.pages       | where:'lang', page.lang %}
{% assign aboutClassesPage=translatedPages | where: 'ref', 'class-information' | first %}
{% assign registerPage=translatedPages     | where: 'ref', 'register'          | first %}

{% capture alertMessage %}
  We are back!
  Please [register]({{registerPage.url | relative_url}})
  to receive our updates and check our [calendar]({{aboutClassesPage.url | relative_url}})
{% endcapture %}

{% include alert.html
   type="success"
   content=alertMessage
%}

{% include split-50.html 
   sections="partial-class-information,partial-class-scratch,partial-class-web,partial-class-electronic" 
%}
