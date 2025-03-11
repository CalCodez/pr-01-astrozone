const getByClass = (className) => document.getElementsByClassName(className);
const getById = (id) => document.getElementById(id);
const createElement = (element) => document.createElement(element);
const appendChild = (parent, child) => parent.appendChild(child);
const removeChild = (parent, child) => parent.removeChild(child);
const addClass = (element, className = '') => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const toggleClass = (element, className) => element.classList.toggle(className);
const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);
const textContent = (element, text) => (element.textContent = text);

const click = 'click';
const keyup = 'keyup';
const flexActive = 'flex-active';
const flexInactive = 'flex-inactive';

const cardReel = getById('cardReel');

document.addEventListener('DOMContentLoaded', function () {
	const cardReel = document.getElementById('cardReel');
	const controls = document.querySelectorAll('.reel-control');
	controls[0].addEventListener('click', function () {
		// Move the last card to the front (Previous)
		const lastCard = cardReel.lastElementChild;
		cardReel.prepend(lastCard);
	});

	controls[1].addEventListener('click', function () {
		// Move the next card to the front and current to the back (Next)
		const firstCard = cardReel.firstElementChild;
		cardReel.append(firstCard);
	});
});

console.log(cardReel.firstElementChild.id);
const birthStones = {
	jan: 'Garnet',
	feb: 'Amethyst',
	mar: 'Aquamarine',
	apr: 'Diamond',
	may: 'Emerald',
	jun: 'Pearl',
	jul: 'Ruby',
	aug: 'Peridot',
	sep: 'Sapphire',
	oct: 'Opal',
	nov: 'Topaz',
	dec: 'Turquoise',
};

const astroFacts = {
	aries: {
		name: 'Aries',
		traits: ['Loyal', 'Smart', 'Snappy', 'Kind', 'Moody'],
		date: 'March 21 - April 19',
		planet: 'Mars',
		Color: 'Red',
		icon: 'ti-zodiac-aries',
		backSplash: { src: './assets/astro_backsplash/aries_backsplash.jpg' },
		description:
			'Aries are said to be ambitious, passionate, and energetic people who are natural leaders. They are the first sign of the zodiac and are represented by the symbol',
	},

	taurus: {
		name: 'Taurus',
		traits: ['Caring', 'Ambiverted', 'Ambitious', 'Hardworking', 'Self-Centered'],
		date: 'March 21 - April 19',
		planet: 'Venus',
		Color: 'Green',
		icon: 'ti-zodiac-taurus',
		backSplash: { src: './assets/astro_backsplash/taurus_backsplash.jpg' },
		description:
			'Taurus is the zodiac sign for people born between April 20 and May 20. People with this sign are said to be patient, reliable, and loyal, with a strong connection to nature. They are also known for being stable and determined',
	},
};
