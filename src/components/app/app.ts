import { render } from '../view/template-page';
import { clickHandler } from '../controller/listen';

export const initApp = ():void => {
	render();
	clickHandler();
}
