import { Component, OnInit, ViewChild } from '@angular/core';
import { D3NEComponent } from '../../../d3ne/d3ne.component';
import { DropEvent } from 'ng-drag-drop';
import { MatSliderChange } from '@angular/material';
@Component({
  selector: 'app-modeldesign',
  templateUrl: './modeldesign.component.html',
  styleUrls: ['./modeldesign.component.css']
})
export class ModeldesignComponent implements OnInit {
  @ViewChild(D3NEComponent)
  private d3neComponent: D3NEComponent;
  hideDropLayer = true;
  zoomLevel = 1;
  public LAYER_TYPES = {
    INPUT: 1,
    OUTPUT: 2,
    ACTIVATION: 3,
    ACTIVATION_REGULARIZATION: 4,
    CONVOLUTIONAL_1D: 5,
    CONVOLUTIONAL_2D: 6,
    AVGPOLLING_1D: 7,
    AVGPOLLING_2D: 8
  };
  constructor() { }

  ngOnInit() {

  }

  onItemDrop(e: DropEvent) {
    // Get the dropped data here
    switch (e.dragData) {
      case this.LAYER_TYPES.INPUT:
        this.d3neComponent.addInputOnlyNode('Input', e.nativeEvent.clientX, e.nativeEvent.clientY);
        break;
      case this.LAYER_TYPES.OUTPUT:
        this.d3neComponent.addOutputOnlyNode('Output', e.nativeEvent.clientX, e.nativeEvent.clientY);
        break;
      case this.LAYER_TYPES.ACTIVATION:
        this.d3neComponent.addInputOutputNode('Activation', e.nativeEvent.clientX, e.nativeEvent.clientY);
        break;
      case this.LAYER_TYPES.ACTIVATION_REGULARIZATION:
        this.d3neComponent.addInputOutputNode('Act Reg', e.nativeEvent.clientX, e.nativeEvent.clientY);
        break;
      case this.LAYER_TYPES.AVGPOLLING_1D:
        this.d3neComponent.addInputOutputNode('AvgPolling 1D', e.nativeEvent.clientX, e.nativeEvent.clientY);
        break;
      case this.LAYER_TYPES.AVGPOLLING_2D:
        this.d3neComponent.addInputOutputNode('AvgPolling 2D', e.nativeEvent.clientX, e.nativeEvent.clientY);
        break;
      case this.LAYER_TYPES.CONVOLUTIONAL_1D:
        this.d3neComponent.addInputOutputNode('Conv 1D', e.nativeEvent.clientX, e.nativeEvent.clientY);
        break;
      case this.LAYER_TYPES.CONVOLUTIONAL_2D:
        this.d3neComponent.addInputOutputNode('Conv 2D', e.nativeEvent.clientX, e.nativeEvent.clientY);
        break;
    }
  }

  onZoomChange(e: MatSliderChange) {
    this.d3neComponent.zoomAt(e.value);
  }

  dragStart($event: any) {
    this.hideDropLayer = false;
  }

  dragEnd($event: any) {
    this.hideDropLayer = true;
  }

  decreaseZoom() {
    if (this.zoomLevel > 0) {
      this.zoomLevel -= 0.10;
      this.d3neComponent.zoomAt(this.zoomLevel);
    }
  }

  increaseZoom() {
    if (this.zoomLevel < 1) {
      this.zoomLevel += 0.10;
      this.d3neComponent.zoomAt(this.zoomLevel);
    }
  }
}
