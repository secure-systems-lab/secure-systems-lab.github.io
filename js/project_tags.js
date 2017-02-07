---
---
// Populate a master hash with the mapping of tag_name=>project_name
tags = {};
{% for project in site.data.projects.projects %}
   {% for tag in project.tags %}
     (tags['{{ tag }}'] = (tags['{{ tag }}'] || [])).push('{{ project.anchor }}');
   {% endfor %}
{% endfor %}

{% include filter_tags.js pagename='project' %}

