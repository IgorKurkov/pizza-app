import './main.scss';
import { Component } from '../../Gordian';
import { parseHTML } from '../../utils';

export default class Main extends Component {
	constructor() {
		super();
		this.host.classList.add('main-container');
	}

	render() {
		return parseHTML(`
      <div class="main">Main goes here</div>
    `);
	}
}