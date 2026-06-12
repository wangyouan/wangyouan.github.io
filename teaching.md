---
layout: swiss-page
title: Teaching
title_zh: 教学
subtitle: Corporate Finance · Asset Pricing · AI in Finance
subtitle_zh: 公司金融 · 资产定价 · 金融AI
permalink: /teaching/
---

{% for course in site.data.teaching %}
<div class="swiss-course">
  <div class="swiss-course__title"><span data-lang-en="{{ course.course }}" data-lang-zh="{{ course.course_zh | default: course.course }}">{{ course.course }}</span></div>
  <div class="swiss-course__meta"><span data-lang-en="{{ course.school }}, {{ course.university }}" data-lang-zh="{{ course.school_zh | default: course.school }}，{{ course.university_zh | default: course.university }}">{{ course.school }}, {{ course.university }}</span> · <span data-lang-en="{{ course.term }}" data-lang-zh="{{ course.term_zh | default: course.term }}">{{ course.term }}</span></div>
  {% if course.description %}
  <div class="swiss-course__desc" style="margin-top:0.5rem;"><span data-lang-en="{{ course.description }}" data-lang-zh="{{ course.description_zh | default: course.description }}">{{ course.description }}</span></div>
  {% endif %}
</div>
{% endfor %}
