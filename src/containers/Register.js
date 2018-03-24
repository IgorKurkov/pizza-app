import { Component } from '../Gordian';
export default class Register extends Component {
  constructor(){
    super();
    console.log(this, 'initialised');
  }

  render() {
    return parseHTML(`
      <div class="reg">Register goes here</div>
    `); 
	}
}