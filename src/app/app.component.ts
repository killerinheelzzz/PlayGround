
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';



export class ListOfITems {
    name: string;
    id: number;
}

const GROCERYLIST: ListOfITems[] = [
    { id: 1, name: 'Ice Cream' },
    { id: 2, name: 'Bread' },
    { id: 3, name: 'Jam' },
    { id: 4, name: 'Banana' }
  ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() itemToBeViewd = new EventEmitter<any>();
  @Output() clicked = new EventEmitter<boolean>();

    L: any;
    details = true;
    GroceryDetail = 'Grocery Details';

  item = 'List Of Thing From the Grocery';

  listOfItems = GROCERYLIST;
  selectedGroceryItem: ListOfITems;

  selectDetails() {
    this.details = true;
    this.clicked.emit();
  }

  onselect(listOfItems: ListOfITems): void {
    this.selectedGroceryItem = listOfItems;
  }

  ListOutput(listOfItems) {
    return this.itemToBeViewd.emit(listOfItems);
  }
}
