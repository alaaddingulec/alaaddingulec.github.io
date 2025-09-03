---
layout: default
title: Blog
---

<section class="container section">
  <h1 class="section-title">Blog</h1>
  <div class="grid-3 cards">
    {% for post in site.posts %}
    <article class="card post-card">
      <img src="{{ post.cover | default: '/assets/images/blog-default.svg' | relative_url }}" alt="{{ post.title }}">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
      <small class="muted">{{ post.date | date: "%d %B %Y" }}</small>
    </article>
    {% endfor %}
  </div>
</section>
