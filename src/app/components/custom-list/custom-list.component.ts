import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss']
})
export class CustomListComponent implements OnInit {

  @Input() customTitle: string = '';
  @Input() customList: string[] = [];

  constructor() {}

  ngOnInit() {
    //console.log(this); // it creates an object that corresponds to an DOM element
  }

  removeThisItem(index): void {
    console.log(`Removing item with index ${index}`);
  }

}
