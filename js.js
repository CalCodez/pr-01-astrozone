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
