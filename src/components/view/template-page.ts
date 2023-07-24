import { header } from './header/header';
import { bar } from './bar/bar';
import { form } from './form/form';

export const render = async (home: boolean) => {
	const homePage = home;
	const pageWrapper:HTMLDivElement = document.createElement('div');
	pageWrapper.classList.add('page__wrapper');

	const container = document.createElement('div');
	container.classList.add('container');

	const content = document.createElement('div');
	content.classList.add('content');

	document.body.append(pageWrapper);
	pageWrapper.append(container);
	container.append(content, header.createHeader())
	homePage ? form.printForm() : null;
	bar();
}

