import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class UserService {

  users: User[] = [];
  errors: Array<any>;

  private serverResponse = '{ "email": [ "can\'t be blank" ], "first_name": [ "can\'t be blank" ], "last_name": [ "can\'t be blank" ] }';
  private userDictionary = {
    1: '{ "id": 1, "buyer_id": 1, "first_name": "Fred", "last_name": "Flintstone", "email": "fred.flintstone@slaterockandgravel.com" }',
    2: '{ "id": 2, "buyer_id": 2, "first_name": "Barney", "last_name": "Rubble", "email": "barney.rubble@slaterockandgravel.com" }',
    3: '{ "id": 3, "buyer_id": 3, "first_name": "Wilma", "last_name": "Flintstone", "email": "wilma.flinstone@dailygranite.com" }'
  };

  constructor() { }


  getUsers() {
    this.users = JSON.parse("[" + Object.keys(this.userDictionary).map(key => this.userDictionary[key]).join(',') + "]");
  }

  getUser(id: number) {
    return JSON.parse(this.userDictionary[id]);
  }

  validateUser() {
    // Parse Server Response
    this.errors = JSON.parse(this.serverResponse);
    return this.errors;
  }

  addUser(data) {
    // Get length of objects - The next id will be current maximum id + 1
    var maxUser = Object.keys(this.userDictionary).length;
    this.userDictionary[maxUser + 1] = JSON.stringify({
      "id": maxUser + 1,
      "buyer_id": maxUser + 1,
      "first_name": data.firstname,
      "last_name": data.lastname,
      "email": data.email
    });
    // console.log(this.userDictionary);

    /* In real world app - post the data to the DB via API via http */

  }

  private logError(error: any) {
    console.error('service found an error: ' + error);
  }

}
