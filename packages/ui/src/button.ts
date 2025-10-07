import { Component } from '@freax/core/component';

export class Button extends Component {
	public constructor() {
		super();
		console.log('Button v4');
	}
}
customElements.define('fx-button', Button);
