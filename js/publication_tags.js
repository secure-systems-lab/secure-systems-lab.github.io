---
---

{% include filter_tags_preamble.js %}

// Populate a master hash with the mapping of tag_name=>project_name
{% for pub in site.data.publications.publications %}
  mapTagToAnchor(    '{{ pub.project.anchor }}', '{{ pub.anchor }}');
  mapTagToPrettyName('{{ pub.project.anchor }}', '{{ pub.project.name }}');
{% endfor %}

{% include filter_tags.js pagename='publication' %}
