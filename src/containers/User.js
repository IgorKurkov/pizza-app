import { Component } from '../Gordian';
export default class User extends Component {
  constructor(){
    super();
    console.log(this, 'initialised');
  }

  render() {
    return parseHTML(`
      <div class="user">User info goes here</div>
    `); 
	}
}
