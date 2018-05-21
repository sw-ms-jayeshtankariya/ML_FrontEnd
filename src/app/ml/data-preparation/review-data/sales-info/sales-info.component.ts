import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTabChangeEvent } from '@angular/material';
import { Title } from '@angular/platform-browser';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-sales-info',
  templateUrl: './sales-info.component.html',
  styleUrls: ['./sales-info.component.css']
})
export class SalesInfoComponent {

  ctx: any;
  canvas: any;

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  constructor(
    public dialogRef: MatDialogRef<SalesInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private titleService: Title) {
    this.setTitle('Sales Info');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onTabChange(event: MatTabChangeEvent) {
    this.canvas = document.getElementById('myChart');
    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d');
      const myChart = new Chart(document.getElementById('myChart'), {
        type: 'line',
        data: {
          labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
          datasets: [{
            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            label: 'Africa',
            borderColor: '#3e95cd',
            fill: true
          }, {
            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
            label: 'Asia',
            borderColor: '#8e5ea2',
            fill: true
          }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'World population per region (in millions)'
          }
        }
      });
    }
  }

}
