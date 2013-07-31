/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'font-awesome\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-reorder' : '&#xf0c9;',
			'icon-group' : '&#xf0c0;',
			'icon-google-plus' : '&#xf0d5;',
			'icon-google-plus-sign' : '&#xf0d4;',
			'icon-cloud-download' : '&#xf0ed;',
			'icon-youtube-play' : '&#xf16a;',
			'icon-gittip' : '&#xf184;',
			'icon-globe' : '&#xf0ac;',
			'icon-comments' : '&#xf086;',
			'icon-user' : '&#xf007;',
			'icon-facetime-video' : '&#xf03d;',
			'icon-download-alt' : '&#xf019;',
			'icon-home' : '&#xf015;',
			'icon-picture' : '&#xf03e;',
			'icon-linkedin-sign' : '&#xf08c;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};