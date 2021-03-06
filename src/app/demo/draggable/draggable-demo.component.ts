import { Component, OnInit } from '@angular/core';
import { DraggableDirective } from '../../exports';

@Component({
  selector: 're-draggable-demo',
  templateUrl: './draggable-demo.component.html'
})
export class DraggableDemoComponent implements OnInit {
  source = new Array(10).fill(0).map((_, index) => index + 1);
  target = [];

  constructor() {
  }

  ngOnInit() {
  }

  onDrop2Right($event) {
    const contextData = $event.dataTransfer.getData(DraggableDirective.DRAGGABLE_DATA_KEY);
    const data = JSON.parse(contextData);
    console.log('drag data to right', data);
    this.source = this.source.filter(item => item !== data.data);
    this.target = [...this.target, data.data];
  }
}
