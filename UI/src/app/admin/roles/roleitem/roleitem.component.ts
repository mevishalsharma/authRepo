import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router"

import { RoleService } from "../../../services/role.service";
import { RoleModel } from "../../../model/role.model";
import { RoleListComponent } from "../rolelist/rolelist.component"

@Component({
    selector: "app-admin-roleitem",
    templateUrl: "./roleitem.component.html",
    styleUrls: [
        "./roleitem.component.css"
    ]


})
export class RoleItemComponent implements OnInit {
    private roleList: RoleModel[] = [];
    private roleItem: RoleModel = new RoleModel;
    private roleId: number = 0;
    private isFormValid: boolean = true;
    private showMessage: boolean = false;
    private message: string = "";
    private messageClass: string = "alert alert-success";

    ngOnInit(): void {
        this.routeParam.params.subscribe(param => {
            this.roleId = param["id"];
        })

        if (this.roleId > 0)
            this.getupdateRoles();
    }
    constructor(private roleService: RoleService, private routeParam: ActivatedRoute, private route: Router) {

    }

    saveRole() {
        this.validateForm();
        if (this.isFormValid) {
            if (!this.roleItem.RoleId || this.roleItem.RoleId == 0) {
                this.insertRole();
            }
            else {
                this.updateRoles();
            }
        }
    }

    validateForm() {
        if (!this.roleItem.Role || this.roleItem.Role.trim() == "")
            this.isFormValid = false;
        else
            this.isFormValid = true;

        if (!this.roleItem.RoleDescription || this.roleItem.RoleDescription.trim() == "")
            this.isFormValid = false;
        else
            this.isFormValid = true;
    }

    insertRole() {
        this.roleService.insertUserRole(this.roleItem).then(data => {
            if (data.RoleId > 0) {
                this.resetMethod()
                //this.navigateToList();
                this.messageClass = "alert alert-success";
                this.showMessage = true;

                this.message = "Yeah !! Got Inserted Successfully"
            }
            else {
                this.messageClass = "alert alert-danger";
                this.showMessage = true;

                this.message = "!!! Oops something went wrong."
            }
        });

    }

    resetMethod() {
        this.roleItem.Role = "";
        this.roleItem.RoleDescription = "";
        this.roleItem.Active = false;
        this.roleItem.RoleId = 0;
    }

    updateRoles() {
        this.roleService.udpateUserRole(this.roleItem).then(data => {
            this.resetMethod();
            this.navigateToList();

        })
    }

    getupdateRoles() {
        this.roleService.getAllUserRolesById(this.roleId).then(data => {
            this.roleItem = data;
        })
    }

    backToList() {
        this.navigateToList();
    }

    navigateToList() {
        this.route.navigate(["/rolelist"]);
    }

}