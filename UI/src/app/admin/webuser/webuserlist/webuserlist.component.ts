import { Component, OnInit } from "@angular/core";


import { WebUserService } from "../../../services/webuser.service";
import { WebUserModel } from '../../../model/webuser.model';




@Component({
    selector:'admin-webuser-webuserlist',
    templateUrl:'./webuserlist.component.html'
})

export class WebUserListComponent implements OnInit{

    constructor(private webUserService:WebUserService){

    }
    private webUserList:WebUserModel[]=[];

    ngOnInit():void{
        this.getWebUserList();
    }
 
    getWebUserList(){
        this.webUserService.getAllWebUser().then(data=>{
            this.webUserList=data;
        })
    }

    deleteWebUser(id:any){
        this.webUserService.deleteWebUserById(id).then(data=>{
            this.getWebUserList();
        })


    }
}