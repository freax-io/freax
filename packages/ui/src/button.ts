import { Component } from '@freax/core/component';

export class Button extends Component {
	public constructor() {
		super();
		console.log('Button3');
	}
}
customElements.define('fx-button', Button);
