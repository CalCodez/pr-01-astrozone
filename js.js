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
		date: 'April 20 - May 20',
		planet: 'Venus',
		Color: 'Green',
		icon: 'ti-zodiac-taurus',
		backSplash: { src: './assets/astro_backsplash/taurus_backsplash.jpg' },
		description:
			'Taurus is the zodiac sign for people born between April 20 and May 20. People with this sign are said to be patient, reliable, and loyal, with a strong connection to nature. They are also known for being stable and determined',
	},

	gemini: {
		name: 'Gemini',
		traits: ['Spontaneous', 'Confusing', 'Funny', 'Sociable', 'Indecisive'],
		date: 'May 21 - June 21',
		planet: 'Mercury',
		Color: 'Yellow',
		icon: 'ti-zodiac-gemini',
		backSplash: { src: './assets/astro_backsplash/gemini_backsplash.jpg' },
		description:
			'Geminis are the third sign of the zodiac and are represented by twins. People born under this sign are said to be curious, communicative, and intellectual. They are also known for being adaptable, social, and enjoying change',
	},

	cancer: {
		name: 'Cancer',
		traits: ['Sarcastic', 'Loveable', 'Playful', 'Warm-hearted', 'Jealous'],
		date: 'June 22 - July 22',
		planet: 'The Moon',
		Color: 'Silver',
		icon: 'ti-zodiac-cancer',
		backSplash: { src: './assets/astro_backsplash/gemini_backsplash.jpg' },
		description:
			'Cancer is the fourth sign of the zodiac and is represented by the water element. Cancers are known for being intuitive, nurturing, and emotional. They are also known for being caring, loyal, and protective of their loved ones.',
	},

	leo: {
		name: 'Leo',
		traits: ['Fun', 'Warm', 'Loving', 'Egocentric', 'Cute'],
		date: 'July 23 - August 22',
		planet: 'The Sun',
		Color: 'Orange',
		icon: 'ti-zodiac-leo',
		backSplash: { src: './assets/astro_backsplash/leo_backsplash.webp' },
		description:
			'Leos are known for being confident, loyal, and dramatic. They are symbolized by the lion and are said to have a regal bearing.',
	},

	virgo: {
		name: 'Virgo',
		traits: ['Jealous', 'Indecisive', 'Intelligent', 'Loyal', 'Compromising'],
		date: 'August 23 - September 22',
		planet: 'Mercury',
		Color: 'Blue',
		icon: 'ti-zodiac-virgo',
		backSplash: { src: './assets/astro_backsplash/virgo_backsplash.jpg' },
		description:
			'Virgos are known for being perfectionists, analytical, and detail-oriented. They are also known for being helpful, practical, and organized.',
	},

	libra: {
		name: 'Libra',
		traits: ['Friendly', 'Ambivert', 'Childish', 'Spontaneous', 'Flighty'],
		date: 'September 23 - October 22',
		planet: 'Venus',
		Color: 'Pink',
		icon: 'ti-zodiac-libra',
		backSplash: { src: './assets/astro_backsplash/libra_backsplash.jpg' },
		description:
			'Libras are known for being diplomatic, charming, and social. They are also known for their desire for balance and harmony.',
	},

	scorpio: {
		name: 'Scorpio',
		traits: ['Attractive', 'Envious', 'Loyal', 'Hardworking', 'Creative'],
		date: 'October 23 - November 21',
		planet: 'Pluto',
		Color: 'Black',
		icon: 'ti-zodiac-scorpio',
		backSplash: { src: './assets/astro_backsplash/scorpio_backsplash.jpg' },
		description:
			'Scorpios are known for being passionate, loyal, and secretive. They are also known for being intuitive, ambitious, and strategic.',
	},

	sagittarius: {
		name: 'Sagittarius',
		traits: ['Loyal', 'Irritable', 'Nervous', 'Generous', 'Hilarious'],
		date: 'November 22 - December 21',
		planet: 'Jupiter',
		Color: 'Purple',
		icon: 'ti-zodiac-sagittarius',
		backSplash: { src: './assets/astro_backsplash/sagittarius_backsplash.jpg' },
		description:
			'Sagittarius is a zodiac sign for people born between November 22 and December 21. Sagittarius people are known for being adventurous, optimistic, and energetic. They are also known for being honest, blunt, and opinionated.',
	},

	capricorn: {
		name: 'Capricorn',
		traits: ['Loving', 'Funny', 'Kind', 'Suspicious', 'Spontaneous'],
		date: 'December 22 - January 19',
		planet: 'Saturn',
		Color: 'Brown',
		icon: 'ti-zodiac-capricorn',
		backSplash: { src: './assets/astro_backsplash/capricorn_backsplash.jpg' },
		description:
			'Sagittarius is a zodiac sign for people born between November 22 and December 21. Sagittarius people are known for being adventurous, optimistic, and energetic. They are also known for being honest, blunt, and opinionated.',
	},
};
