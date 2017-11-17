---
layout: post
title:  "Robots vs. Humans"
date:   2017-11-10 13:00:00 +0100
poster: nidawi
comments: true
thumbnail: https://www.orbitmedia.com/wp-content/uploads/2013/02/humansvsrobots-large.jpg
categories: 1dv022
---
In this post, we discuss robots(.txt), humans(.txt), what they are and how they work as well as the impending Skynet invasion. Ok, maybe not that last part.
### What is robots.txt?
I have no idea how much I am actually supposed to write here, but to keep it short and on-point: [the robots.txt file]({{ "/robots.txt" | relative_url }}) (a simple textfile) denotes which parts of a server should be accessible to various "Web Robots", such as Spiders and Crawlers, amongst others that by different means work their way around the web and perform specific tasks. "Good Robots" could for instance index content for use in search engines (Google, Bing, etc.) while "Bad Robots" could search for e-mail addresses to spam or site vulnerabilities for hackers to exploit. These are just a few examples and Web Robots can naturally perform various other tasks as well.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The robots.txt file then allows the owners (or maintainers, perhaps?) of a site to specifically prevent or allow access to certain directories on the server (even though it's significantly more of a hassle to allow access to specific files than it is to disallow access). It should also be noted that there is no guarantee that all Web Robots will abide the rules dictated by robots.txt. In fact, it is quite unlikely that a Bad Robot would even bother to parse it.
#### How is it configured for this site?
I used the following setup for this site: 
{% highlight plaintext %}
User-agent: *
Disallow: /1dv022/
Disallow: /contact/
Disallow: /about/
Disallow: /assets/
{% endhighlight %}
While I somewhat doubt it would matter much in the end, I decided to disallow access for *all* (*) robots to /1dv022/ in order to keep posts relating to the course off-limits. I also kept /contact/ and /about/ off-limits to prevent access to contact details that I don't want showing up in random places. Lastly, I added /assets/ as they may or may not contain files with robot-sensitive data.

### What is humans.txt?
Keeping this part equally short, [the humans.txt file]({{ "/humans.txt" | relative_url }}) (also a simple textfile) is essentially a small and completely optional (I suppose robots.txt is optional as well, strictly speaking) file that lies comfortably next to robots.txt and provides information about the *humans* that in one way or another aided in that specific website's creation (generally, there's a tiny bit of information about the actual website as well). It should be noted that both the file and its contents are optional, and the authors may omit information as they see fit (the standard encourages the authors to include any and all contributors who *wish* to be included, but there's naturally no requirement). In a way, I suppose it could be seen as trivia for a curious visitor who also knows how the humans.txt works (how to find it). After all, "the internet is for humans [and not just robots!]"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The humans.txt has a kind of a standard that splits it into three sections: TEAM, THANKS, and SITE. The TEAM represents the actual authors of the website, such as the graphical illustrators, the coders, the designers, and so on (their roles are not always easily discernible either, looking at for instance [this](http://humanstxt.org/humans.txt) humans.txt). The THANKS represents exactly what it sounds like: giving thanks to contributing third-parties or other entities that in some way aided but weren't integral enough to be considered a member of the team. Lastly, SITE, covers some rather basic information about the site, such as when it was last updated, its default language(s), and so on - basically things that you would normally expect to find in the site's footer or at the bottom of a post. However, it does also encourage the authors to provide the IDEs used in the site's creation, which, again, can be interesting trivia for a keen visitor.
#### How is it configured for this site?
I used the following somewhat goofy setup for this site: 
{% highlight plaintext %}
/* TEAM */
	Jack-of-all-trades: Nidawi
	Twitter: ---
	Github: nidawi
	From: Växjö, Kronoberg, Sweden

/* THANKS */
	The Heavy Lifting: The Jekyll Team
	Twitter: @jekyllrb
	From: San Francisco, California, United States
		
/* SITE */
	Last update: 2017-11-15
	Language: English
	Doctype: html
	IDE: Visual Studio Code, Photoshop, Docker, Git
{% endhighlight %}
Mostly for fun, if I am to be honest, I decided to add various information to this site's humans.txt. Since I was the only one who *directly* worked on this particular site I feel rather lonely up there in the TEAM-section. I, however, followed the standard and provided my role (jokingly jack-of-all-trades), my non-existent Twitter (everyone uses Twitter these days?), my Github, as well as my geolocation.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coming up with no better ideas, I decided to give thanks to the Jekyll Team for the time they invested in creating this convenient tool that I used in order to create the site. I also provided their Twitter and Geolocation as the standard dictated. You could argue that I could add thanks to the developers of SASS, Docker, Chrome, and so on, but I figured that would be a waste of time. This was basically just to add at least something to that section, not create a comprehensive list. Either way, developers, you're all doing God's work.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lastly, I added some tidbits about the site itself, such as its last update, its language, doctype, as well as the IDEs used in its creation. It is quite likely that I will forget to keep the "last updated"-part up-to-date, ironically enough.