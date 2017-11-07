---
layout: post
title:  "My First Post!"
date:   2017-11-06 12:33:00 +0100
categories: personal
---
### This is a **header**.
So, this is my _very_ first post. I would like to emphasize the part that it is _indeed_ my **very first** post.
If I ever get lost, I can find my way home by visiting [my Github](https://github.com/1dv022/ja222ts-examination-1).
#### This is also a header, with a complimentary cat.
![A cute cat](https://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg)
And this, my friends, is a cute cat. Did I ever mention I like cats? I suppose you know that now. I also have absolutely _no clue_ who owns this picture or this cat. Let's hope they don't find me.
#### Something on which to ponder...
> "A fool thinks himself to be wise, but a wise man knows himself to be a fool."  
> -William Shakespeare

#### Things that do go well on a pizza:
* Pineapple
* _More_ pineapple
* **Even more** pineapple
  * With cream cheese?
* Did I mention pineapple?

#### This is fun for everyone!
_Highly recommended to include this on your next website.  
Damn Google Chrome and its alert-suppressing powers._
{% highlight javascript %}
function init() {
  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    alert('aren\'t we having fun today?!')
  }
}
window.onload = init
{% endhighlight %}

#### Here's three posts!
_Yes, I am playing around with... uh, what did they call it? Liquid template or something like that._
{% for p in site.posts limit: 3 %}
> [{{ p.title }}]({{ p.url | relative_url }})
{% endfor %}

#### A final remark
> This ought to finish this one up,  
> I sure am sad I cannot fit it in a cup.  
> For when it is all done and well,  
> it truly doesn't look particularly swell.

I never claimed to be a poet, mind you.

