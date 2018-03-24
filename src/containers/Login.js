import { Component } from '../Gordian';
import { parseHTML } from '../utils';

export default class Login extends Component {
  constructor(){
    super();
    this.host.classList.add('login-container');
  }

  render(){
    return parseHTML(`
      <div class="login">Login goes here</div>
    `); 
  }
}