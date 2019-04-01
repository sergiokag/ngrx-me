import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FormState } from './custom-form.model';
import * as FormActions from './custom-form.action';

@Component({
  selector: 'app-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit, OnDestroy {

  categories: string[] = [
    'Like',
    'Dislike'
  ];

  sub: Subscription;

  form: FormGroup = this.fb.group({
    CategoryList: [ null, [ Validators.required ] ],
    TitleInput: [ null, [ Validators.required ]]
  });

  formObj: FormState;

  constructor(
    private fb: FormBuilder,
    private store: Store<FormState>
  ) {}

  ngOnInit() {
    this.sub = this.store.pipe<FormState>(
                  select('form') // from formState in the index reducer
               ).subscribe(state => {
                  this.formObj = { ...state };
               });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit(): void {
    // dispatching action to form reducer
    this.store.dispatch( new FormActions.SubmitForm({
      Category: this.form.get('CategoryList').value,
      Title: this.form.get('TitleInput').value
     }) );
  }

}