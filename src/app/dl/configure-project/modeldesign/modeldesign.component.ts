import { Component, OnInit, ViewChild } from '@angular/core';
import { D3NEComponent } from '../../../d3ne/d3ne.component';
import { DropEvent } from 'ng-drag-drop';

@Component({
  selector: 'app-modeldesign',
  templateUrl: './modeldesign.component.html',
  styleUrls: ['./modeldesign.component.css']
})
export class ModeldesignComponent implements OnInit {
  @ViewChild(D3NEComponent)
  private d3neComponent: D3NEComponent;
  hideDropLayer = true;
  public LAYER_TYPES = {
    INPUT: 1,
    OUTPUT: 2
  };
  constructor() { }

  ngOnInit() {
  }

  onItemDrop(e: DropEvent) {

    // Get the dropped data here
    switch (e.dragData) {
      case this.LAYER_TYPES.INPUT:
        this.d3neComponent.addInputOnlyNode(e.nativeEvent.clientX, e.nativeEvent.clientY);
        break;
      case this.LAYER_TYPES.OUTPUT:
        this.d3neComponent.addOutputOnlyNode(e.nativeEvent.clientX, e.nativeEvent.clientY);
        break;
      default:
        this.d3neComponent.addInputOutputNode(e.nativeEvent.clientX, e.nativeEvent.clientY);
        break;
    }
  }

  dragStart($event: any) {
    this.hideDropLayer = false;
  }

  dragEnd($event: any) {
    this.hideDropLayer = true;
  }

}
