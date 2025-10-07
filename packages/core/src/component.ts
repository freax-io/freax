export class Component extends HTMLElement {
	public constructor() {
		super();
		console.log('component v3');
	}
}
customElements.define('fx-component', Component);
