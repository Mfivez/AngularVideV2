import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { FormField } from '../../tools/models/form-field.models';
import { FormsService } from '../../tools/services/forms.service';
import { nameValidator } from '../../tools/validators/name.validators';
import { emailValidator } from '../../tools/validators/email.validators';
import { twoPasswordCheckValidator } from '../../tools/validators/twoPasswordValidate.validators';

@Component({
  selector: 'app-custom-validators',
  templateUrl: './custom-validators.component.html',
  styleUrls: ['./custom-validators.component.scss']
})
export class CustomValidatorsComponent {
  myForm!: FormGroup;

  formFields: FormField[] = [
    { label: 'Name', controlName: 'name', type: 'text', validatorMessage: 'name' },
    { label: 'Email', controlName: 'email', type: 'email', validatorMessage: 'email' },
    { label: 'Password', controlName: 'password', type: 'password', validatorMessage: '' },
    { label: 'Password verify', controlName: 'passwordVerify', type: 'password', validatorMessage: '' }
  ];

  constructor(private formService: FormsService) {}

  ngOnInit(): void {
    this.myForm = this.formService.createForm([
        {paramName: "name", paramValidators: [nameValidator]},
        { paramName: 'email', paramValidators: [emailValidator] },
        { paramName: 'password', paramValidators: [] },
        { paramName: 'passwordVerify', paramValidators: [] }
      ])
    this.myForm.setValidators(twoPasswordCheckValidator)
  }
}