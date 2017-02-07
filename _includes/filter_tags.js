tagLinks = [];
selectedTag = undefined;

function actionFlash() {
    var af = document.getElementById('action-flash');
    af.classList.remove("fade-out");
    af.classList.add("fade-in");
    window.setTimeout(function () {
      af.classList.remove("fade-in");
      af.classList.add("fade-out");
    }, 250)

}

// Add buttons for every tag type
for (var tag in tags) {
    var list = document.getElementById('tags-toc');
    var entry = document.createElement('li');
    var link = document.createElement('a');
    var X = document.createElement('a');
    link.setAttribute("name", tag)
    link.appendChild(document.createTextNode(tag));
    entry.appendChild(link);
    list.appendChild(entry);
    X.appendChild(document.createTextNode(' \u00D7'));
    X.classList.add("removeTag");
    X.classList.add("hidden");
    entry.appendChild(X);

    // When the link is clicked, filter to show only matching projects
    entry.addEventListener("click", filterTag);

    tagLinks.push(link);
}

function filterTag(tag) {
    var projectElements = document.getElementsByClassName('{{ include.pagename }}');

    var tagName = tag && tag.target.name;

    // since this tag was already selected, unselect it
    if (selectedTag == tagName) {
	tagName = false;
    }
    selectedTag = tagName;

    var taggedProjects = tags[tagName] || [];

    for (var i = 0; i < projectElements.length; i++) {
	var projectElem = projectElements[i];
        var projectAnchor = projectElem.getElementsByTagName('a')[0].name;

	// Show the projects associated with the selected tag or
	// If no tag was given then show all projects
	if (taggedProjects.includes(projectAnchor) || !tagName) {
	    projectElem.style.display = 'block';
	    projectElem.style.display = 'inline';
	    projectElem.style.display = 'inline-block';
	} else {
	    projectElem.style.display = 'none'; 
	}
    }

    // Grey out all links except for the selected one
    for (var i = 0; i < tagLinks.length; i++) {
	var link = tagLinks[i];
	var removeTag = link.parentNode.querySelector(".removeTag");
	if (link.getAttribute("name") == tagName) {
	    link.classList = ["selected"];
	    removeTag.classList.remove("hidden");
	} else {
	    link.classList = ["unselected"];
	    removeTag.classList.add("hidden");
	}
    }

    actionFlash();
}

// On page load see if there's a ?filter_tag=TAG query parameter
// If so, send a click-event to simulate someone click the tag selector
var queryFilterTag = getParameterByName('filter_tag');
if (queryFilterTag) {
    var elem = document.querySelectorAll('[name="'+queryFilterTag+'"]')[0];
    eventFire(elem, 'click');
}
