import { Button } from '../UI/button'
import { Beer } from '../beer/beer';


export const bar = () => {
	const content = document.querySelector('.content');
	const container = document.querySelector('.container');
	const elementBar = document.createElement('div');
	elementBar.classList.add('bar');

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
	elementTableBeerName.textContent = `beer name`;

	const beerImage = new Beer();
	const beer = beerImage.createBeer()

	const elementTableDesktop = document.createElement('div');
	elementTableDesktop.classList.add('table__desktop');

	if(content) {
		container?.append(content)
		content.append(elementBar);
		elementBar.append(elementBarTable);
		elementBarTable.append(elementTableControls, beer, elementTableDesktop);
		elementTableControls.append(selectBtn, removeBtn, startBtn, stopBtn, elementTableBeerName);
		barTable()
	}
}

const barTable = () => {
	const table = document.createElement('h2');
	const barTable = document.querySelector('.bar__table')
	table.classList.add('bar__title');
	table.textContent = 'Table: count';

	const barPagin = document.createElement('span');
	barPagin.classList.add('bar__pagination');
	barPagin.textContent = `Page № 1`
	
	barTable?.prepend(table, barPagin)
}