import { PropsInput } from '../../../type';
import { Button } from '../UI/button';

export class Input {
	public printInput(props: PropsInput) {

		const inputEl = document.createElement('input');
		inputEl.setAttribute('type', `${props.type}`);
		inputEl.setAttribute('value', `${props.value}`);
		inputEl.setAttribute('placeholder', `${props.placeholder}`);

		return inputEl;
	}
	public createInputsRow(type: 'create' | 'update') {
		const buttonEl = new Button();
		const createBtn = buttonEl.createButton({
			text: type ==='create' ? 'Create' : 'Update', 
			buttonId: `create-${'id'}`});
		const formEl = document.createElement('div');
		formEl.append(this.printInput({
			type: 'text',
			value: '',
			placeholder: `Enter Name`
		}),this.printInput({
			type: 'color',
			value: '#FFAA00',
			placeholder: `Beer Color`
		}), createBtn)
		
		return formEl;
	}
}
