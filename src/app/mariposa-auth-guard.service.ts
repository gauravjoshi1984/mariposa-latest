import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataserviceService } from './pages/dataservice.service';

@Injectable({
  providedIn: 'root'
})
export class MariposaAuthGuardService implements CanActivate {

  constructor(private router: Router, private dataService: DataserviceService, ) { }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean>{
    const lastPage = await this.dataService.getlastVisitedPage();
    return this.dataService.getUserInfo().then(userData => {
      if (userData){
        if (state.url === '/admin-sign-in'){
            this.router.navigate([lastPage ? lastPage : '/carecircle']);
            return false;
        }
        else{
          if (state.url === '/carecircle'){
            if (lastPage !== null){
              this.router.navigate([lastPage]);
              return false;
            }
            else{
              return true;
            }
          }else{
            return true;
          }
          // return true;
        }
      }
      else if (state.url !== '/admin-sign-in'){
        this.router.navigate(['admin-sign-in']);
        return false;
      }
      else{
        return true;
      }
    });
  }
}
