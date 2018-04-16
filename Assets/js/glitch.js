setTimeout(() => document.body.classList.add('render'), 60);
imagesLoaded('.glitch__img', { background: true }, () => {
	document.body.classList.remove('loading');
	document.body.classList.add('imgloaded');
});

const glitchButterfly = document.querySelector('.glitch-butterfly');
const glitchSatellite = document.querySelector('.glitch-satellite');

setTimeout(() => {
	glitchButterfly.classList.add('glitch--hide');
	glitchSatellite.classList.remove('glitch--hide');
}, 2800)

setTimeout(() => {
	glitchSatellite.classList.add('glitch--hide');
	glitchButterfly.classList.remove('glitch--hide');
}, 2900)