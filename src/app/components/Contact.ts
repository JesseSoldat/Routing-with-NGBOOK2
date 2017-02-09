import {Component} from '@angular/core';
import {User} from '../User';


@Component({
  selector: 'contact',
  template: `
  <h1>Contact Us</h1>
  <ul>
  	<li *ngFor="let user of users"><a [routerLink]="['contactrep', user.id]">{{user.name}}</a></li>
  </ul>

  `
})
export class ContactComponent {
	users: User[];

	constructor(){
		this.users = [
			new User(0, 'Joe Smith', 'joe@gmail.com'),
			new User(1, 'Mark Cook', 'mark@gmail.com'),
			new User(2, 'Jim Brown', 'jim@gmail.com')
		]
	}

}