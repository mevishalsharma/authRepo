import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from "@angular/router"
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { RoleService } from './services/role.service';
import { RoleListComponent } from './admin/roles/rolelist/rolelist.component';
import { HomeComponent } from './Home/home.component';
import { RoleItemComponent } from './admin/roles/roleitem/roleitem.component';
import { WebUserItemComponent } from './admin/webuser/webuseritem/webuseritem.component';
import { WebUserListComponent } from './admin/webuser/webuserlist/webuserlist.component';
import { WebUserService } from './services/webuser.service';
import { UserLoginComponent } from './userlogin/userlogin.component';
import { AuthGuard } from './authGuard';
import { JWTModule } from './JWT/jwt.module';


const appRoute: Routes = [
  { path: "", component: UserLoginComponent },   
  { path: "home", component: HomeComponent , canActivate: [AuthGuard]}, 
  { path: "rolelist", component: RoleListComponent, canActivate: [AuthGuard] },
  { path: "roleitem/:id", component: RoleItemComponent, canActivate: [AuthGuard] },
  { path: "webUserItem/:id", component: WebUserItemComponent, canActivate: [AuthGuard] },
  { path: "webUserList", component: WebUserListComponent, canActivate: [AuthGuard] }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoleListComponent,
    RoleItemComponent,
    WebUserItemComponent,
    WebUserListComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    FormsModule,
    JWTModule
  ],
  providers: [RoleService, WebUserService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [RoleItemComponent]
})
export class AppModule { }
