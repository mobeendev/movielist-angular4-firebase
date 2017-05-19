import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  movies: FirebaseListObservable<any[]>;
  name: any;
  mvVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase){

    this.movies = af.list('/movies', {
      query: {
        limitToLast: 50
      }
    });

    this.afAuth.authState;

  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  Send(title: string) {
    this.movies.push({ movies: title });
    this.mvVal = '';
  }

}
