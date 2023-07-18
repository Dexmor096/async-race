

export const bar = () => {
	const content = document.querySelector('.content');
	const container = document.querySelector('.container');
	if(content) {
		content.innerHTML = `
		<div class="bar">
				<div class="bar__table">
					<div class="table__controls">
						<button class="button table__button">Select</button>
						<button class="button table__button">Remove</button>
						<button class="button table__button">Start</button>
						<button class="button table__button">Stop</button>
						<span class="table__name">beer name</span>
					</div>
					<div class="bar-table"></div>
					<img src="../assets/image/beer_icon_235191.svg" class="table__drink">
					<div class="table__desktop"></div>
				</div>
				</div>
		`
		container?.append(content)
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