import { header } from './header/header';

export const render = async () => {
	const pageWrapper:HTMLDivElement = document.createElement('div');
	pageWrapper.classList.add('page__wrapper');
	pageWrapper.innerHTML = `
	<div class="container">
			${header()}
			<div class="customization">
				<form class="form">
					<input type="text" class="input__name">
					<input type="color" class="input__color" value="#00FFEE">
					<button class="button customize__button">Create</button>
				</form>
				<form class="form">
					<input type="text" class="input__name">
					<input type="color" class="input__color" value="#AA005E">
					<button class="button customize__button">Update</button>
				</form>
				<div class="race-controls">
					<button class="button">Start</button>
					<button class="button">Reset</button>
					<button class="button">Generate random</button>
				</div>
			</div>
			<div class="beer-pub">
				<h2 class="beer-pub__title">Table: count</h2>
				<span class="beer-pub__pagination">Page № 1</span>
				<div class="beer-pub__table">
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
		</div>
	`
	document.body.append(pageWrapper)
}