export class Component extends HTMLElement {
	public constructor() {
		super();
		console.log('component5');
	}
}
customElements.define('fx-component', Component);
