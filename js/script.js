// navigation
const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const allNavItems = document.querySelector('.nav__link');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');

	allNavItems.foreach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active');
		});
	});
};
navMobile.addEventListener('click', handleNav);
navBtn.addEventListener('click', handleNav);

// scroll spy

const menuItems = document.querySelectorAll('.nav__link');
const scrollSpySections = document.querySelectorAll('.section');

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = [];

		scrollSpySections.forEach((section) => {
			// console.log(window.scrollY);
			// wartość scrolla
			// console.log(section.offsetTop);
			// odległośc danej sekcji od górnej krawędzi przeglądarki
			// console.log(section.offsetHeight);
			// wysokość każdej z sekcji

			if (window.scrollY <= section.offsetTop + section.offsetHeight - 103) {
				sections.push(section);

				const activeSection = document.querySelector(
					`[href*="${sections[0].id}"]`
				);

				menuItems.forEach((item) => item.classList.remove('active'));

				activeSection.classList.add('active');
			}
		});
	}
};

window.addEventListener('scroll', handleScrollSpy);

// single product
const sliderMainImage = document.getElementById('product-main-image'); //product container image
const sliderImageList = document.getElementsByClassName('product-detail__image-list'); // image thumblian group selection
console.log(sliderImageList);

sliderImageList[0].onclick = function () {
	sliderMainImage.src = sliderImageList[0].src;
	console.log(sliderMainImage.src);
};

sliderImageList[1].onclick = function () {
	sliderMainImage.src = sliderImageList[1].src;
	console.log(sliderMainImage.src);
};

sliderImageList[2].onclick = function () {
	sliderMainImage.src = sliderImageList[2].src;
	console.log(sliderMainImage.src);
};

sliderImageList[3].onclick = function () {
	sliderMainImage.src = sliderImageList[3].src;
	console.log(sliderMainImage.src);
};

// items slider


// footer
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

let list = document.querySelectorAll('.sci li');
let bg = document.querySelector('.socialmedia');
list.forEach((elements) => {
	elements.addEventListener('mouseleave', function (event) {
		bg.style.backgroundColor = '#1a1a1b';
	});
});

VanillaTilt.init(document.querySelectorAll('.sci li a'), {
	max: 30,
	speed: 400,
	glare: true,
	'max-glare': 1,
});
