import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {User} from '../User';


@Component({
  selector: 'contact-rep',
  template: `
  <div class="container">
	  <h2>Please Contact Us!</h2>
  	<h4>{{currentUser.name}}</h4>
  	<h5>{{currentUser.email}}</h5>
  
	 </div>
  `
})
export class ContactRepComponent {
	id: number;
	users: User[];
	currentUser: any;

	constructor(private route: ActivatedRoute){
		route.params.subscribe(params => {this.id = params['id'];});

		this.users = [
			new User(0, 'Joe Smith', 'joe@gmail.com'),
			new User(1, 'Mark Cook', 'mark@gmail.com'),
			new User(2, 'Jim Brown', 'jim@gmail.com')
		];

		this.currentUser = this.users[this.id];
		console.log(this.currentUser);


	}

}