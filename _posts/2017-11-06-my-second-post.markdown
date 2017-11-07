---
layout: post
title:  "My Second Post"
date:   2017-11-06 15:44:00 +0100
thumbnail: https://jcscans.files.wordpress.com/2009/08/clever-cat-using-pc.jpg
categories: personal
---
In this, my second-ever post, I am going to focus on practising the liquid theme "language", or whatever you want to call it. To do this, I found the [shopify help center](https://help.shopify.com/themes/liquid) very useful.
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
* Raw: 
{% raw %}{{ 6 | times: 2 }}{% endraw %} equals {{ 6 | times: 2 }}.

#### Printing Array Data
Print array [horse,cow,cat,elephant,dog]:
* On one line using filter: json --> {{ testArray1 | json }}
* As a "standard" console.log() / Console.WriteLine() / System.out.println():
{% for s in testArray1 %}
  * {{ s }}
{% endfor %}




<!--
{% assign imgArray = "hej1,hej2,hej3,hej4,hej5,hej6,hej6,hej8,hej9,hej10" | split: "," %}
{% assign rowCount = imgArray.size | divided_by: 5 %}
{% for row in (0..rowCount) %}
    {% assign startIndex = 5 | times: row %}
    {% for img in imgArray limit:5 offset:startIndex  %}
        {{ img }}
    {% endfor %}
{% endfor %}
-->

