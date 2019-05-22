import { Component, OnInit } from '@angular/core';
import { security } from '../security';

import { SecurityService } from '../security.service';

@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.scss']
})
export class SecuritiesComponent implements OnInit {

  securities: security[];
  selectedSecurity: security;
  modalClass: string;

  constructor(private securityService: SecurityService) {}

  ngOnInit() {
    this.selectedSecurity = new security();
    this.getSecurities();

  }

  updateSecurities(newSecuritiy){
    for(var i = 0; i < this.securities.length; i++){
      if(this.securities[i].id == newSecuritiy.id){
        this.securities[i] = newSecuritiy
        return;
      }
    }

    this.securities.push(newSecuritiy);
  }

  getSecurities(){
    this.securities = this.securityService.getSecurities()
  }

  deleteSecurity(id){
    this.securities = this.securities.filter(e => e.id != id)
  }

  openPriceModal(security){
    this.selectedSecurity = security
    this.modalClass = "showPrice";
  }

  openEditModal(security){
    this.selectedSecurity = security
    this.modalClass = "showEdit";
  }

  openAddModal(){
    this.selectedSecurity = new security();
    this.modalClass = "showAdd";
  }

  closeModal = function(){
    this.modalClass = "";
  }.bind(this)

}
