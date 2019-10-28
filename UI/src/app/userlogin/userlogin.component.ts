import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { WebUserModel } from "../model/webuser.model";
import { Router } from "@angular/router";
import { WebUserService } from "../services/webuser.service";

@Component({
    selector: 'app-user-login',
    templateUrl: 'userlogin.component.html'
})
export class UserLoginComponent implements OnInit {
    @Output() logonUser = new EventEmitter();
    private webUserItem: WebUserModel = new WebUserModel();
    private message: string = "";

    constructor(private webUserService: WebUserService, private route: Router) {

    }
    ngOnInit() {
        // if (localStorage.getItem('currentUser')) {            
        //     this.route.navigate(["/home"]);
        // }else{
        //     this.route.navigate([""]);
        // }
    }

    userLogin() {
        this.webUserService.testLogin().then(data => {
            if (this.doAuthenticate(data['token'])) {
                this.route.navigate(["/jwtHome"]);
            }
            else {
                this.route.navigate([""]);
            }

        });





        //   this.webUserService.testLogin().subscribe(
        //       next => {
        //           if(this.doAuthenticate(next)) {
        //             this.route.navigate(["/jwtHome"]);
        //           }
        //           else {
        //             this.route.navigate([""]);
        //           }
        //       },
        //       error => console.log('sd')
        //   );
        //this.webUserService.testLogin().then(data => {
        //             if (data) {
        // //localStorage.setItem('currentUser', JSON.stringify(data.WebUserId));
        //                 // this.webUserService.userLoggedIn(true);
        // //this.logonUser.emit(data.WebUserId);

        //                 this.route.navigate(["/jwtHome"]);


        //             }
        //         })
    }

    doAuthenticate(token) {
        localStorage.setItem('authToken', '');
        if (token) {
            localStorage.setItem('authToken', JSON.stringify(token));
            console.log(token);
            return true;
        }
        return false;
    }
}