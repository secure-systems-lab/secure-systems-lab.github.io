---
---

{% include filter_tags_preamble.js %}

// Populate a master hash with the mapping of tag_name=>project_name
tags = {};

{% for press in site.data.press.presses %}
  mapTagToAnchor('{{ press.project.name }}', '{{ press.anchor }}');
{% endfor %}

{% include filter_tags.js pagename='press-block' %}
