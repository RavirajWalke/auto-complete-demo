import {
  Component, EventEmitter, Input, HostListener,
  ElementRef, OnInit, Output
} from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  @Input() inputList: string[];
  @Input() label: string;
  @Input() maxLength: number;
  @Output() itemSelection = new EventEmitter<string>();
  @Input() width: number;

  searchTerm: string;
  items: string[];
  isVisible = false;

  /**
   *
   * @param eRef: ElementRef
   */
  constructor(private eRef: ElementRef) { }

  /**
   *
   */
  ngOnInit() {
    this.items = this.inputList;
  }

  /**
   * This is added to hide selection list when clicked outside of the component
   * @param event : Click event
   */
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isVisible = false;
    }
  }

  /**
   * This method checks if given search term exist in input list
   * @param searchTerm: search input
   * @param inputList: list of items
   * @param maxLength: no of maximum items
   */
  filterItems(searchTerm, inputList, maxLength) {
    const term = searchTerm;
    const list = inputList.filter(function (tag) {
      return !tag.toLowerCase().indexOf(term.toLowerCase());
    });
    list.length > 0 ? this.isVisible = true : this.isVisible = false;
    this.items = list.slice(0, maxLength);
  }

  /**
   *
   * @param item : Item to be set
   */
  setItem(item) {
    this.searchTerm = item;
    this.isVisible = false;
    this.itemSelection.emit(this.searchTerm);
  }

}
