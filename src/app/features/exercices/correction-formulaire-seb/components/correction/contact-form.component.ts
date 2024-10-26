import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilderService } from '../../tools/services/form-builder.service';
import { FormField } from '../../tools/models/form-field.model';

@Component({
  selector: 'correction-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class CorrectionContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  formFields: FormField[] = [];

  constructor(private formService: FormBuilderService) {}

  ngOnInit(): void {
    this.formFields = this.formService.getFormFields()
    this.contactForm = this.formService.createForm(
      this.formFields.map(field => ({
        paramName: field.controlName,
        paramValidators: field.validators || []
      }))
    );

    this.updateAddressVisibility();
  }

  public updateAddressVisibility(): void {
    const isHomeVisit = this.contactForm.get('isHomeVisit')?.value;
    const addressControl = this.contactForm.get('address');

    if (isHomeVisit) {
      addressControl?.setValidators([Validators.required]);
    } else {
      addressControl?.clearValidators();
    }
    addressControl?.updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Formulaire soumis avec succès !');
    } else {
      alert('Le formulaire est invalide.');
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  isAddressVisible(): boolean {
    return this.contactForm.get('isHomeVisit')?.value;
  }

  addRdvDate(): void {
    this.formService.addRdvDate(this.contactForm);
  }

  isDateInvalid(index: number): boolean {
    const rdvDates = this.contactForm.get('rdvDates') as FormArray;
    const control = rdvDates.at(index);
    return control.invalid && (control.dirty || control.touched);
  }

  get rdvDates(): FormArray {
    return this.contactForm.get('rdvDates') as FormArray;
  }

  
}