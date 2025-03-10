const astroCards = document.querySelectorAll('.astro-card');
const buttons = document.querySelectorAll('.reel-control');

let current = Math.floor(Math.random() * astroCards.length);
let next = current < astroCards.length - 1 ? current + 1 : 0;
let prev = current > 0 ? current - 1 : astroCards.length - 1;

const update = () => {
	astroCards.forEach((card) => {
		card.classList.remove('active', 'prev', 'next');
	});
	astroCards[current].classList.add('active');
	astroCards[prev].classList.add('prev');
	astroCards[next].classList.add('next');
};

const goToNum = (number) => {
	current = number;
	next = current < astroCards.length - 1 ? current + 1 : 0;
	prev = current > 0 ? current - 1 : astroCards.length - 1;
	update();
};
const goToNext = () => (current < astroCards.length - 1 ? goToNum(current + 1) : goToNum(0));
const goToPrev = () => (current > 0 ? goToNum(current - 1) : goToNum(astroCards.length - 1));

for (let i = 0; i < buttons.length; i += 1) {
	buttons[i].addEventListener('click', () => (i === 0 ? goToPrev() : goToNext()));
}

update();

console.log(astroCards);
