import { Component, OnInit } from '@angular/core';
import { DataInput } from 'src/app/models/dataInput';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  dataInputBill!: DataInput;
  dataInputNumberPeople!: DataInput;

  ngOnInit(): void {
    this.dataInputBill = Object.assign({
      image: '../../../../assets/images/dollar.png',
      label: 'Bill',
    });
    this.dataInputNumberPeople = Object.assign({
      image: '../../../../assets/images/person.png',
      label: 'Number of People',
    });
  }
}
