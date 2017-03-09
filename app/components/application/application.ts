import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'application.html'
})

export class AppComponent {
  name: string;

  constructor() {
    this.name = "Willow";
  }
}
