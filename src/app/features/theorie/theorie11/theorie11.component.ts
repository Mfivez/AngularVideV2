import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { NavigateService } from '../shared/services/navigate.service';

@Component({
  selector: 'app-theorie11',
  templateUrl: './theorie11.component.html',
  styleUrl: './theorie11.component.scss'
})
export class Theorie11Component {
  
  formBuilderUrl : string = 'assets/formulaires/formBuilder.png'
  formControlUrl : string = 'assets/formulaires/formControl.png'
  formControlValUrl : string = 'assets/formulaires/formControlVal.png'
  formGroupUrl : string = 'assets/formulaires/formGroup.png'
  formArrayUrl : string = 'assets/formulaires/formArray.png'
  validatorUrl : string = 'assets/formulaires/validators.png'
  validationUrl : string = 'assets/formulaires/validation.png'
  getDataUrl : string = 'assets/formulaires/getData.png'
  onSubmitDataUrl : string = 'assets/formulaires/onSubmitData.png'
  customValidatorUrl : string = 'assets/formulaires/customValidator.png'
  formGroup: FormGroup
  formArray: FormArray

  constructor(public readonly nav: NavigateService, private fb: FormBuilder) {
    this.formGroup = this.fb.group( {
      name: this.fb.control('', [Validators.required, this.forbiddenNameValidator(/admin/)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      addresses: this.fb.array( [this.fb.control('')] )
    })

    this.formArray = this.formGroup.get('addresses') as FormArray
  }

  addAddress() {
    this.formArray.push(this.fb.control(''));
  }

  removeAddress(index: number) {
    this.formArray.removeAt(index);
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value)
    } else {
      console.error('Le formulaire est invalide')
    }
    
  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value)
      return forbidden ? {'forbiddenName': {value: control.value}} : null
    }
  }

}
