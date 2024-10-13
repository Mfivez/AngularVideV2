import { Component, OnInit } from '@angular/core';
import { UserService } from '../../tools/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users: any[] = []
  selectedUser: any = null
  errorMessage: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsersWithCatch()
  }

  loadUsersWithCatch(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data
        this.errorMessage = null },
      error: (err) => {
        this.errorMessage = err.message
      },
      complete: () => console.log('Requête terminée') 
    });
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data
    })
  }

  loadUsersWithOptions(): void {
    this.userService.getUsersWithOptions().subscribe({
      next: (data) => this.users = data,
      error: (err) => console.error('Erreur :', err),
      complete: () => console.log('Requête terminée')
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id)
    })
  }

  editUser(user: any): void {
    this.selectedUser = { ...user }
  }

  resetSelection(): void {
    this.selectedUser = null;
  }

  onFormSubmit(): void {
    this.loadUsers();
    this.resetSelection();
  }
}