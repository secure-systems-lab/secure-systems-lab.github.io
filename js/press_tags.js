---
---

{% include filter_tags_preamble.js %}

// Populate a master hash with the mapping of tag_name=>project_name
{% for press in site.data.data.press.presses %}
  mapTagToAnchor(    '{{ press.project.anchor }}', '{{ press.anchor }}');
  mapTagToPrettyName('{{ press.project.anchor }}', '{{ press.project.name }}');
{% endfor %}

{% include filter_tags.js pagename='press-block' %}
