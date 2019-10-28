import { OnInit, Component } from "@angular/core";
import {WebUserModel} from '../model/webuser.model'
import {ActivatedRoute,Router} from '@angular/router'

@Component({
    selector:'user-home',
    templateUrl:'./userhome.component.html'
})
export class UserHomeComponent implements OnInit{
    webUserItem:WebUserModel=new WebUserModel();
    constructor(private routeParam:ActivatedRoute){

    }
    ngOnInit():void{

    }
}