import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from './custom-form.model';
import * as AppActions from './custom-form.action';

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

  state: AppState;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.sub = this.store.pipe<AppState>(
                  select('app') // from appState in the index reducer
               ).subscribe(state => {
                  this.state = { ...state };
               });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit(): void {
    //dispatching action to form reducer

    const _selectControl = this.form.get('CategoryList');
    const _titleControl = this.form.get('TitleInput');

    console.log(_selectControl.value)

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