import {
  Component, AfterViewInit,
  OnChanges, ViewChild,
  ElementRef, Input, ViewEncapsulation
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

  @ViewChild('d3neEditor') el: ElementRef;
  editor = null;

  @ViewChild('nodeclose') elClose: ElementRef;

  numSocket = null;
  ngAfterViewInit() {
    const self = this;
    const inoutNode = new D3NE.Component('Number', {
      builder(node) {
        this.numSocket = new D3NE.Socket('number', 'Number value', 'hint');
        const _out = new D3NE.Output('', self.numSocket);
        const _in = new D3NE.Input('', self.numSocket);
        const numControl = new InputControl(() => self.editor);

        return node.addInput(_in).addOutput(_out);
      },
      worker(node, inputs, outputs) {
        outputs[0] = node.data.num;
      }
    });
    this.numSocket = new D3NE.Socket('number', 'Number value', 'hint');
    const outNode = new D3NE.Component('Number', {
      builder(node) {
        const in1 = new D3NE.Input('', self.numSocket);
        return node.addInput(in1);
      },
      worker(node, inputs, outputs) {
        outputs[0] = node.data.num;
      }
    });

    const inNode = new D3NE.Component('Number', {
      builder(node) {
        const out = new D3NE.Output('', self.numSocket);
        return node.addOutput(out);
      },
      worker(node, inputs, outputs) {
        outputs[0] = node.data.num;
      }
    });

    const componentAdd = new D3NE.Component('Add', {
      builder(node) {
        const inp1 = new D3NE.Input('', self.numSocket);
        const inp2 = new D3NE.Input('', self.numSocket);
        const out = new D3NE.Output('', self.numSocket);
        return node
          .addInput(inp1)
          .addInput(inp2)
          // .addControl(numControl)
          .addOutput(out);
      },
      worker(node, inputs, outputs) {
        const sum = inputs[0][0] + inputs[1][0];
        const numControl: NumberControl = self.editor.nodes.find(n => n.id === node.id).controls[0];
        numControl.setValue(sum);
        outputs[0] = sum;
      }
    });

    const menu = new D3NE.ContextMenu({
      Values: {
        Value: inoutNode,
        Action: function () {
          alert('ok');
        }
      },
      Add: componentAdd
    });

    const container = this.el.nativeElement;

    const components = [inoutNode, componentAdd];
    this.editor = new D3NE.NodeEditor('demo@0.1.0', container, components, menu);

    const nn = inoutNode.newNode();
    nn.data.num = 2;
    const n1 = inNode.builder(nn);
    const n2 = inNode.builder(inoutNode.newNode());
    const add = componentAdd.builder(componentAdd.newNode());

    n1.position = [80, 200];
    n2.position = [80, 400];
    add.position = [500, 240];


    // this.editor.connect(n1.outputs[0], add.inputs[0]);
    // this.editor.connect(n2.outputs[0], add.inputs[1]);

    // this.editor.addNode(n1);
    // this.editor.addNode(n2);
    // this.editor.addNode(add);
    //  this.editor.selectN ode(tnode);

    const engine = new D3NE.Engine('demo@0.1.0', components);

    this.editor.eventListener.on('change', async () => {
      await engine.abort();
      await engine.process(this.editor.toJSON());
    });

    this.editor.view.zoomAt(this.editor.nodes);
    this.editor.eventListener.trigger('change');
    this.editor.view.resize();

  }

  addInputOnlyNode(x: number, y: number) {
    // tslint:disable-next-line:prefer-const
    let self = this;
    const inNode = new D3NE.Component('Number', {
      builder(node) {
        const out = new D3NE.Output('', self.numSocket);
        return node.addOutput(out);
      },
      worker(node, inputs, outputs) {
        outputs[0] = node.data.num;
      }
    });
    const nn = inNode.newNode();
    nn.data.num = 2;
    const n1 = inNode.builder(nn);
    n1.position = [x - 500, y];
    this.editor.addNode(n1);
  }

  addOutputOnlyNode(x: number, y: number) {
    // tslint:disable-next-line:prefer-const
    let self = this;
    const outNode = new D3NE.Component('Number', {
      builder(node) {
        const in1 = new D3NE.Input('', self.numSocket);
        return node.addInput(in1);
      },
      worker(node, inputs, outputs) {
        outputs[0] = node.data.num;
      }
    });
    const nn = outNode.newNode();
    nn.data.num = 2;
    const n1 = outNode.builder(nn);
    n1.position = [x - 500, y];
    this.editor.addNode(nn);
  }

  addInputOutputNode(x: number, y: number) {
    // tslint:disable-next-line:prefer-const
    let self = this;
    const inoutNode = new D3NE.Component('Number', {
      builder(node) {
        const in1 = new D3NE.Input('', self.numSocket);
        const out1 = new D3NE.Output('', self.numSocket);
        return node.addInput(in1).addOutput(out1);
      },
      worker(node, inputs, outputs) {
        outputs[0] = node.data.num;
      }
    });
    const nn = inoutNode.newNode();
    nn.data.num = 2;
    const n1 = inoutNode.builder(nn);
    n1.position = [x - 500, y];
    this.editor.addNode(nn);
  }
}
