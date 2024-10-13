import { ValidatorFn } from "@angular/forms"

export interface FormField {
    inputType?: inputType
    label: string
    controlName: string
    type: string
    validatorMessage: string
}

export interface FormGroupParams {
    paramName: string
    paramValidators: ValidatorFn[]
}

export interface inputType {
    type: string,
    params?: string[]
}
