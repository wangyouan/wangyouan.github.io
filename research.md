---
layout: swiss-page
title: Research
title_zh: 研究
subtitle: Empirical Corporate Finance · CSR · Political Economy · AI in Finance
subtitle_zh: 实证公司金融 · 企业社会责任 · 政治经济学 · 金融AI
permalink: /research/
---

<h2 class="swiss-section__heading"><span data-lang-en="Published Work" data-lang-zh="已发表论文">Published Work</span></h2>

{% for paper in site.data.publications %}
<div class="swiss-card" id="pub-{{ forloop.index }}">
  <div class="swiss-card__title">{{ paper.title }}</div>
  <div class="swiss-card__meta">{{ paper.journal }}{% if paper.year != 'forthcoming' %} ({{ paper.year }}){% else %} (forthcoming){% endif %}</div>
  {% if paper.coauthors %}
  <div class="swiss-card__coauthors">with {% include coauthors-link.html coauthors=paper.coauthors %}</div>
  {% endif %}
  {% if paper.abstract %}
  <div class="swiss-card__abstract"><span data-lang-en="{{ paper.abstract }}" data-lang-zh="{{ paper.abstract_zh | default: paper.abstract }}">{{ paper.abstract }}</span></div>
  {% endif %}
  {% if paper.doi %}
  <a href="https://doi.org/{{ paper.doi }}" class="swiss-card__link" target="_blank" rel="noopener">DOI: {{ paper.doi }}</a>
  {% endif %}

  {% if paper.detail_method_en %}
  <button class="swiss-detail-toggle" data-target="detail-pub-{{ forloop.index }}">
    <span class="swiss-detail-toggle__icon">&#9660;</span>
    <span class="swiss-detail-toggle__text" data-lang-en="View Details" data-lang-zh="查看详情">View Details</span>
  </button>
  <div class="swiss-detail" id="detail-pub-{{ forloop.index }}">
    <!-- Research Design / 研究设计 -->
    <div class="swiss-detail__section">
      <div class="swiss-detail__heading"><span data-lang-en="Research Design" data-lang-zh="研究设计">Research Design</span></div>
      <div class="swiss-detail__text"><span data-lang-en="{{ paper.detail_method_en | strip_newlines | escape_once }}" data-lang-zh="{{ paper.detail_method_zh | strip_newlines | escape_once }}">{{ paper.detail_method_en | strip_newlines | escape_once }}</span></div>
    </div>

    <!-- Key Results / 主要发现 -->
    <div class="swiss-detail__section">
      <div class="swiss-detail__heading"><span data-lang-en="Key Results" data-lang-zh="主要发现">Key Results</span></div>
      <div class="swiss-detail__text"><span data-lang-en="{{ paper.detail_results_en | strip_newlines | escape_once }}" data-lang-zh="{{ paper.detail_results_zh | strip_newlines | escape_once }}">{{ paper.detail_results_en | strip_newlines | escape_once }}</span></div>
    </div>

    {% if paper.detail_figures %}
    <!-- Key Figures & Tables / 关键图表 -->
    <div class="swiss-detail__section">
      <div class="swiss-detail__heading"><span data-lang-en="Key Figures & Tables" data-lang-zh="关键图表">Key Figures & Tables</span></div>
      <div class="swiss-detail__figures">
        {% for fig in paper.detail_figures %}
        <div class="swiss-detail__figure">
          <a class="swiss-detail__image-link" href="{{ fig.src }}" target="_blank" rel="noopener" aria-label="Open table at full size">
            <img src="{{ fig.src }}" alt="{{ fig.alt_en | default: fig.caption_en }}" loading="lazy">
          </a>
          <div class="swiss-detail__caption"><span data-lang-en="{{ fig.caption_en }}" data-lang-zh="{{ fig.caption_zh }}">{{ fig.caption_en }}</span></div>
        </div>
        {% endfor %}
      </div>
    </div>
    {% endif %}

  </div>
  {% endif %}

</div>
{% endfor %}

<h2 class="swiss-section__heading" style="margin-top:3rem;"><span data-lang-en="Working Papers" data-lang-zh="工作论文">Working Papers</span></h2>

{% for wp in site.data.working_papers %}
<div class="swiss-card" id="wp-{{ forloop.index }}">
  <div class="swiss-card__title">{{ wp.title }}</div>
  {% if wp.coauthors %}
  <div class="swiss-card__coauthors">with {% include coauthors-link.html coauthors=wp.coauthors %}</div>
  {% endif %}
  {% if wp.abstract %}
  <div class="swiss-card__abstract"><span data-lang-en="{{ wp.abstract }}" data-lang-zh="{{ wp.abstract_zh | default: wp.abstract }}">{{ wp.abstract }}</span></div>
  {% endif %}

  {% if wp.detail_method_en %}
  <button class="swiss-detail-toggle" data-target="detail-wp-{{ forloop.index }}">
    <span class="swiss-detail-toggle__icon">&#9660;</span>
    <span class="swiss-detail-toggle__text" data-lang-en="View Details" data-lang-zh="查看详情">View Details</span>
  </button>
  <div class="swiss-detail" id="detail-wp-{{ forloop.index }}">
    <!-- Research Design / 研究设计 -->
    <div class="swiss-detail__section">
      <div class="swiss-detail__heading"><span data-lang-en="Research Design" data-lang-zh="研究设计">Research Design</span></div>
      <div class="swiss-detail__text"><span data-lang-en="{{ wp.detail_method_en | strip_newlines | escape_once }}" data-lang-zh="{{ wp.detail_method_zh | strip_newlines | escape_once }}">{{ wp.detail_method_en | strip_newlines | escape_once }}</span></div>
    </div>

    <!-- Key Results / 主要发现 -->
    <div class="swiss-detail__section">
      <div class="swiss-detail__heading"><span data-lang-en="Key Results" data-lang-zh="主要发现">Key Results</span></div>
      <div class="swiss-detail__text"><span data-lang-en="{{ wp.detail_results_en | strip_newlines | escape_once }}" data-lang-zh="{{ wp.detail_results_zh | strip_newlines | escape_once }}">{{ wp.detail_results_en | strip_newlines | escape_once }}</span></div>
    </div>

    {% if wp.detail_figures %}
    <!-- Key Figures & Tables / 关键图表 -->
    <div class="swiss-detail__section">
      <div class="swiss-detail__heading"><span data-lang-en="Key Figures & Tables" data-lang-zh="关键图表">Key Figures & Tables</span></div>
      <div class="swiss-detail__figures">
        {% for fig in wp.detail_figures %}
        <div class="swiss-detail__figure">
          <a class="swiss-detail__image-link" href="{{ fig.src }}" target="_blank" rel="noopener" aria-label="Open table at full size">
            <img src="{{ fig.src }}" alt="{{ fig.alt_en | default: fig.caption_en }}" loading="lazy">
          </a>
          <div class="swiss-detail__caption"><span data-lang-en="{{ fig.caption_en }}" data-lang-zh="{{ fig.caption_zh }}">{{ fig.caption_en }}</span></div>
        </div>
        {% endfor %}
      </div>
    </div>
    {% endif %}

  </div>
  {% endif %}

</div>
{% endfor %}
