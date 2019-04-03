import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from './custom-form.model';
import * as AppActions from './custom-form.action';

@Component({
  selector: 'app-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent {

  categories: string[] = [
    'Like',
    'Dislike'
  ];

  sub: Subscription;

  form: FormGroup = this.fb.group({
    CategoryList: [ null, [ Validators.required ] ],
    TitleInput: [ null, [ Validators.required ]]
  });

  state: AppState;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState> // Normally State from reducer
  ) {}

  onSubmit(): void {
    //dispatching action to form reducer

    const _selectControl = this.form.get('CategoryList');
    const _titleControl = this.form.get('TitleInput');

    if( _selectControl.value === 'Like' ) {
      this.store.dispatch( new AppActions.AddToLikeList({
        id: Date.now() * Math.random(),
        value: _titleControl.value
      }));
    }

    if( _selectControl.value === 'Dislike' ) {
      this.store.dispatch( new AppActions.AddToHateList({
        id: Date.now() * Math.random(),
        value: _titleControl.value
      }));
    }
  }

}