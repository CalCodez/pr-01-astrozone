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
		color: { name: 'Red', hex: '#ff0000' },
		icon: { zodiac: 'ti-zodiac-aries', sign: 'ti-flame' },
		backSplash: { src: './assets/astro_backsplash/aries_backsplash.jpg' },
		description:
			'Bold and energetic, Aries is a fiery leader driven by passion and ambition. Confident and competitive, they thrive on challenges and take initiative. Independent and courageous, they act quickly but can be impulsive. Their enthusiasm and determination make them natural pioneers, always ready to blaze new trails.',
	},

	taurus: {
		name: 'Taurus',
		sign: 'Earth',
		symbol: 'The Bull',
		traits: ['Caring', 'Ambiverted', 'Ambitious', 'Hardworking', 'Self-Centered'],
		date: 'April 20 - May 20',
		birthstone: { month1: apr, month2: may },
		planet: { name: 'Venus', src: './assets/planets/venus.jpg' },
		color: { name: 'Green', hex: '#008000' },
		icon: { zodiac: 'ti-zodiac-taurus', sign: 'ti-world' },
		backSplash: { src: './assets/astro_backsplash/taurus_backsplash.jpg' },
		description:
			'Grounded and reliable, Taurus values stability, comfort, and perseverance. Patient and hardworking, they appreciate beauty, luxury, and sensual pleasures. Stubborn yet deeply loyal, they commit fully to relationships and goals. Practical and determined, they build strong foundations, seeking security in all aspects of life while embracing life’s simple joys.',
	},

	gemini: {
		name: 'Gemini',
		sign: 'Air',
		symbol: 'The Twins',
		traits: ['Spontaneous', 'Confusing', 'Funny', 'Sociable', 'Indecisive'],
		date: 'May 21 - June 21',
		birthstone: { month1: may, month2: jun },
		planet: { name: 'Mercury', src: './assets/planets/mercury.jpg' },
		color: { name: 'Yellow', hex: '#ffff00' },
		icon: { zodiac: 'ti-zodiac-gemini', sign: 'ti-wind' },
		backSplash: { src: './assets/astro_backsplash/gemini_backsplash.jpg' },
		description:
			'Curious and adaptable, Gemini thrives on communication and intellectual stimulation. Quick-witted and sociable, they easily connect with others. Playful and versatile, they enjoy variety and change. Ruled by Mercury, they excel in expressing ideas but can be restless. Their dual nature makes them both charming conversationalists and deep thinkers.',
	},

	cancer: {
		name: 'Cancer',
		sign: 'Water',
		symbol: 'The Crab',
		traits: ['Sarcastic', 'Loveable', 'Playful', 'Warm-hearted', 'Jealous'],
		date: 'June 22 - July 22',
		birthstone: { month1: jun, month2: jul },
		planet: { name: 'The Moon', src: './assets/planets/moon.jpg' },
		color: { name: 'Sliver', hex: '#c0c0c0' },
		icon: { zodiac: 'ti-zodiac-cancer', sign: 'ti-ripple' },
		backSplash: { src: './assets/astro_backsplash/cancer_backsplash.jpg' },
		description:
			'Deeply emotional and intuitive, Cancer is nurturing and protective. Loyal and sensitive, they value family and close relationships. Their strong intuition helps them connect with others, but they can be guarded. Compassionate and sentimental, they seek emotional security, creating a warm, caring environment wherever they go.',
	},

	leo: {
		name: 'Leo',
		sign: 'Fire',
		symbol: 'The Lion',
		traits: ['Fun', 'Warm', 'Loving', 'Egocentric', 'Cute'],
		date: 'July 23 - August 22',
		birthstone: { month1: jul, month2: aug },
		planet: { name: 'The Sun', src: './assets/planets/sun.jpg' },
		color: { name: 'Orange', hex: '#ffa500' },
		icon: { zodiac: 'ti-zodiac-leo', sign: 'ti-flame' },
		backSplash: { src: './assets/astro_backsplash/leo_backsplash.webp' },
		description:
			'Charismatic and confident, Leo shines with passion and creativity. Bold and ambitious, they love attention and thrive as leaders. Generous and warm-hearted, they inspire others with enthusiasm. Loyal and courageous, they defend loved ones fiercely. Their vibrant energy and determination make them natural stars, always striving for greatness.',
	},

	virgo: {
		name: 'Virgo',
		sign: 'Earth',
		symbol: 'The Maiden',
		traits: ['Jealous', 'Indecisive', 'Intelligent', 'Loyal', 'Compromising'],
		date: 'August 23 - September 22',
		birthstone: { month1: aug, month2: sep },

		planet: { name: 'Mercury', src: './assets/planets/mercury.jpg' },
		color: { name: 'Blue', hex: '#0000ff' },
		icon: { zodiac: 'ti-zodiac-virgo', sign: 'ti-world' },
		backSplash: { src: './assets/astro_backsplash/virgo_backsplash.jpg' },
		description:
			'Analytical and detail-oriented, Virgo values precision, logic, and service. Hardworking and practical, they seek efficiency and personal growth. Loyal and reliable, they thrive on structure and organization. Perfectionists by nature, they can be critical but always aim for excellence. Their grounded, methodical approach ensures success in everything they do.',
	},

	libra: {
		name: 'Libra',
		sign: 'Air',
		symbol: 'The Scales',
		traits: ['Friendly', 'Ambivert', 'Childish', 'Spontaneous', 'Flighty'],
		date: 'September 23 - October 22',
		birthstone: { month1: sep, month2: oct },
		planet: { name: 'Venus', src: './assets/planets/venus.jpg' },
		color: { name: 'Pink', hex: '#ffc0cb' },
		icon: { zodiac: 'ti-zodiac-libra', sign: 'ti-wind' },
		backSplash: { src: './assets/astro_backsplash/libra_backsplash.jpg' },
		description:
			'Charming and diplomatic, Libra seeks balance, harmony, and fairness. Social and artistic, they appreciate beauty and deep connections. Intelligent and persuasive, they navigate relationships with grace. Indecisive at times, they strive to please others. Their natural sense of justice and elegance makes them skilled mediators and peacemakers.',
	},

	scorpio: {
		name: 'Scorpio',
		sign: 'Water',
		symbol: 'The Scorpion',
		traits: ['Attractive', 'Envious', 'Loyal', 'Hardworking', 'Creative'],
		date: 'October 23 - November 21',
		birthstone: { month1: oct, month2: nov },
		planet: { name: 'Pluto', src: './assets/planets/pluto.jpg' },
		color: { name: 'Black', hex: '#000000' },
		icon: { zodiac: 'ti-zodiac-scorpio', sign: 'ti-ripple' },
		backSplash: { src: './assets/astro_backsplash/scorpio_backsplash.jpg' },
		description:
			'Intense and mysterious, Scorpio is deeply emotional and passionate. Loyal and determined, they value depth and authenticity. Magnetic and intuitive, they read people effortlessly. Protective and sometimes secretive, they guard their emotions fiercely. Their resilience and ambition make them powerful forces, unafraid to transform and rise from challenges.',
	},

	sagittarius: {
		name: 'Sagittarius',
		sign: 'Fire',
		symbol: 'The Archer',
		traits: ['Loyal', 'Irritable', 'Nervous', 'Generous', 'Hilarious'],
		date: 'November 22 - December 21',
		birthstone: { month1: nov, month2: dec },
		planet: { name: 'Jupiter', src: './assets/planets/jupiter.jpg' },
		color: { name: 'Purple', hex: '#800080' },
		icon: { zodiac: 'ti-zodiac-sagittarius', sign: 'ti-flame' },
		backSplash: { src: './assets/astro_backsplash/sagittarius_backsplash.jpg' },
		description:
			'Adventurous and optimistic, Sagittarius loves freedom, exploration, and new experiences. Independent and intellectual, they seek knowledge and truth. Honest and humorous, they uplift those around them. Restless and energetic, they resist constraints and embrace spontaneity. Their adventurous spirit and open-mindedness make them natural explorers and lifelong learners.',
	},

	capricorn: {
		name: 'Capricorn',
		sign: 'Earth',
		symbol: 'The Goat',
		traits: ['Loving', 'Funny', 'Kind', 'Suspicious', 'Spontaneous'],
		date: 'December 22 - January 19',
		birthstone: { month1: dec, month2: jan },
		planet: { name: 'Saturn', src: './assets/planets/saturn.jpg' },
		color: { name: 'Brown', hex: '#a52a2a' },
		icon: { zodiac: 'ti-zodiac-capricorn', sign: 'ti-world' },
		backSplash: { src: './assets/astro_backsplash/capricorn_backsplash.jpg' },
		description:
			'Ambitious and disciplined, Capricorn is hardworking and goal-oriented. Practical and responsible, they value structure and perseverance. Patient and determined, they steadily climb toward success. Reserved yet deeply loyal, they take commitments seriously. Their strategic mindset and resilience ensure long-term achievements, making them strong, dependable leaders and providers.',
	},
	aquarius: {
		name: 'Aquarius',
		sign: 'Air',
		symbol: 'The Water-bearer',
		traits: ['Restless', 'Creative', 'Egotistical', 'Altruistic', 'Positive'],
		date: 'January 20 - February 18',
		birthstone: { month1: jan, month2: feb },
		planet: { name: 'Uranus', src: './assets/planets/uranus.jpg' },
		color: { name: 'Blue', hex: '#0000ff' },
		icon: { zodiac: 'ti-zodiac-aquarius', sign: 'ti-wind' },
		backSplash: { src: './assets/astro_backsplash/aquarius_backsplash.jpg' },
		description:
			'Innovative and independent, Aquarius values originality, intellect, and progress. Visionary and unconventional, they challenge norms and seek change. Social yet individualistic, they connect through ideas rather than emotions. Open-minded and humanitarian, they advocate for the greater good. Their unique perspective and futuristic thinking make them ahead of their time.',
	},
	pisces: {
		name: 'Pisces',
		sign: 'Water',
		symbol: 'The Fish',
		traits: ['Empathetic', 'Funny', 'Secretive', 'Trust Issues', 'Open-minded'],
		date: 'February 19 - March 20',
		birthstone: { month1: feb, month2: mar },
		planet: { name: 'Neptune', src: './assets/planets/neptune.jpg' },
		color: { name: 'Light Green', hex: '#90ee90' },
		icon: { zodiac: 'ti-zodiac-pisces', sign: 'ti-ripple' },
		backSplash: { src: './assets/astro_backsplash/pisces_backsplash.jpg' },
		description:
			'Dreamy and intuitive, Pisces is deeply emotional and creative. Compassionate and empathetic, they feel deeply for others. Imaginative and artistic, they escape into fantasy. Sensitive and spiritual, they seek connection beyond the material world. Their gentle, kind nature makes them natural healers, always guided by their emotions.',
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

const curtainOptions = getById('curtain-options');

for (let i = 0; i < 12; i++) {
	const optionContainer = createElement('div');
	addClass(optionContainer, 'option-container');
	appendChild(curtainOptions, optionContainer);

	const iconContainer = createElement('div');
	addClass(iconContainer, 'icon-container');
	appendChild(optionContainer, iconContainer);

	const signName = createElement('div');
	addClass(signName, 'name-container');
	appendChild(optionContainer, signName);
}

const optionContainers = getByClass('option-container');
const iconContainer = getByClass('icon-container');
const nameContainer = getByClass('name-container');

const [
	ariesToggle,
	taurusToggle,
	geminiToggle,
	cancerToggle,
	leoToggle,
	virgoToggle,
	libraToggle,
	scorpioToggle,
	sagittariusToggle,
	capricornToggle,
	aquariusToggle,
	piscesToggle,
] = optionContainers;

const names = (container, container2, obj) => {
	const sign = createElement('i');
	addClass(sign, 'ti');
	addClass(sign, obj.icon.zodiac);
	appendChild(container, sign);

	textContent(container2, obj.name);
};

names(iconContainer[0], nameContainer[0], aries);
names(iconContainer[1], nameContainer[1], taurus);
names(iconContainer[2], nameContainer[2], gemini);
names(iconContainer[3], nameContainer[3], cancer);
names(iconContainer[4], nameContainer[4], leo);
names(iconContainer[5], nameContainer[5], virgo);
names(iconContainer[6], nameContainer[6], libra);
names(iconContainer[7], nameContainer[7], scorpio);
names(iconContainer[8], nameContainer[8], sagittarius);
names(iconContainer[9], nameContainer[9], capricorn);
names(iconContainer[10], nameContainer[10], aquarius);
names(iconContainer[11], nameContainer[11], pisces);

//Generate Astro Facts Vars and Function

const astroCurtain = getById('astro-curtain');
const headerIcon = getById('header-icon');
const curtainHeaderContainer = select('.curtain-header-container');
const curtainHeader = getById('curtain-header');

const signDateContainer = select('.sign-date-container');
const astroDescription = select('.astro-description-container');
const signType = select('.sign-type-container');
const signTypeIcon = getById('sign-type-icon');
const SymbolNameContainer = select('.symbol-name-container');
const singSymbolIcon = getById('sign-symbol-icon');
const month1Name = select('.month-1-name');
const month1Birthstone = select('.month-1-birthstone');
const month1Img = getById('month-1-img');
const month2Name = select('.month-2-name');
const month2Birthstone = select('.month-2-birthstone');
const month2Img = getById('month-2-img');
const colorName = select('.color-name-container');
const colorSpan = select('.color-span');
const planetName = select('.planet-name-container');
const planetImg = getById('planet-img');
const astroTraitsContainer = select('.astro-traits-container');
const astroResetButton = getById('astro-reset-button');

const toggleAstroFacts = (toggler, obj) => {
	toggler.addEventListener(click, () => {
		if (!astroCurtain.classList.contains('curtain-up')) {
			astroResetButton.style.visibility = 'visible';
			toggleClass(curtainOptions, flexInactive);
			toggleClass(astroCurtain, 'curtain-up');
			headerIcon.style.visibility = 'visible';
			addClass(headerIcon, 'ti');
			toggleClass(headerIcon, obj.icon.zodiac);
			textContent(curtainHeader, obj.name);
			textContent(signDateContainer, obj.date);
			textContent(astroDescription, obj.description);
			textContent(signType, obj.sign);

			addClass(signTypeIcon, 'ti');
			toggleClass(signTypeIcon, obj.icon.sign);
			textContent(SymbolNameContainer, obj.symbol);
			addClass(singSymbolIcon, 'ti');
			toggleClass(singSymbolIcon, obj.icon.zodiac);
			textContent(month1Name, obj.birthstone.month1.month);
			textContent(month1Birthstone, obj.birthstone.month1.stone);
			month1Img.src = obj.birthstone.month1.src;
			textContent(month2Name, obj.birthstone.month2.month);
			textContent(month2Birthstone, obj.birthstone.month2.stone);
			month2Img.src = obj.birthstone.month2.src;
			textContent(colorName, obj.color.name);
			colorSpan.style.backgroundColor = obj.color.hex;
			textContent(planetName, obj.planet.name);
			planetImg.src = obj.planet.src;

			obj.traits.map((trait) => {
				const li = createElement('li');
				textContent(li, trait);
				appendChild(astroTraitsContainer, li);
			});
		}
	});
};

astroResetButton.addEventListener(click, () => {
	if (astroCurtain.classList.contains('curtain-up')) {
		astroResetButton.style.visibility = 'hidden';
		toggleClass(curtainOptions, flexInactive);
		toggleClass(astroCurtain, 'curtain-up');
		headerIcon.style.visibility = 'hidden';
		headerIcon.classList.remove(...headerIcon.classList);

		if (window.innerWidth <= 521) {
			textContent(curtainHeader, 'Choose');
		} else {
			textContent(curtainHeader, 'Choose Your Sign');
		}
		textContent(signDateContainer, '');
		textContent(astroDescription, '');
		textContent(signType, '');

		signTypeIcon.classList.remove(...signType.classList);
		textContent(SymbolNameContainer, '');

		singSymbolIcon.classList.remove(...singSymbolIcon.classList);
		textContent(month1Name, '');
		textContent(month1Birthstone, '');
		month1Img.src = '';
		textContent(month2Name, '');
		textContent(month2Birthstone, '');
		month2Img.src = '';
		textContent(colorName, '');
		colorSpan.style.backgroundColor = '';
		textContent(planetName, '');
		planetImg.src = '';

		const traitItems = astroTraitsContainer.querySelectorAll('li');
		for (let traits of traitItems) {
			traits.remove();
		}
	}
});

toggleAstroFacts(ariesToggle, aries);
toggleAstroFacts(taurusToggle, taurus);
toggleAstroFacts(geminiToggle, gemini);
toggleAstroFacts(cancerToggle, cancer);
toggleAstroFacts(leoToggle, leo);
toggleAstroFacts(virgoToggle, virgo);
toggleAstroFacts(libraToggle, libra);
toggleAstroFacts(scorpioToggle, scorpio);
toggleAstroFacts(sagittariusToggle, sagittarius);
toggleAstroFacts(capricornToggle, capricorn);
toggleAstroFacts(aquariusToggle, aquarius);
toggleAstroFacts(piscesToggle, pisces);

if (window.innerWidth <= 521) {
	textContent(curtainHeader, 'Choose');
}
