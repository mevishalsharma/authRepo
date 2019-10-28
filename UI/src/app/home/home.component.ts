import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: [
        "./home.component.css"
    ]


})
export class HomeComponent implements OnInit {
    private title: string = "This is Home Page"
    
  private isLogin: boolean = true;
    ngOnInit(): void {

    }

    constructor(private route: Router, private routeParam: ActivatedRoute) {
        this.routeParam.params.subscribe(param => {
            if (param["id"] && param["id"] > 0)
                this.isLogin = false;
        })

    }



}