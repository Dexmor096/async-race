import { winnersView } from '../view/winners/winners'
import { bar } from '../view/bar/bar';

export const clickHandler = () => {
	document.addEventListener('click', (event) => {
		const toBar = document.querySelector('.bar_button');
		const toWinners = document.querySelector('.winner_button')
		if (event.target === toBar) {
			bar()
		}
		if (event.target === toWinners) {
			winnersView()
		}
	})
}