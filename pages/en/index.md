---
layout:     default
lang:       en
ref:        index
title:      Home
showTitle:  false
permalink:  /en/
---

{% assign translatedPages=site.pages       | where:'lang', page.lang %}

{% capture covidMessage %}
  We are delighted to announce our sessions finally resumed!
  Due to the ongoing COVID restrictions, we operate with booking **only**.
  Invitations are sent weekly to all registered members, follow the "Register" link above to register.
{% endcapture %}

{% include alert.html
   type="success"
   content=covidMessage
%}

{% include split-50.html
   sections="partial-class-information,partial-class-scratch,partial-class-web,partial-class-electronic"
%}
