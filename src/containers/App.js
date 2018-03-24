import { Component } from '../Gordian';
import { Header, Main, Footer } from '../components';
import { parseHTML } from '../utils';

export default class App extends Component {
  constructor(){
    super();
    this.host.classList.add('app-container');
    this.header = new Header();
    this.main = new Main();
    this.footer = new Footer();

  }

  render() {
    return [
      this.header.update(),
      this.main.update(),
      this.footer.update(),
    ];
    // return parseHTML(`
    //   <div class="app">App main content goes here</div>
    // `); 
	}

}