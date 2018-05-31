import {
  Component, AfterViewInit,
  OnChanges, ViewChild,
  ElementRef, Input, ViewEncapsulation, Output, EventEmitter
} from '@angular/core';

import * as D3NE from 'd3-node-editor';
import { NumberControl } from './number-control';
import { InputControl } from './input-control';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'd3ne',
  template: '<div class="flow-editor"><div #d3neEditor class="node-editor"></div></div>',
  styleUrls: ['../../../node_modules/d3-node-editor/build/d3-node-editor.css', './d3ne.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class D3NEComponent implements AfterViewInit {

  @Output()
  newNodeAdded: EventEmitter<D3NE.Node> = new EventEmitter<D3NE.Node>();

  @ViewChild('d3neEditor') el: ElementRef;
  editor = null;

  @ViewChild('nodeclose') elClose: ElementRef;

  numSocket = null;
  ngAfterViewInit() {
    const self = this;
    // const inoutNode = new D3NE.Component('Number', {
    //   builder(node) {
    //     this.numSocket = new D3NE.Socket('number', 'Number value', 'hint');
    //     const _out = new D3NE.Output('', self.numSocket);
    //     const _in = new D3NE.Input('', self.numSocket);
    //     const numControl = new InputControl(() => self.editor);

    //     return node.addInput(_in).addOutput(_out);
    //   },
    //   worker(node, inputs, outputs) {
    //     outputs[0] = node.data.num;
    //   }
    // });
    this.numSocket = new D3NE.Socket('number', 'Number value', 'hint');
    // const outNode = new D3NE.Component('Output', {
    //   builder(node) {
    //     const in1 = new D3NE.Input('', self.numSocket);
    //     return node.addInput(in1);
    //   },
    //   worker(node, inputs, outputs) {
    //     outputs[0] = node.data.num;
    //   }
    // });

    // const inNode = new D3NE.Component('Input', {
    //   builder(node) {
    //     const out = new D3NE.Output('', self.numSocket);
    //     return node.addOutput(out);
    //   },
    //   worker(node, inputs, outputs) {
    //     outputs[0] = node.data.num;
    //   }
    // });

    // const componentAdd = new D3NE.Component('Add', {
    //   builder(node) {
    //     const inp1 = new D3NE.Input('', self.numSocket);
    //     const inp2 = new D3NE.Input('', self.numSocket);
    //     const out = new D3NE.Output('', self.numSocket);
    //     return node
    //       .addInput(inp1)
    //       .addInput(inp2)
    //       // .addControl(numControl)
    //       .addOutput(out);
    //   },
    //   worker(node, inputs, outputs) {
    //     const sum = inputs[0][0] + inputs[1][0];
    //     const numControl: NumberControl = self.editor.nodes.find(n => n.id === node.id).controls[0];
    //     numControl.setValue(sum);
    //     outputs[0] = sum;
    //   }
    // });

    const menu = new D3NE.ContextMenu({
    }, false);

    const container = this.el.nativeElement;

    // const components = [inoutNode, componentAdd];
    this.editor = new D3NE.NodeEditor('demo@0.1.0', container, [], menu);

    // const nn = inoutNode.newNode();
    // nn.data.num = 2;
    // const n1 = inNode.builder(nn);
    // const n2 = inNode.builder(inoutNode.newNode());
    // const add = componentAdd.builder(componentAdd.newNode());

    // n1.position = [80, 200];
    // n2.position = [80, 400];
    // add.position = [500, 240];


    // this.editor.connect(n1.outputs[0], add.inputs[0]);
    // this.editor.connect(n2.outputs[0], add.inputs[1]);

    // this.editor.addNode(n1);
    // this.editor.addNode(n2);
    // this.editor.addNode(add);
    //  this.editor.selectN ode(tnode);

    const engine = new D3NE.Engine('demo@0.1.0', []);
    this.editor.eventListener.on('nodeselect', (node, persistent) => {
      self.newNodeAdded.emit(node);
    });
    this.editor.eventListener.on('change', async () => {
      await engine.abort();
      await engine.process(this.editor.toJSON());
    });

    this.editor.view.connectionProducer = (x1, y1, x2, y2) => {
      return {
        points: [[x1, y1 + 60], [x2, y2 + 60]]
      };
    };
    this.editor.view.scale(0.7);
    // this.editor.view.zoomAt(this.editor.nodes);
    this.editor.eventListener.trigger('change');
    this.editor.view.resize();

  }

  addInputOnlyNode(title: string, x: number, y: number) {
    // tslint:disable-next-line:prefer-const
    let self = this;
    let existComp = this.editor.components.find(function (c) {
      return c.name === title;
    });

    if (!existComp) {
      existComp = new D3NE.Component(title, {
        builder(node) {
          const out = new D3NE.Output('', self.numSocket);
          return node.addOutput(out);
        },
        worker(node, inputs, outputs) {
          outputs[0] = node.data.num;
          console.log('test');
        }
      });
      this.editor.components.push(existComp);
    }
    const nn = existComp.newNode();
    nn.data.num = 2;
    const n1 = existComp.builder(nn);
    n1.position = [x - 500, y];
    this.editor.addNode(n1);
    this.editor.view.resize();
  }

  addOutputOnlyNode(title: string, x: number, y: number) {
    // tslint:disable-next-line:prefer-const
    let self = this;
    let existComp = this.editor.components.find(function (c) {
      return c.name === title;
    });
    if (!existComp) {
      existComp = new D3NE.Component(title, {
        builder(node) {
          const in1 = new D3NE.Input('', self.numSocket);
          return node.addInput(in1);
        },
        worker(node, inputs, outputs) {
          outputs[0] = node.data.num;
        }
      });
      this.editor.components.push(existComp);
    }

    const nn = existComp.newNode();
    nn.data.num = 2;
    const n1 = existComp.builder(nn);
    n1.position = [x - 500, y];
    this.editor.addNode(nn);
    this.editor.view.resize();
  }

  addInputOutputNode(title: string, x: number, y: number) {
    // tslint:disable-next-line:prefer-const
    let self = this;
    let existComp = this.editor.components.find(function (c) {
      return c.name === title;
    });
    if (!existComp) {
      existComp = new D3NE.Component(title, {
        builder(node) {
          const in1 = new D3NE.Input('', self.numSocket);
          const out1 = new D3NE.Output('', self.numSocket);
          return node.addInput(in1).addOutput(out1);
        },
        worker(node, inputs, outputs) {
          outputs[0] = node.data.num;
        }
      });
      this.editor.components.push(existComp);
    }
    const nn = existComp.newNode();
    nn.data.num = 2;
    const n1 = existComp.builder(nn);
    n1.position = [x - 500, y];
    this.editor.addNode(nn);
    this.editor.view.resize();
  }

  zoomAt(level: number) {
    this.editor.view.scale(level);
  }
}
