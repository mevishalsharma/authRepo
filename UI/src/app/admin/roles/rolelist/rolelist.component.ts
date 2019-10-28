import { Component, OnInit, } from "@angular/core";

import { RoleService } from "../../../services/role.service";
import { RoleModel } from "../../../model/role.model";
import { RoleItemComponent } from "../roleitem/roleitem.component";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-rolelist",
    templateUrl: "./rolelist.component.html",
    styleUrls: [
        "./rolelist.component.css"
    ]


})
export class RoleListComponent implements OnInit {
    private roleList: RoleModel[] = [];
    private roleItem: RoleModel = new RoleModel;

    ngOnInit(): void {
        this.getAllRoles();
    }
    constructor(private roleService: RoleService, private route: Router) {

    }

    getAllRoles() {
        this.roleService.getAllUserRoles().then(data => {
            this.roleList = data;
        })
    }

    deleteRoles(value: any) {
        let id = value;
        this.roleService.deleteUserRole(value).then(data => {
            this.getAllRoles();
        });
    }

    //Was Called on ADD Button Click, But replaced with Link and parameter and routing directly happening on Link, Check HTML page - commented ADD Button
    // addRoles(){
    //     this.route.navigate(["roleitem", 0]);
    // }

}