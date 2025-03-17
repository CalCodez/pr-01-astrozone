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

const stones = {
	jan: { month: 'January', stone: 'Garnet', src: './assets/birthstones/garnet.jpg' },
	feb: { month: 'February', stone: 'Amethyst', src: './assets/birthstones/amethyst.jpg' },
	mar: { month: 'March', stone: 'Aquamarine', src: './assets/birthstones/aquamarine.jpg' },
	apr: { month: 'April', stone: 'Diamond', src: './assets/birthstones/diamond.jpg' },
	may: { month: 'May', stone: 'Emerald', src: './assets/birthstones/emerald.jpg' },
	jun: { month: 'June', stone: 'Pearl', src: './assets/birthstones/pearl.jpg' },
	jul: { month: 'July', stone: 'Ruby', src: './assets/birthstones/ruby.jpg' },
	aug: { month: 'August', stone: 'Peridot', src: './assets/birthstones/peridot.jpg' },
	sep: { month: 'September', stone: 'Sapphire', src: './assets/birthstones/sapphire.jpg' },
	oct: { month: 'October', stone: 'Opal', src: './assets/birthstones/opal.jpg' },
	nov: { month: 'November', stone: 'Topaz', src: './assets/birthstones/topaz.jpg' },
	dec: { month: 'December', stone: 'Turquoise', src: './assets/birthstones/turquoise.jpg' },
};

const { jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec } = stones;

const astroFacts = {
	aries: {
		name: 'Aries',
		sign: 'Fire',
		symbol: 'The Ram',
		traits: ['Loyal', 'Smart', 'Snappy', 'Kind', 'Moody'],
		date: 'March 21 - April 19',
		birthstone: { month1: mar, month2: apr },
		planet: { name: 'Mars', src: './assets/planets/mars.jpg' },
		Color: { name: 'Red', hex: '#ff0000' },
		icon: { zodiac: 'ti-zodiac-aries', sign: 'ti-flame' },
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
		birthstone: { month1: apr, month2: may },
		planet: { name: 'Venus', src: './assets/planets/venus.jpg' },
		Color: { name: 'Green', hex: '#008000' },
		icon: { zodiac: 'ti-zodiac-taurus', sign: 'ti-world' },
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
		birthstone: { month1: may, month2: jun },
		planet: { name: 'Mercury', src: './assets/planets/mercury.jpg' },
		Color: { name: 'Yellow', hex: '#ffff00' },
		icon: { zodiac: 'ti-zodiac-gemini', sign: 'ti-wind' },
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
		birthstone: { month1: jun, month2: jul },
		planet: { name: 'The Moon', src: './assets/planets/moon.jpg' },
		Color: { name: 'Sliver', hex: '#c0c0c0' },
		icon: { zodiac: 'ti-zodiac-cancer', sign: 'ti-ripple' },
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
		birthstone: { month1: jul, month2: aug },
		planet: { name: 'The Sun', src: './assets/planets/sun.jpg' },
		Color: { name: 'Orange', hex: '#ffa500' },
		icon: { zodiac: 'ti-zodiac-leo', sign: 'ti-flame' },
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
		birthstone: { month1: aug, month2: sep },

		planet: { name: 'Mercury', src: './assets/planets/mercury.jpg' },
		Color: { name: 'Blue', hex: '#0000ff' },
		icon: { zodiac: 'ti-zodiac-virgo', sign: 'ti-world' },
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
		birthstone: { month1: sep, month2: oct },
		planet: { name: 'Venus', src: './assets/planets/venus.jpg' },
		Color: { name: 'Pink', hex: '#ffc0cb' },
		icon: { zodiac: 'ti-zodiac-libra', sign: 'ti-wind' },
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
		birthstone: { month1: oct, month2: nov },
		planet: { name: 'Pluto', src: './assets/planets/pluto.jpg' },
		Color: { name: 'Black', hex: '#000000' },
		icon: { zodiac: 'ti-zodiac-scorpio', sign: 'ti-ripple' },
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
		birthstone: { month1: nov, month2: dec },
		planet: { name: 'Jupiter', src: './assets/planets/jupiter.jpg' },
		Color: { name: 'Purple', hex: '#800080' },
		icon: { zodiac: 'ti-zodiac-sagittarius', sign: 'ti-flame' },
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
		birthstone: { month1: dec, month2: jan },
		planet: { name: 'Saturn', src: './assets/planets/saturn.jpg' },
		Color: { name: 'Brown', hex: '#a52a2a' },
		icon: { zodiac: 'ti-zodiac-capricorn', sign: 'ti-world' },
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
		birthstone: { month1: jan, month2: feb },
		planet: { name: 'Uranus', src: './assets/planets/uranus.jpg' },
		Color: { name: 'Blue', hex: '#0000ff' },
		icon: { zodiac: 'ti-zodiac-aquarius', sign: 'ti-wind' },
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
		birthstone: { month1: feb, month2: mar },
		planet: { name: 'Neptune', src: './assets/planets/neptune.jpg' },
		Color: { name: 'Light Green', hex: '#90ee90' },
		icon: { zodiac: 'ti-zodiac-pisces', sign: 'ti-ripple' },
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

//Static Options Container

//const curtainOptions = getById('curtain-options');

//for (let i = 0; i < 12; i++) {
//	const optionContainer = createElement('div');
//	addClass(optionContainer, 'option-container');
//	appendChild(curtainOptions, optionContainer);

//	const iconContainer = createElement('div');
//	addClass(iconContainer, 'icon-container');
//	appendChild(optionContainer, iconContainer);

//	const signName = createElement('div');
//	addClass(signName, 'name-container');
//	appendChild(optionContainer, signName);
//}

//const optionContainers = getByClass('option-container');
//const iconContainer = getByClass('icon-container');
//const nameContainer = getByClass('name-container');

//const names = (container, container2, obj) => {
//	const sign = createElement('i');
//	addClass(sign, 'ti');
//	addClass(sign, obj.icon.zodiac);
//	appendChild(container, sign);

//	textContent(container2, obj.name);
//};

//names(iconContainer[0], nameContainer[0], aries);
//names(iconContainer[1], nameContainer[1], taurus);
//names(iconContainer[2], nameContainer[2], gemini);
//names(iconContainer[3], nameContainer[3], cancer);
//names(iconContainer[4], nameContainer[4], leo);
//names(iconContainer[5], nameContainer[5], virgo);
//names(iconContainer[6], nameContainer[6], libra);
//names(iconContainer[7], nameContainer[7], scorpio);
//names(iconContainer[8], nameContainer[8], sagittarius);
//names(iconContainer[9], nameContainer[9], capricorn);
//names(iconContainer[10], nameContainer[10], aquarius);
//names(iconContainer[11], nameContainer[11], pisces);

//const astroCurtain = getById('astro-curtain');
//const headerIcon = getById('header-icon');
//const curtainHeaderContainer = select('.curtain-header-container');
//const curtainHeader = getById('curtain-header');

////Generic Curtain lift function (main option click event)

//for (let i of optionContainers) {
//	i.addEventListener(click, function () {
//		if (!astroCurtain.classList.contains('curtain-up')) {
//			toggleClass(astroCurtain, 'curtain-up');
//			toggleClass(curtainOptions, flexInactive);
//			toggleClass(headerIcon, flexActive);
//			toggleClass(headerIcon, leo.icon.zodiac);
//			textContent(curtainHeader, leo.name);
//		}
//	});
//}

////Default Curtain Drop
//curtainHeaderContainer.addEventListener(click, () => {
//	if (astroCurtain.classList.contains('curtain-up')) {
//		toggleClass(astroCurtain, 'curtain-up');
//		toggleClass(curtainOptions, flexInactive);
//		toggleClass(headerIcon, flexInactive);

//		textContent(curtainHeader, 'Choose Your Sign...');
//	}
//});
