import { Control } from 'd3-node-editor';


export class NumberControl extends Control {

  el: HTMLInputElement;

  constructor() {
    super(<any>'<input readonly type="number">');
  }

  handler = (el: HTMLInputElement) => {
    this.el = el;
  }

  public setValue(val) {
    this.el.value = val;
  }
}
