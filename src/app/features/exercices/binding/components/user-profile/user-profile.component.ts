import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  
  user = {
    firstName: 'dédé',
    lastName: 'Théthé',
    email: 'dédéThéthé@gmail.com'
  };

}
