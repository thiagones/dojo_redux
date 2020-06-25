import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers/app-state';
import { UpdateUser } from 'src/app/action/user/user.actions';
import { LoginModel } from './model/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  title = 'dojo';

  constructor(private router: Router, private store: Store<AppState>) {}

  public auth = (user: string, password: string) => {
    const login = new LoginModel(user, password);

    this.store.dispatch(UpdateUser(login));

    this.router.navigateByUrl('main-component')
  }
}