import './header.scss';
import { Component } from '../../Gordian';
import { parseHTML } from '../../utils';

export default class Header extends Component {
	constructor() {
		super();
		this.host.classList.add('header-container');
	}

	render() {
		return parseHTML(`
      <div class="header">Header goes here</div>
    `);
	}
}