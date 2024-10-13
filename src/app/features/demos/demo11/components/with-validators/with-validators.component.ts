import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from '../../tools/services/forms.service';
import { FormField } from '../../tools/models/form-field.models';

@Component({
  selector: 'app-with-validators',
  templateUrl: './with-validators.component.html',
  styleUrl: './with-validators.component.scss'
})
export class WithValidatorsComponent {

  formFields: FormField[] = [
    { inputType: {type: "input"}, label: 'Name :', controlName: 'name', type: 'text', validatorMessage: '⚠️ Requiert entre 3 et 20 caractères' },
    { inputType: {type: "input"}, label: 'Email :', controlName: 'email', type: 'email', validatorMessage: '⚠️ Utilisez le format email !' },
    { inputType: {type: "input"}, label: 'Password :', controlName: 'password', type: 'password', validatorMessage: '⚠️ Requiert entre 6 et 15 caractères' },
    { inputType: {type: "selector", params: ["Male", "Female", "Other"]}, label: 'Gender :', controlName: 'gender', type: 'text', validatorMessage: '⚠️ Requis' },
    { inputType: {type: "selector", params: ["Télévision", "Futurama", "Epopée"]}, label: 'Mots au pif :', controlName: 'motAuPif', type: 'text', validatorMessage: '⚠️ Requis' },
  ];

  myForm!: FormGroup;

  constructor (private formService: FormsService) { }

  ngOnInit (): void {
    this.myForm = this.formService.createForm([
      {paramName: 'name', paramValidators: [Validators.required, Validators.minLength(3), Validators.maxLength(20)]},
      { paramName: 'email', paramValidators: [Validators.required, Validators.email] },
      { paramName: 'password', paramValidators: [Validators.required, Validators.minLength(6), Validators.maxLength(15)] },
      { paramName: 'gender', paramValidators: [Validators.required] },
      { paramName: 'motAuPif', paramValidators: [Validators.required]}
    ])
  }

  sendFG (): void {
    console.log(this.myForm.valid);
    console.log(this.myForm.controls['name'].valid);
    console.log(this.myForm.controls['name'].value);
    console.log(this.myForm.controls['email'].value);
    console.log(this.myForm.controls['password'].value);
    console.log(this.myForm.controls['gender'].value);
  }
}
