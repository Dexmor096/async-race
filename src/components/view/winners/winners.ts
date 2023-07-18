import './winners.css'

export const winnersView = () => {
	const content = document.querySelector('.content')
	const container = document.querySelector('.container')
	if (content) {
	content.innerHTML = `
	<div class="winners">
		<h2 class="winners__count">Winners: count</h2>
		<h3 class="winners__page-number">Page: № count</h3>
		<table class="winners__table">
			<tr class="table__title">
				<th>Number</th>
				<th>Beer</th>
				<th>Beer Brand</th>
				<th>Wins</th>
				<th>Best time</th>
			</tr>
			<tr>
				<td>1</td>
				<td>img</td>
				<td>Carlsberg</td>
				<td>1</td>
				<td>1:15</td>
			</tr>
		</table>
		<div class="pagination">
			<button class="button">PREV</button>
			<button class="button">NEXT</button>
		</div>
	</div>
	`
	container?.append(content)
	}
	
}