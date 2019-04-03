import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ListItem, AppState } from './components/custom-form/custom-form.model';
import { IAppState } from './app.model';
import * as fromReducer from './components/custom-form/custom-form.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = `This is me`;
  likeList: ListItem[] = [];
  hateList: ListItem[] = [];

  constructor(
    private store: Store<IAppState>
  ) {}

  ngOnInit() {
    this.store.pipe<AppState>(
      select('app') //select(fromReducer.getLikeList)
    ).subscribe(state => {
      this.hateList = [ ...state.HateList];
      this.likeList = [ ...state.LikeList];
    });
  }
}
