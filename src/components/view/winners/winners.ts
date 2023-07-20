import './winners.css';
import { Button } from '../UI/button';
import { tableHead } from './tableTitle';
import { tableRow } from './tableRow';

// export const winnersView = () => {
// 	const content = document.querySelector('.content')
// 	const container = document.querySelector('.container')
// 	if (content) {
// 	content.innerHTML = `
// 	<div class="winners">
// 		<h2 class="winners__count">Winners: count</h2>
// 		<h3 class="winners__page-number">Page: № count</h3>
// 		<table class="winners__table">
// 			<tr class="table__title">
// 				<th>Number</th>
// 				<th>Beer</th>
// 				<th>Beer Brand</th>
// 				<th>Wins</th>
// 				<th>Best time</th>
// 			</tr>
// 			<tr>
// 				<td>1</td>
// 				<td>img</td>
// 				<td>Carlsberg</td>
// 				<td>1</td>
// 				<td>1:15</td>
// 			</tr>
// 		</table>
// 		<div class="pagination">
// 			<button class="button">PREV</button>
// 			<button class="button">NEXT</button>
// 		</div>
// 	</div>
// 	`
// 	container?.append(content)
// 	}
	
// }
export class Winners {
	public printWinners() {
		const content = document.querySelector('.content')
		const winnersEl = document.createElement('div');
		winnersEl.classList.add('winners');

		const winnersCountEl = document.createElement('h2');
		winnersCountEl.classList.add('winners__count');
		winnersCountEl.textContent = 'Winners: count';

		const winnersPageNumberEl = document.createElement('h2');
		winnersPageNumberEl.classList.add('winners__page-number');
		winnersPageNumberEl.textContent = 'Page: № count';

		const winnersTableEl = document.createElement('table');
		winnersTableEl.classList.add('winners__table');

		const tableTitleEl = document.createElement('tr');
		tableTitleEl.classList.add('table__title');

		const headNumber = tableHead.createTableHead({text: 'Number'});
		const headBeer = tableHead.createTableHead({text: 'Beer'});
		const headBeerBrand = tableHead.createTableHead({text: 'Beer Brand'});
		const headWins = tableHead.createTableHead({text: 'Wins'});
		const headBestTime = tableHead.createTableHead({text: 'Best time'});

		const row = tableRow.createRow(
			{
			number: '1', 
			beer: 'image', 
			beerBrand: 'Zhiguli', 
			wins: '1', 
			bestTime: '3:45'
		})

		const pagination = document.createElement('div');
		pagination.classList.add('pagination');

		const button = new Button();
		const prevButton = button.createButton({ text: 'PREV', buttonId: `prev-${'id'}`});
		const nextButton = button.createButton({ text: 'NEXT', buttonId: `next-${'id'}`});
		
		if(content) {
			content.append(winnersEl);
			winnersEl.append(winnersCountEl, winnersPageNumberEl, winnersTableEl, pagination);
			winnersTableEl.append(tableTitleEl, row);
			tableTitleEl.append(headNumber, headBeer, headBeerBrand, headWins, headBestTime);
			pagination.append(prevButton, nextButton);
		}
	}
}
export const winners = new Winners();