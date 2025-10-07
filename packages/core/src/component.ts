export class Component extends HTMLElement {
	public constructor() {
		super();
		console.log('component v2');
	}
}
customElements.define('fx-component', Component);
