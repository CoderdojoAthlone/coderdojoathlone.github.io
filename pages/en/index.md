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
  We are looking for volunteers to be able to resume our sessions.
  [Learn more about becoming a mentor](https://coderdojo.com/en/volunteer).


  If you are interested, we would love to welcome you in the team.
  First, please complete the mandatory [Garda Vetting](https://coderdojo.com/en/gardavetting).

  Contact [coderdojoathlone@gmail.com](mailto:coderdojoathlone@gmail.com) for more details.
{% endcapture %}

{% include alert.html
   type="danger"
   content=covidMessage
%}

{% include split-50.html
   sections="partial-class-information,partial-class-scratch,partial-class-web,partial-class-electronic"
%}
