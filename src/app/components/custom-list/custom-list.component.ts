import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/app.model';
import * as AppActions from './../custom-form/custom-form.action'
import { ListItem } from '../custom-form/custom-form.model';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss']
})
export class CustomListComponent implements OnInit {

  @Input() customTitle: string = '';
  @Input() customList: string[] = [];

  constructor(
    private store: Store<IAppState>
  ) {}

  ngOnInit() {
    //console.log(this); // it creates an object that corresponds to an DOM element
  }

  removeThisItem(obj: ListItem): void {
    this.store.dispatch(new AppActions.RemoveFromList({ ...obj }));
  }

}
