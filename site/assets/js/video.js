// carrega videos assincronamente
setTimeout(function(){

	const containers = document.querySelectorAll('.elasticMedia-container[data-src]');
	for (var i = 0; i < containers.length; i++) {
		const src = containers[i].getAttribute('data-src');
		containers[i].innerHTML = '<iframe class="elasticMedia" src="' + src + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
	}

}, 500);