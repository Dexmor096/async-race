import { header } from './header/header';
import { bar } from './bar/bar';
import { winnersView } from './winners/winners';
import { form } from './form/form';

export const render = async () => {
	const pageWrapper:HTMLDivElement = document.createElement('div');
	pageWrapper.classList.add('page__wrapper');
	pageWrapper.innerHTML = `
		<div class="container">
			${header()}
			<div class="content">
			</div>
		</div>`
			document.body.append(pageWrapper)
			form()
			bar()
}

