---
---
tags = {};

// Populate a master hash with the mapping of tag_name=>project_name
{% for project in site.data.projects.projects %}
   {% for tag in project.tags %}
     (tags['{{ tag }}'] = (tags['{{ tag }}'] || [])).push('{{ project.anchor }}');
   {% endfor %}
{% endfor %}

// Add buttons for every tag type
for (var tag in tags) {
    var list = document.getElementById('tags-toc');
    var entry = document.createElement('li');
    var link = document.createElement('a');
    link.setAttribute("name", tag)
    link.appendChild(document.createTextNode(tag));
    entry.appendChild(link);
    list.appendChild(entry);

    // When the link is clicked, filter to show only matching projects
    link.addEventListener("click", filterTag);
}

function filterTag(tag) {
    var projectElements = document.getElementsByClassName('project');

    var taggedProjects = tags[tag.toElement.name];

    for (var i = 0; i < projectElements.length; i++) {
	var projectElem = projectElements[i];
        var projectAnchor = projectElem.getElementsByTagName('a')[0].name;

	if (taggedProjects.includes(projectAnchor)) {
	    projectElem.style.display = 'block';
	    projectElem.style.display = 'inline';
	    projectElem.style.display = 'inline-block';
	} else {
	    projectElem.style.display = 'none'; 
	}
    }
}
