import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router"

import { RoleService } from "../../../services/role.service";
import { WebUserService } from "../../../services/webuser.service";

import { WebUserModel } from "../../../model/webuser.model";
import { RoleModel } from "../../../model/role.model"; 



@Component({
    selector: 'admin-webuseritem-webusercomponent',
    templateUrl: 'webuseritem.component.html'
})
export class WebUserItemComponent implements OnInit {
    private webUserItem: WebUserModel = new WebUserModel();
    private roleIdList: RoleModel[] = [];
    private selectedRoleId: number = 0;
    private webUserId:number=0;


    constructor(private roleService: RoleService, private webUserService: WebUserService, private route: Router, private routeParam:ActivatedRoute) {

    }
    ngOnInit(): void {
        this.routeParam.params.subscribe(param=>{
            this.webUserId=param["id"];
        })
        if(this.webUserId>0){
           this.getWebUserById();
        }
        this.getRollList();
    }

    getRollList() {
        this.roleService.getAllUserRoles().then(data => {
            this.roleIdList = data;
        })
    }

    saveWebUser() {
        if(this.webUserId==0){
        this.insertWebuser();
        }
        else{
            this.updateWebUser();
        }
    }

    insertWebuser() {
        alert("insert");
        //this.webUserItem.RoleId = this.selectedRoleId;
        this.webUserService.insertNewWebUser(this.webUserItem).then(data => {
            if (data.WebUserId > 0) {
                this.resetControlValues();
                //this.selectedRoleId = 0;
            }
        })
    }
    resetControlValues() {
        this.webUserItem.WebUserId = 0;
        this.webUserItem.UserLogin = "";
        this.webUserItem.Password="";
        this.webUserItem.FirstName = "";
        this.webUserItem.LastName = "";
        this.webUserItem.DisplayName = "";
        this.webUserItem.RoleId = 0;
        this.webUserItem.EmailId = "";
        this.webUserItem.Active = false;
    }

    backToList() {
        this.navigateToList();
    }
    navigateToList() {
        this.route.navigate(["/webUserList"])
    }
    getWebUserById(){
        this.webUserService.getWebUserById(this.webUserId).then(data=>{
            this.webUserItem=data;
        })
    }

    updateWebUser(){
        this.webUserService.updateWebUser(this.webUserItem).then(data=>{
            this.resetControlValues();
            this.navigateToList();
        })
    }
}