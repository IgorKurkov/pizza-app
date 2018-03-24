import { insertFragmentTo, parseHTML } from '../utils';

export default class Component {
  constructor(props) {
    this.props = props || {};
    this.state = {};
    this.host = document.createElement('div');
    this.updateState = this.updateState.bind(this); // it maybe is not important for binding
  }
  
  updateState(nextState) {
    this.state = Object.assign({}, this.state, nextState);
    this._render();
    return this.state;
  }

  update(nextProps) {
    this.props = nextProps;
    return this._render();
  }

  _render() {
    const html = this.render();
    // console.log('Component: html', html)
    // console.log('Component: this.host', this.host)
		this.host.innerHTML = '';

		return insertFragmentTo(this.host, html);
	}

	render() {}
} 