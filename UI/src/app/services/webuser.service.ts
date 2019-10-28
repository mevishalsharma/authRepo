import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()

export class WebUserService {

    constructor(private ht: HttpClient) {

    }

    private webApiUrl: string = "http://localhost:49240/api/WebUser/";
    private insertWebUserUrl: string = this.webApiUrl + "CreateWebUser";
    private getAllWebUserurl: string = this.webApiUrl + "GetAllWebuser";
    private deleteWebUserUrl: string = this.webApiUrl + "DeleteWebUser";
    private getWebUserByIdUrl: string = this.webApiUrl + "GetWebUserById";
    private updateWebUserUrl: string = this.webApiUrl + "UpdateWebUser";
    private userLoginUrl: string = this.webApiUrl + "WebUserLogin";


    insertNewWebUser(role: any): any {
        return this.ht.post(this.insertWebUserUrl, role).toPromise().then(response => response);
    }

    getAllWebUser(): any {
        return this.ht.get(this.getAllWebUserurl).toPromise().then(response => response);

    }

    deleteWebUserById(id: any): any {
        return this.ht.get(this.deleteWebUserUrl + "/" + id).toPromise().then(response => response);
    }

    getWebUserById(id: any): any {
        return this.ht.get(this.getWebUserByIdUrl + "/" + id).toPromise().then(response => response);
    }

    updateWebUser(webUser: any): any {
        return this.ht.post(this.updateWebUserUrl, webUser).toPromise().then(response => response);
    }

    userLogin(webUser: any): any {
        return this.ht.post(this.userLoginUrl, webUser).toPromise().then(response => response);
    }

    authData(): any {
        return this.ht.get("http://localhost:49240/api/test/getData").toPromise().then(response => response);
    }

    authData1(): any {
        return this.ht.get("http://localhost:49240/api/test/getData1").toPromise().then(response => response);
    }

    testLogin(): any {
        return this.ht.get("http://localhost:49240/api/test/getlogin").toPromise().then(response => response);
    }


}