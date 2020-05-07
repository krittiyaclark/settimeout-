setTimeout(() => {
	document.getElementById('slideshow').style.display = 'none';
	setTimeout(() => {
		greet();
		setTimeout(() => {
			var element = document.getElementById('greetings-container');
			element.parentNode.removeChild(element);
			document.getElementById('slideshow').style.display = 'inline';

			initSlideShow();
		}, 2000);
	}, 0000);
}, 0000);

const greet = () => {
	var name = prompt('Enter Your Name, Please.', 'Your Name');
	var today = new Date();
	var hrs = today.getHours();
	var greet;

	if (hrs <= 12) {
		greet = `${'Good Morning'} ${name} ${'!'}`;
	} else if (hrs <= 18) {
		greet = `${'Good Afternoon'} ${name} ${'!'}`;
	} else {
		greet = `${'Good Evening'} ${name} ${'!'}`;
	}
	document.getElementById(
		'greetings'
	).innerHTML = `${greet} <br> ${'Today is a special day!'}`;
};

var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
	var slides = document.querySelectorAll('.slide');

	var index = 0,
		time = 5000;
	slides[index].classList.add('active');

	setInterval(() => {
		slides[index].classList.remove('active');

		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');
	}, time);
}
