
export const form = () => {
	const form = document.createElement('div');
	const header = document.querySelector('.header');
	form.classList.add('customization')
	form.innerHTML = `
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
</div>`
header?.after(form)
}