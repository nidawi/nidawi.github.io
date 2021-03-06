---
layout: post
title:  "My Second Post"
date:   2017-11-07 15:44:00 +0100
thumbnail: /assets/img/posts/cat3.jpg
poster: nidawi
comments: true
categories: personal
---
In this, my second-ever post, I am going to focus on practising the liquid theme "language", or whatever you want to call it. To do this, I found the [shopify help center](https://help.shopify.com/themes/liquid) very useful. Additionally, the blog's design is inspired by [this site](https://www.webdesignerdepot.com/).
{% assign testArray1 = "horse,cow,cat,elephant,dog" | split: "," %}

#### Personal exercise 1
Here, we will make a few if () checks to see what they return, if anything.
{% if page.title == "My Second Post" %}
* The title of this page [{{page.title}}] equals string "My Second Post" returned true.
{% endif %}
{% if testArray1[2] == "cat" %}
* In the array [horse,cow,cat,elephant,dog], "cat" is located at index 2 returned true.
{% endif %}

#### Random Tests
{% assign thisURL = page.url | split: "/" %}
* The file name of this page is "{{ thisURL | last }}".
* Due to being a post, page.permalink should be empty: {% if page.permalink == null %}  {% endif %}
* 5 / 2 = {{ 5 | divided_by: 2 }}
* 10 % 2 = {{ 10 | modulo: 2 }}
* 11 % 2 = {{ 11 | modulo: 2 }}
* "Title Test": {{ site.title }}{% if page.title %} - {{ page.title }}{% endif %}
* Raw: 
{% raw %}{{ 6 | times: 2 }}{% endraw %} equals {{ 6 | times: 2 }}.

#### Printing Array Data
Print array [horse,cow,cat,elephant,dog]:
* On one line using filter: json --> {{ testArray1 | json }}
* As a "standard" console.log() / Console.WriteLine() / System.out.println():
{% for s in testArray1 %}
  * {{ s }}
{% endfor %}
* Using tablerow to create a separated one-liner:
<table> 
{% tablerow row in testArray1 %} 
{{ row }} 
{% endtablerow %} 
</table>  
* Using the .list-format CSS class: 
<ul>
{% for s in testArray1 %}
<li class="list-format">
{{s}}
</li>
{% endfor %}
</ul>