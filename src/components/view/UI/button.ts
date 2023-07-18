import { PropsButton } from '../../../type'

export class Button {
	public createButton(props: PropsButton): HTMLButtonElement {
		const button = document.createElement('button');
		button.classList.add('button');
		button.dataset.id = props.buttonId;
		button.textContent = props.text;
		return button;
	}
}