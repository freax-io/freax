import { Button } from '@freax/ui/button';

export default class FreaxIO extends Button {
	public constructor() {
		super();
		console.log('freax.io')
	}
}
customElements.define('freax-io', FreaxIO);
