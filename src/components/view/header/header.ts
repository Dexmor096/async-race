import { Button } from '../UI/button'
export class Header {
	public createHeader() {
		const headerEl = document.createElement('div');
		headerEl.classList.add('header');

		const buttonEl = new Button();
		headerEl.append(buttonEl.createButton({
			 text: 'To Bar', 
			 buttonId: `bar-${'id'}`
			}),
		buttonEl.createButton({
			 text: 'To Winners', 
			 buttonId: `winners-${'id'}`
			}));
			return headerEl;
	}
}
export const header = new Header();