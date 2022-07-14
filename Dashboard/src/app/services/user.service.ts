import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  type: any;
  message: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookie: CookieService
  ) {}
  verify() {
    let jwt: string = this.getJwt(),
      refresh: string = this.getRefresh();

    if (jwt.length < 1 || refresh.length < 1) {
      return false;
    } else {
      let decoded: any = jwt_decode(jwt);
      let current_time: any = Date.now() / 1000;
      if (decoded.exp < current_time) {
        // @ts-ignore
        if (this.refresh_token(refresh)) {
          console.log(this.refresh_token(refresh));
          return true;
        } else {
          return false;
        }
      } else {
        if (this.router.url === '/login' || this.router.url === '/register') {
          this.router.navigate(['/']);
        }
        return true;
      }
    }
  }
  refresh_token(token: string) {
    this.http
      .post(`${environment.backend}/api/auth/refresh`, { refresh: token })
      .subscribe(
        (res: any) => {
          window.location.reload();
          this.setJwt(res['access']);
          return true;
        },
        (err: any) => {
          console.log(err);
          return false;
        }
      );
  }
  getJwt() {
    return this.cookie.get('jwt');
  }
  getRefresh() {
    return this.cookie.get('refresh');
  }
  setJwt(token: string) {
    this.cookie.set('jwt', token);
  }
  setRefresh(token: string) {
    this.cookie.set('refresh', token);
  }
}
