import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
// import '../node_modules/rxjs/add/operator/map';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
// this.myObservable().pipe(map(data => {}));

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get('http://localhost:8080/api/users').pipe(
      map(res => res.json()));
  }

  // getNotifications() {
  //   return this.http.get('http://localhost:8080/api/notifications').pipe(
  //     map(res => res.json()));
  // }

  addUser(newUser) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/api/user', newUser, { headers: headers }).pipe(
      map( res => res.json()));
  }

}
