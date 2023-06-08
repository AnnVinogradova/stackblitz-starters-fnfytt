import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  constructor(private router: Router){}
  home(){
    this.router.navigate(['']);
  }
}