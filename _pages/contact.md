---
layout: page
title: Contact
permalink: /contact/
---
{{site.email}}

<div class="footer-col footer-col-2">
<ul class="social-media-list">
{% if site.github_username %}
<li>
{% include icon-github.html username=site.github_username %}
</li>
{% endif %}
    
{% if site.twitter_username %}
<li>
{% include icon-twitter.html username=site.twitter_username %}
</li>
{% endif %}
</ul>
</div>