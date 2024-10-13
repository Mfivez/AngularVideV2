import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormField, FormGroupParams } from '../models/form-field.models';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  
  constructor(private fb: FormBuilder) { }

  createForm(fields: FormGroupParams[]): FormGroup {
    const formGroup = this.fb.group({});

    fields.forEach(field => {
      formGroup.addControl(field.paramName, this.fb.control('', field.paramValidators))
    })

    return formGroup
  }
}
