import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebUserService } from './services/webuser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isLogin: boolean = true;
  title = 'app';
  ngOnInit(): void {

  }
  constructor(private route: Router, private routeParam: ActivatedRoute, private webUserService: WebUserService) {
     
  }

  getLogonUser(value: number) {
    if (value > 0)
      this.isLogin = false;
  }
  loggedOut(){
    localStorage.removeItem("currentUser");
    this.route.navigate(['']);
  }
}
