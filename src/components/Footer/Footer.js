import './footer.scss';
import { Component } from '../../Gordian';
import { parseHTML } from '../../utils';

export default class Footer extends Component {
	constructor() {
		super();
		this.host.classList.add('footer-container');
	}

	render() {
		return parseHTML(`
      <div class="footer">Footer goes here</div>
    `);
	}
}