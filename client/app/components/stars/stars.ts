import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'stars',
  styles: [ `.starrating { color: #d17581; }`],
  templateUrl: 'stars.html'
})

export class StarsComponent implements OnInit {
  @Input() count: number = 5;
  @Input() rating: number = 0;
  stars: boolean[] = [];

  ngOnInit() {
    for(let i = 1; i <= this.count; i++) {
      this.stars.push(i > this.rating);
    }
  }
}
