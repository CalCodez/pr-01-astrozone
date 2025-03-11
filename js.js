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

const { jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec } = birthStones;

const astroFacts = {
	aries: {
		name: 'Aries',
		sign: 'Fire',
		symbol: 'The Ram',
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
		sign: 'Earth',
		symbol: 'The Bull',
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
		sign: 'Air',
		symbol: 'The Twins',
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
		sign: 'Water',
		symbol: 'The Crab',
		traits: ['Sarcastic', 'Loveable', 'Playful', 'Warm-hearted', 'Jealous'],
		date: 'June 22 - July 22',
		planet: 'The Moon',
		Color: 'Silver',
		icon: 'ti-zodiac-cancer',
		backSplash: { src: './assets/astro_backsplash/cancer_backsplash.jpg' },
		description:
			'Cancer is the fourth sign of the zodiac and is represented by the water element. Cancers are known for being intuitive, nurturing, and emotional. They are also known for being caring, loyal, and protective of their loved ones.',
	},

	leo: {
		name: 'Leo',
		sign: 'Fire',
		symbol: 'The Lion',
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
		sign: 'Earth',
		symbol: 'The Maiden',
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
		sign: 'Air',
		symbol: 'The Scales',
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
		sign: 'Water',
		symbol: 'The Scorpion',
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
		sign: 'Fire',
		symbol: 'The Archer',
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
		sign: 'Earth',
		symbol: 'The Goat',
		traits: ['Loving', 'Funny', 'Kind', 'Suspicious', 'Spontaneous'],
		date: 'December 22 - January 19',
		planet: 'Saturn',
		Color: 'Brown',
		icon: 'ti-zodiac-capricorn',
		backSplash: { src: './assets/astro_backsplash/capricorn_backsplash.jpg' },
		description:
			'Capricorns are known for being ambitious, disciplined, and hardworking. They are also known for being practical, determined, and good with money.',
	},
	aquarius: {
		name: 'Aquarius',
		sign: 'Air',
		symbol: 'The Water-bearer',
		traits: ['Restless', 'Creative', 'Egotistical', 'Altruistic', 'Positive'],
		date: 'January 20 - February 18',
		planet: 'Uranus',
		Color: 'Blue',
		icon: 'ti-zodiac-aquarius',
		backSplash: { src: './assets/astro_backsplash/aquarius_backsplash.jpg' },
		description:
			'In astrology, Aquarians are known for being independent, creative, and forward-thinking. They are also known for being rule-breakers and activists who want to make the world a better place.',
	},
	pisces: {
		name: 'Pisces',
		sign: 'Water',
		symbol: 'The Fish',
		traits: ['Empathetic', 'Funny', 'Secretive', 'Trust Issues', 'Open-minded'],
		date: 'February 19 - March 20',
		planet: 'Neptune',
		Color: 'Light Green',
		icon: 'ti-zodiac-pisces',
		backSplash: { src: './assets/astro_backsplash/pisces_backsplash.jpg' },
		description:
			'Pisces are known for being compassionate, creative, and intuitive. They are often described as the dreamers of the zodiac.',
	},
};

const {
	aries,
	taurus,
	gemini,
	cancer,
	leo,
	virgo,
	libra,
	scorpio,
	sagittarius,
	capricorn,
	aquarius,
	pisces,
} = astroFacts;

const arrOfSigns = [
	aries,
	taurus,
	gemini,
	cancer,
	leo,
	virgo,
	libra,
	scorpio,
	sagittarius,
	capricorn,
	aquarius,
	pisces,
];

const reelControls = getByClass('reel-control');
const [prevBtn, nextBtn] = reelControls;
const cardReel = getById('cardReel');
const backSplashContainer = getById('backSplashContainer');

let newImg = createElement('img');
newImg.src = aries.backSplash.src;
backSplashContainer.append(newImg);

const splash = (obj) => {
	nextBtn.addEventListener(click, function () {
		const currentCard = cardReel.firstElementChild;
		cardReel.appendChild(currentCard);

		for (let img of obj) {
			if (cardReel.firstElementChild.id == img.name) {
				newImg.src = img.backSplash.src;
				backSplashContainer.append(newImg);
			}
		}
	});
	prevBtn.addEventListener(click, () => {
		const lastCard = cardReel.lastElementChild;
		cardReel.prepend(lastCard);
		for (let img of obj) {
			if (cardReel.firstElementChild.id == img.name) {
				newImg.src = img.backSplash.src;
				backSplashContainer.append(newImg);
			}
		}
	});
};

splash(arrOfSigns);
