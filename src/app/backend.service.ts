import { Injectable, OnInit, AfterViewInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
// import 'rxjs/add/operator/map';
import { User } from '../app/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private UsersUrl = '/api/Users';

    constructor (private http: Http) {}

    // get("/api/Users")
    getUsers(): Promise<void | User[]> {
      return this.http.get(this.UsersUrl)
                 .toPromise()
                 .then(response => response.json() as User[])
                 .catch(this.handleError);
    }

    // post("/api/Users")
    createUser(newUser: User): Promise<void | User> {
      return this.http.post(this.UsersUrl, newUser)
                 .toPromise()
                 .then(response => response.json() as User)
                 .catch(this.handleError);
    }

    // get("/api/Users/:id") endpoint not used by Angular app

    // delete("/api/Users/:id")
    deleteUser(delUserId: String): Promise<void | String> {
      return this.http.delete(this.UsersUrl + '/' + delUserId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/Users/:id")
    updateUser(putUser: User): Promise<void | User> {
      const putUrl = this.UsersUrl + '/' + putUser._id;
      return this.http.put(putUrl, putUser)
                 .toPromise()
                 .then(response => response.json() as User)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}
