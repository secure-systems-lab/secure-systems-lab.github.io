tagPrettyName = {};
function mapTagToPrettyName(tag, prettyName) {
    if (!tagPrettyName[tag] && tag != "") {
        tagPrettyName[tag] = prettyName;
    }
}

tags = {};
function mapTagToAnchor(tag, anchor) {
    if (tag != "") {
        (tags[tag] = (tags[tag] || [])).push(anchor);
    }
}

// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
    if (!url) {
	url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// http://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript
function eventFire(el, etype){
    if (el.fireEvent) {
	el.fireEvent('on' + etype);
    } else {
	var evObj = document.createEvent('Events');
	evObj.initEvent(etype, true, false);
	el.dispatchEvent(evObj);
    }
}
