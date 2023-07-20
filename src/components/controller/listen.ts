import { winners } from '../view/winners/winners'
import { bar } from '../view/bar/bar';

export const clickHandler = () => {
	document.addEventListener('click', (event) => {
		const toBar = document.querySelector('.bar_button');
		const toWinners = document.querySelector('.winner_button');
		const content = document.querySelector('.content');
		if (event.target === toBar) {
			if (content) {
				content.innerHTML = '';
			}
			bar()
		}
		if (event.target === toWinners) {
			if (content) {
				content.innerHTML = '';
			}
			// winnersView();
			winners.printWinners()
		}
	})
}