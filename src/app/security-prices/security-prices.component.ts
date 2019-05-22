import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { price } from '../price';
import { security} from '../security'
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-security-prices',
  templateUrl: './security-prices.component.html',
  styleUrls: ['./security-prices.component.scss']
})
export class SecurityPricesComponent implements OnInit {

  @Input() security: security;
  @Input() modalHandler: Function;

  showAdd:boolean = false;
  priceForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnChanges(){
    this.showAdd = false;
  }

  ngOnInit() {
  }

  onEdit(i){
    this.showAdd = true;
    var price =  this.security.price.splice(i,1)[0];
    this.createForm(price);
  }

  onAdd(){
    this.showAdd = true;
    this.createForm(new price());
  }

  createForm(price:price){
    var dateString = ""
    if(price.date)
      dateString = this.formatDate(price.date)

    this.priceForm = this.fb.group({
      date: [dateString, Validators.required],
      endDayPrice: [price.endDayPrice, Validators.required],
    });
  }

  onRemove(i){
    this.security.price.splice(i,1);
  }

  onSubmit(price){
    var tempDate = new Date(price.value.date);
    tempDate.setDate(tempDate.getDate()+1)
    price.value.date = tempDate;

    if(this.security.price.some(e => e.date.toDateString() == price.value.date.toDateString())){
      alert("Only one price entry is allowed per day. If you want to change the price for a day, please use that day's 'edit' feature")
      return
    }

    this.security.price.push(price.value)

    this.showAdd = false;
  }

  formatDate(date){
    date = [
      date.getFullYear(),
      ('0' + (date.getMonth() + 1)).slice(-2),
      ('0' + date.getDate()).slice(-2)
    ].join('-');

    return date
  }
}
