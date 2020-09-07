import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataserviceService } from './pages/dataservice.service';
@Injectable({
  providedIn: 'root'
})
export class MariposaLoginGuard implements CanActivate {
  constructor(private router: Router, private dataService: DataserviceService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.dataService.getlastVisitedPage().then((lastPage) => {
        return this.dataService.getUserInfo().then(userData => {
          if (userData){
            this.router.navigate([lastPage ? lastPage : '/bookvitals/books']);
            return false;
          }
          else{
            return true;
          }
        });
      });
  }
}
