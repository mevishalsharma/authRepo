import { NgModule } from "@angular/core";
import { JWTComponent } from "./jwt.home.component";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../authGuard";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthenticationInterceptor } from "./interceptor";


const jwtRoute = [
    { path: "jwtHome", component: JWTComponent, canActivate: [AuthGuard] }
]
@NgModule({
    declarations: [
        JWTComponent,
    ],
    imports: [
        RouterModule.forChild(jwtRoute),
    ],
    exports: [],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }]
})
export class JWTModule {

}