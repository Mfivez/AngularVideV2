import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CorrectionUserService } from '../tools/user.service';

@Component({
  selector: 'correction-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class CorrectionUserFormComponent implements OnChanges {
  @Input() selectedUser: any = null;
  @Output() formSubmit = new EventEmitter<void>(); 

  user = {
    id: null,
    name: '',
    email: ''
  };
  
  isEditing = false;

  constructor(private userService: CorrectionUserService) {}

  ngOnChanges(): void {
    if (this.selectedUser) {
      this.user = { ...this.selectedUser };
      this.isEditing = true;
    } 
    else {
      this.resetForm();
    }
  }

  saveUser(): void {
    if (this.isEditing) {
      this.userService.updateUser(this.user).subscribe(() => {
        console.log('Utilisateur mis à jour');
        this.formSubmit.emit();
        this.resetForm();
      });
    } else {
      this.userService.addUser(this.user).subscribe(() => {
        console.log('Nouvel utilisateur ajouté');
        this.formSubmit.emit();
        this.resetForm();
      });
    }
  }

  resetForm(): void {
    this.user = { id: null, name: '', email: '' };
    this.isEditing = false;
  }
}