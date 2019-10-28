import { Component, OnInit } from "@angular/core";
import { WebUserService } from "../services/webuser.service";

@Component({
    selector: "app-jwt-home",
    templateUrl: "jwt.home.component.html",
    styleUrls: ["jwt.home.component.css"]
})
export class JWTComponent implements OnInit {
    outData: string = "No Data";
    constructor(private webUserService: WebUserService) { }
    ngOnInit() {
        this.webUserService.authData().then(data => {
            this.webUserService.authData1().then(data1 => {
                this.outData = data.Name + 'and ' + data1.Name;
            });

        });
    }
}