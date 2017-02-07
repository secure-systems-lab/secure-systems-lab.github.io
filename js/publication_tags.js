---
---

{% include filter_tags_preamble.js %}

// Populate a master hash with the mapping of tag_name=>project_name
tags = {};

{% for pub in site.data.publications.publications %}
  mapTagToAnchor('{{ pub.project.name }}', '{{ pub.anchor }}');
{% endfor %}

{% include filter_tags.js pagename='publication' %}
