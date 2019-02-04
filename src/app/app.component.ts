import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'autocomplete-demo';
  demoList = ['raviraj', 'sumit', 'prathviraj', 'rushikesh'];
  labelName = 'Name';
  value: String;

  setValue(event) {
    this.value = event;
  }
}
