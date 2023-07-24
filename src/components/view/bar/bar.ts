import { getBeers } from '../../controller/api'
import { BarTable } from './BarTable';
import { Beer } from '../../../type';

export const bar = async () => {
	const content = document.querySelector('.content');
	const container = document.querySelector('.container');
	const elementBar = document.createElement('div');
	elementBar.classList.add('bar');
	const beers = await getBeers();
	console.log(beers);
	try {
		beers.forEach((el: Beer) => {
			const beerTable = new BarTable({
				name: el.name, 
				color: el.color, 
				id: el.id
			})
			elementBar.append(beerTable.printBarTable());
		});
	} catch(err) {
		throw new Error(`Error to load bar page`)
	}
		
	if(content) {
		container?.append(content)
		content.append(elementBar);
		barInfo();
	}
}

const barInfo = () => {
	const table = document.createElement('h2');
	const bar = document.querySelector('.bar')
	table.classList.add('bar__title');
	table.textContent = 'Table: count';

	const barPagin = document.createElement('span');
	barPagin.classList.add('bar__pagination');
	barPagin.textContent = `Page № 1`
	
	bar?.prepend(table, barPagin)
}