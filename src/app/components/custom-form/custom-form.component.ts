import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent {

  constructor(
    private fb: FormBuilder
  ) {}

  categories: string[] = [
    'Like',
    'Dislike'
  ]

  form: FormGroup = this.fb.group({
    CategoryList: [ null, [ Validators.required ] ],
    TitleInput: [ null, [ Validators.required ]]
  });

}