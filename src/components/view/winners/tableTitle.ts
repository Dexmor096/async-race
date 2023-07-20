import { Table } from '../../../type'

class TableHead {
	public createTableHead(props: Table) {
		const title = document.createElement('th');
		title.textContent = props.text;
		return title;
	}
}

export const tableHead = new TableHead();