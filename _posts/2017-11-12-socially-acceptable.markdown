---
layout: post
title:  "Look at how Socially Acceptable I am!"
date:   2017-11-12 13:00:00 +0100
thumbnail: http://blog.silentsorority.com/wp-content/uploads/2014/08/Socially-acceptable-300x168.jpg
poster: nidawi
comments: true
categories: 1dv022
---
In this post, we'll delve into the social aspects of this website and investigate how this site can leave an impression on the outside world, should anyone ever care to post a link here.
### Blog post comments
This site uses Disqus in order to allow visitors to comment on blog posts. Disqus, in itself, is deceptively simple as their guide proudly demonstrates. Put this universal code somewhere on your site, setup your own Disqus code and voila. Done. In theory, anyway.
#### How were they implemented?
To my surprise, Disqus comments were actually already included in the base Jekyll site creation. The `_layouts` .html file used for blog posts featured the following Liquid code:
{% highlight plaintext %}
{% raw %}
{% if site.disqus.shortname %}
  {% include disqus_comments.html %}
{% endif %}
{% endraw %}
{% endhighlight %}
This, coupled with the `discus_comments.html`, essentially did all of the heavy lifting for us. Not only did it provide us with the "universal code" but it also took care of including the comment section on each blog post where all that we had to do was to add `comments: true` to the YAML Front Matter of the blog posts of which we wanted to enable comments (as `discus_comments.html` has a Liquid check to verify that `page.comments` is true and not false or missing).
{% highlight plaintext %}
---
layout: post
title:  "Look at how Socially Acceptable I am!"
comments: true
// whatever else
---
{% endhighlight %}
By doing this, we can then verify by using the Liquid code {% raw %} {{ page.comments }} {% endraw %} that the boolean value for whether comments have been enabled for this page is: {{ page.comments | default: "missing" }}.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Okay then, let's focus on what we *actually had* to do, instead of what we didn't have to do. We had to enable the comments as previously mentioned as well as setting up our own Disqus by following their incredibly easy-to-use [setup guide](https://disqus.com/features/engage/) where we got to choose a name for our "forum", so to speak. As can be expected, the name for this particular site became "catspeak". No, I have no shame. My cat died recently and I am doing all this cat stuff to compensate for the void her death left in my heart. In addition to this, as hinted by the Liquid include code mentioned earlier, we had to add our "shortname" (the forum name) to our `_config.yml` file like this:
{% highlight plaintext %}
# stuff
disqus:
  shortname: catspeak
# more stuff
{% endhighlight %}
And that's it! Supposedly, anyway. Disqus does require a proper domain which we don't have during development, but assuming that it all works as it should, this paragraph should be deleted later on.
### Open Graph: what is it?
Alright then, onwards to Open Graph. Now, what is it? Simply put: it offers a set of (meta) data, or information, about an item on the web - in this case a website or a page on a website - which can then be used to identify that specific item on social media websites, such as Facebook or Twitter, and potentially other websites as well. In effect, should a link to that *item*, or in our case, website or page, be posted the Open Graph Protocol would supply other users who come across the link with a hint of what the website or page being linked to is about, such as its address and/or name, the title of the specific page, a short description, and a hopefully relevant image (supposedly, the info provided can vary). To the right is an image of how a link to this blog post would be displayed on Facebook:


![Image of how this page would be displayed on Facebook]({{ "/assets/img/posts/ogpexample.png" | relative_url }})




#### Open Graph on this website
This site employs a, in my honest and very fair opinion, a rather dynamic use of Open Graph - similarly to how [IMDb](http://www.imdb.com) uses it. By that I mean that I put the properties specified on [the official Open Graph site](http://ogp.me/) in the `head.html` file, thus incorporating the Open Graph protocol on every single page on the site. Perhaps this was how we were supposed to do and in that case I look like an absolute idiot right now. Moving on.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In mimicking IMDb, I decided to use Liquid to dynamically generate appropriate information for each page, so that the Contact-page would correctly show "Contact" and that each blog post would correctly show the title of that specific post. Below is an example of how Open Graph is set up on this site:
{% highlight plaintext %}
{% raw %}
<meta property="og:title" content="{{ page.title | default: site.title }}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="{{ site.title }}" />
{% endraw %}
{% endhighlight %}
As can be seen above, the title attempts to fetch the title of the post but in the case of the current page not having a title then the site's title will be used instead. Then the item's type is defined as being a website as this is indeed a website, and lastly the site name is assigned to the title of the site. This is just a short example featuring only three out of six nodes.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Furthermore, I also made sure that each blog post would display its thumbnail instead of the site-specific grinning cat that each other page would display. Working with the url attribute proved to be a bit of a hassle because, as was also expected, Liquid does not provide access to the domain that the site is on and Javascript seemed unable to edit meta tags due to executing *after* the page had already loaded its meta tags (I am convinced there would be some way to accomplish this through javascript but unfortunately there wasn't enough time for me to investigate this further). I ended up working around this issue by using the Liquid `site.url` tag that I will simply have to update once the site has been published on Github pages.


