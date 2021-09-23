import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from '@ngrx/store';
import {IDemoState} from '../app.domain';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user: any;

  constructor(private store: Store<IDemoState>,
              private router: Router)
  { }

  ngOnInit() {
    this.store.select('user').subscribe(user => {
      this.user = user;
    });
  }

  goBack(): void {
    this.router.navigateByUrl('');
  }
}


