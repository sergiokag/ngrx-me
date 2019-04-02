import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ListItem, AppState } from './components/custom-form/custom-form.model';
import { IAppState } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = `This is me`;
  likeList: ListItem[] = [{ id: 0, value: 'Hello world' }];
  hateList: ListItem[] = [];

  constructor(
    private store: Store<IAppState>
  ) {}

  ngOnInit() {
    this.store.pipe<AppState>(
      select('app')
    ).subscribe( state => {
        console.log('dat state', state)
        this.likeList = [ ...state.LikeList];
        this.hateList = [ ...state.HateList];
    })
  }
}
