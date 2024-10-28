import { Component } from '@angular/core';
import { RecyclableFormField } from '../dynamic-component/tools/interfaces/recyclable-forms.models';
import { FormFieldType } from '../dynamic-component/tools/enum/form-field-type';
import { ErrorMessages } from './tools/constantes/error-messages';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {
  formFields: RecyclableFormField[] = [
    { controlName: 'username', 
      label: 'Nom d\'utilisateur', 
      type: FormFieldType.TEXT, 
      placeholder: 'Entrez votre nom', 
      required: true, 
      errorMessage: ErrorMessages.username 
    },

    { controlName: 'password', 
      label: 'Mot de passe', 
      type: FormFieldType.PASSWORD, 
      required: true, 
      errorMessage: ErrorMessages.password 
    },

    { controlName: 'email', 
      label: 'Email', 
      type: FormFieldType.EMAIL, 
      placeholder: 'email@example.com', 
      required: true, 
      errorMessage: ErrorMessages.email 
    },

    { controlName: 'age', 
      label: 'Âge', 
      type: FormFieldType.NUMBER, 
      min: 18, 
      max: 99, 
      errorMessage: ErrorMessages.age 
    },

    { controlName: 'country', 
      label: 'Pays', 
      type: FormFieldType.SELECT, 
      options: ['France', 'USA', 'Canada'], 
      required: true,
      errorMessage: ErrorMessages.pays 
    },

    { controlName: 'description', 
      label: 'Description', 
      type: FormFieldType.TEXTAREA, 
      placeholder: 'Décrivez-vous', 
      required: false 
    },
    
    { controlName: 'terms', 
      label: 'Accepter les conditions', 
      type: FormFieldType.CHECKBOX, 
      required: true, 
      errorMessage: ErrorMessages.conditions 
    },
      
    { controlName: 'genre', 
      label: 'Genre', 
      type: FormFieldType.RADIO,
      options: ["Homme", "Femme", "Autre"],
      errorMessage: ErrorMessages.genre
    },
    {
      controlName: 'hobbies', 
      label: 'Loisirs', 
      type: FormFieldType.TEXT, 
      placeholder: 'Entrez vos loisirs', 
      isArray: true,
      required: false
    },
    {
      controlName: 'test', 
      label: 'Test', 
      type: FormFieldType.TEXT, 
      placeholder: 'Entrez', 
      isArray: true,
      required: false
    }

  ];
}
