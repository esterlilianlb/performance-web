window.addEventListener('load', function() {
	const titulo = document.querySelector('.header-menu-titulo');
	const menu = document.querySelector('.header-menu');

	if (titulo) {
		titulo.onclick = () => {
			if (menu.hasAttribute('data-ativo')) {
				menu.removeAttribute('data-ativo');
			} else {
				menu.setAttribute('data-ativo', '');
			}
		};
	}

});
