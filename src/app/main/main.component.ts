import {Component, OnInit} from '@angular/core';
import {IDemoState} from "../app.domain";
import {Router} from "@angular/router";
import {getUserData} from "../user/state/user.actions";
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: any;

  constructor(private store: Store<IDemoState>,
              private _router: Router)
  { }

  ngOnInit() {
    this.store.select('user').subscribe(user => {
      this.user = user;
    });
  }

  doLogin(): void {
    this.store.dispatch(getUserData());
  }

  goToCart(): void {
    this._router.navigateByUrl('/cart');
  }
}
