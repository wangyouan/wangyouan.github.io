---
layout: swiss-page
title: Curriculum Vitae
title_zh: 个人简历
permalink: /cv/
---

<p style="text-align:center;padding:2rem 0;color:var(--color-text-secondary);">
  <span data-lang-en="Full CV available upon request." data-lang-zh="完整简历备索。">Full CV available upon request.</span><br>
  <a href="mailto:wangyouan@xmu.edu.cn">wangyouan@xmu.edu.cn</a>
</p>

<h2 class="swiss-section__heading"><span data-lang-en="Employment" data-lang-zh="工作经历">Employment</span></h2>
{% for entry in site.data.employment %}
<div class="swiss-item">
  <div class="swiss-item__left"><span data-lang-en="{{ entry.role }}" data-lang-zh="{{ entry.role_zh | default: entry.role }}">{{ entry.role }}</span></div>
  <div class="swiss-item__right">{{ entry.when }}</div>
  <div class="swiss-item__sub"><span data-lang-en="{{ entry.org }}" data-lang-zh="{{ entry.org_zh | default: entry.org }}">{{ entry.org }}</span></div>
</div>
{% endfor %}

<h2 class="swiss-section__heading" style="margin-top:3rem;"><span data-lang-en="Education" data-lang-zh="教育背景">Education</span></h2>
{% for edu in site.data.education %}
<div class="swiss-item">
  <div class="swiss-item__left"><span data-lang-en="{{ edu.degree }}" data-lang-zh="{{ edu.degree_zh | default: edu.degree }}">{{ edu.degree }}</span></div>
  <div class="swiss-item__right">{{ edu.when }}</div>
  <div class="swiss-item__sub"><span data-lang-en="{{ edu.school }}" data-lang-zh="{{ edu.school_zh | default: edu.school }}">{{ edu.school }}</span></div>
</div>
{% endfor %}

<h2 class="swiss-section__heading" style="margin-top:3rem;"><span data-lang-en="Research" data-lang-zh="研究">Research</span></h2>

<h3 style="margin:1.5rem 0 0.5rem;font-size:1.125rem;"><span data-lang-en="Published Papers" data-lang-zh="已发表论文">Published Papers</span></h3>
{% for paper in site.data.publications %}
<div class="swiss-card">
  <div class="swiss-card__title">{{ paper.title }}</div>
  <div class="swiss-card__meta">{{ paper.journal }}{% if paper.year != 'forthcoming' %} ({{ paper.year }}){% else %} (forthcoming){% endif %}</div>
  {% if paper.coauthors %}<div class="swiss-card__coauthors">with {% include coauthors-link.html coauthors=paper.coauthors %}</div>{% endif %}
</div>
{% endfor %}

<h3 style="margin:1.5rem 0 0.5rem;font-size:1.125rem;"><span data-lang-en="Working Papers" data-lang-zh="工作论文">Working Papers</span></h3>
{% for wp in site.data.working_papers %}
<div class="swiss-card">
  <div class="swiss-card__title">{{ wp.title }}</div>
  {% if wp.coauthors %}<div class="swiss-card__coauthors">with {% include coauthors-link.html coauthors=wp.coauthors %}</div>{% endif %}
</div>
{% endfor %}

<h2 class="swiss-section__heading" style="margin-top:3rem;"><span data-lang-en="Research Grants" data-lang-zh="科研项目">Research Grants</span></h2>
{% for grant in site.data.grants %}
<div class="swiss-grant">
  <div class="swiss-grant__title"><span data-lang-en="{{ grant.title_en | default: grant.title }}" data-lang-zh="{{ grant.title }}">{{ grant.title }}</span></div>
  <div class="swiss-grant__meta"><span data-lang-en="{{ grant.source_en | default: grant.source }}" data-lang-zh="{{ grant.source }}">{{ grant.source }}</span> · {{ grant.number }} · {{ grant.amount }} · {{ grant.period }}</div>
</div>
{% endfor %}

<h2 class="swiss-section__heading" style="margin-top:3rem;"><span data-lang-en="Presentations" data-lang-zh="学术报告">Presentations</span></h2>

{% assign presentations = site.data.presentations %}
{% if presentations.size > 0 %}
{% for pres in presentations %}
<div class="swiss-item">
  <div class="swiss-item__left"><span data-lang-en="{{ pres.title }}" data-lang-zh="{{ pres.title_zh | default: pres.title }}">{{ pres.title }}</span></div>
  <div class="swiss-item__right">{{ pres.date }}</div>
  <div class="swiss-item__sub"><span data-lang-en="{{ pres.venue }}{% if pres.type %} · {{ pres.type }}{% endif %}" data-lang-zh="{{ pres.venue_zh | default: pres.venue }}{% if pres.type %} · {{ pres.type_zh | default: pres.type }}{% endif %}">{{ pres.venue }}{% if pres.type %} · {{ pres.type }}{% endif %}</span></div>
</div>
{% endfor %}
{% else %}
<p style="color:var(--color-text-muted);font-size:0.9rem;" data-lang-en="(To be updated)" data-lang-zh="（待更新）">(To be updated)</p>
{% endif %}

<h2 class="swiss-section__heading" style="margin-top:3rem;"><span data-lang-en="Service" data-lang-zh="学术服务">Service</span></h2>

<h3 class="swiss-section__subheading"><span data-lang-en="Ad Hoc Referee" data-lang-zh="匿名审稿">Ad Hoc Referee</span></h3>
<p style="margin:0.3rem 0 1.5rem;line-height:1.6;font-size:0.95rem;color:var(--color-text);">
  {% for rv in site.data.peer_review %}{{ rv.journal }}{% unless forloop.last %}; {% endunless %}{% endfor %}
</p>

{% assign services = site.data.service %}
{% if services.size > 0 %}
{% for srv in services %}
<div class="swiss-item">
  <div class="swiss-item__left"><span data-lang-en="{{ srv.role }}" data-lang-zh="{{ srv.role_zh | default: srv.role }}">{{ srv.role }}</span></div>
  <div class="swiss-item__right">{{ srv.date }}</div>
  <div class="swiss-item__sub"><span data-lang-en="{{ srv.venue }}" data-lang-zh="{{ srv.venue_zh | default: srv.venue }}">{{ srv.venue }}</span></div>
</div>
{% endfor %}
{% endif %}

<h2 class="swiss-section__heading" style="margin-top:3rem;"><span data-lang-en="Teaching" data-lang-zh="教学">Teaching</span></h2>
{% for course in site.data.teaching %}
<div class="swiss-course" style="background:var(--color-white);border-color:var(--color-border);">
  <div class="swiss-course__title"><span data-lang-en="{{ course.course }}" data-lang-zh="{{ course.course_zh | default: course.course }}">{{ course.course }}</span></div>
  <div class="swiss-course__meta"><span data-lang-en="{{ course.school }}, {{ course.university }}" data-lang-zh="{{ course.school_zh | default: course.school }}，{{ course.university_zh | default: course.university }}">{{ course.school }}, {{ course.university }}</span> · <span data-lang-en="{{ course.term }}" data-lang-zh="{{ course.term_zh | default: course.term }}">{{ course.term }}</span></div>
</div>
{% endfor %}
