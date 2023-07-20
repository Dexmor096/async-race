import { Row } from '../../../type'

class TableRow {
	createRow(props: Row) {
		const row = document.createElement('tr');
		const element = document.createElement('td');
		const element2 = document.createElement('td');
		const element3 = document.createElement('td');
		const element4 = document.createElement('td');
		const element5 = document.createElement('td');
		element.textContent = props.number;
		element2.textContent = props.beer;
		element3.textContent = props.beerBrand;
		element4.textContent = props.wins;
		element5.textContent = props.bestTime;
		row.append(element, element2, element3, element4, element5)
		return row;
	}
}

export const tableRow = new TableRow();