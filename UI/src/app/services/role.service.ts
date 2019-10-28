import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"




@Injectable()
export class RoleService {

    constructor(private ht: HttpClient) { }
    private webAPIURL: string = "http://localhost:49240/api/Role/";

    private getAllUserRolesURL: string = this.webAPIURL + "GetAllRoles";
    private getAllUserRolesByIdURL: string = this.webAPIURL + "GetAllRolesById";
    private insertUserRoleURL: string = this.webAPIURL + "CreateRole";
    private deleteUserRoleURL: string = this.webAPIURL + "DeleteRole";
    private updateUserRoleURL: string = this.webAPIURL + "UpdateRole";

    getAllUserRoles(): any {

        return this.ht.get(this.getAllUserRolesURL).toPromise().then(response => response);
    }
    getAllUserRolesById(id: any): any {

        return this.ht.get(this.getAllUserRolesByIdURL + "/" + id).toPromise().then(response => response);
    }
    insertUserRole(role: any): any {
        return this.ht.post(this.insertUserRoleURL, role).toPromise().then(response => response);

    }

    deleteUserRole(id: any): any {

        return this.ht.get(this.deleteUserRoleURL + "/" + id).toPromise().then(response => response);

    }


    udpateUserRole(role: any): any {
        return this.ht.post(this.updateUserRoleURL, role).toPromise().then(response => response);

    }

}