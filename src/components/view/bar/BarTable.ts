import { Button } from '../UI/button';
import { Beer } from '../beer/beer';

export class BarTable {
	private name;
	private color;
	private id;
	constructor(props:{name: string, color: string, id: number}) {
		this.name = props.name,
		this.color = props.color,
		this.id = props.id
	}
	public printBarTable() {
		const elementBarTable = document.createElement('div');
		elementBarTable.classList.add('bar__table')
	
		const elementTableControls = document.createElement('div');
		elementTableControls.classList.add('table__controls');
	
		const button = new Button();
		const selectBtn = button.createButton({text: 'Select', buttonId: `select-${'id'}`});
		const removeBtn = button.createButton({text: 'Remove', buttonId: `remove-${'id'}`}); 
		const startBtn = button.createButton({text: 'Start', buttonId: `start-${'id'}`}); 
		const stopBtn = button.createButton({text: 'Stop', buttonId: `stop-${'id'}`}); 
	
	
		const elementTableBeerName = document.createElement('span');
		elementTableBeerName.classList.add('table__name');
		elementTableBeerName.textContent = `${this.name}`;
	
		const beerImage = new Beer(this.color);
		const beer = beerImage.createBeer();

		elementBarTable.setAttribute('dataSet', `${this.id}`)
	
		const elementTableDesktop = document.createElement('div');
		elementTableDesktop.classList.add('table__desktop');
		
		elementBarTable.append(elementTableControls, beer, elementTableDesktop);
		elementTableControls.append(selectBtn, removeBtn, startBtn, stopBtn, elementTableBeerName);

		return elementBarTable;
	}
}