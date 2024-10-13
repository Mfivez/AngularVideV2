import { Injectable } from '@angular/core';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { id: 1, nom: 'Thibaud', prenom: 'Ribeiro' },
    { id: 2, nom: 'Geoffrey', prenom: 'Pandas' },
    { id: 3, nom: 'Geoffrey', prenom: 'Tophand' },
  ];

  constructor () { }

  getUserById (id: string): User | null {
    return this.users.find(u => u.id === +id) || null;
  }
}
