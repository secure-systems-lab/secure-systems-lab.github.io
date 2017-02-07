---
---

{% include filter_tags_preamble.js %}

// Populate a master hash with the mapping of tag_name=>project_name
tags = {};
{% for project in site.data.projects.projects %}
   {% for tag in project.tags %}
     mapTagToAnchor('{{ tag }}', '{{ project.anchor }}');
   {% endfor %}
{% endfor %}

{% include filter_tags.js pagename='project' %}

