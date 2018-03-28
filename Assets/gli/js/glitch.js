{
	setTimeout(() => document.body.classList.add('render'), 60);
	imagesLoaded('.glitch__img', { background: true }, () => {
		document.body.classList.add('imgloaded');
	});
}
