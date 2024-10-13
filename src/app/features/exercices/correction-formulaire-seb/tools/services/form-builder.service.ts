import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormField, FormGroupParams } from '../models/form-field.model';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  
constructor(private fb: FormBuilder) {}

createForm(fields: FormGroupParams[]): FormGroup {
    const formGroup = this.fb.group({});
    
    fields.forEach(field => {
      if (field.paramValidators && field.paramValidators.length) {
        formGroup.addControl(field.paramName, this.fb.control('', field.paramValidators));
      } else {
        if (field.paramName === 'rdvDates') {
          formGroup.addControl(field.paramName, this.fb.array([]));
        } else {
          formGroup.addControl(field.paramName, this.fb.control(''));
        }
      }
    });
    return formGroup;
  }

  addRdvDate(formGroup: FormGroup): void {
    const rdvDates = formGroup.get('rdvDates') as FormArray;
    rdvDates.push(this.fb.group({
      date: ['', [this.dateAfterOneWeekValidator()]]
    }));
  }

  dateAfterOneWeekValidator(): ValidatorFn {
    return (control) => {
      const dateValue = new Date(control.value);
      const today = new Date();
      const nextWeek = new Date(today);
      nextWeek.setDate(today.getDate() + 7);

      if (isNaN(dateValue.getTime())) {
        return null;
      }
      
      return dateValue < nextWeek ? { 'dateInvalid': true } : null;
    };
  }

  getFormFields(): FormField[] {
    return [
      { inputType: {type: "input"}, label: 'Prénom :', controlName: 'firstname', type: 'text', validatorMessage: '⚠️ Requis', validators: [Validators.required] },
      { inputType: {type: "input"}, label: 'Nom :', controlName: 'lastname', type: 'text', validatorMessage: '⚠️ Requis', validators: [Validators.required] },
      { inputType: {type: "input"}, label: 'Email :', controlName: 'email', type: 'email', validatorMessage: '⚠️ Utilisez un email valide', validators: [Validators.required, Validators.email] },
      { inputType: {type: "textarea"}, label: 'Description :', controlName: 'description', type: 'text', validatorMessage: '⚠️ Requis', validators: [Validators.required] },
      { inputType: {type: "checkbox"}, label: 'Demander RDV à domicile', controlName: 'isHomeVisit', type: 'checkbox', validatorMessage: '', validators: [] },
      { inputType: {type: "input"}, label: 'Adresse :', controlName: 'address', type: 'text', validatorMessage: '⚠️ Requis pour RDV à domicile', isVisible: false, validators: [] },
      { inputType: {type: "input"}, label: 'Dates de RDV :', controlName: 'rdvDates', type: 'date', validatorMessage: '', validators: [], isArray: true }
    ];
  }

  getFormFields2(fields: FormField[]): FormField[] {
    return fields
  }
}