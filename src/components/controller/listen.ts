import { winners } from '../view/winners/winners'
import { bar } from '../view/bar/bar';
import { form } from '../view/form/form';
import { getBeers } from './api'

export const clickHandler = () => {
	document.addEventListener('click', (event) => {
		const toBarEl = document.querySelector(`.button[data-id=bar-id]`);
		const toWinnerEl = document.querySelector(`.button[data-id=winners-id]`);

		const content = document.querySelector('.content');
		const customization = document.querySelector('.customization')
		if (event.target === toBarEl) {
			if (content ) {
				content.innerHTML = '';
				bar();
				getBeers();
			}
		}
		if (event.target === toWinnerEl) {
			if (content) {
				content.innerHTML = '';
				winners.printWinners();
			}
		}
	})
}