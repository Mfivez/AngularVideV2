import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User | null>  {

  constructor (private userService: UserService) { }

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | null {
    console.log("UserResolver  resolve  state:", state)
    console.log("UserResolver  resolve  route:", route)

    const userId = route.paramMap.get('id')
    return userId ? this.userService.getUserById(userId) : null
  }
}
