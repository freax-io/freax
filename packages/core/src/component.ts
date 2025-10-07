export class Component extends HTMLElement {
	public constructor() {
		super();
		console.log('component v4');
	}
}
customElements.define('fx-component', Component);
