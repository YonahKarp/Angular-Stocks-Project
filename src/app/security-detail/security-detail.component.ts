import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { security } from '../security';
import { CountryService } from '../countries.service';

@Component({
  selector: 'app-security-detail',
  templateUrl: './security-detail.component.html',
  styleUrls: ['./security-detail.component.scss']
})
export class SecurityDetailComponent implements OnInit {
  @Input() modalType: String;
  @Input() security: security;
  @Input() modalHandler: Function;

  @Output() newSecurity:EventEmitter<security> = new EventEmitter();
  @Output() deleteSecurity:EventEmitter<number> = new EventEmitter();

  securityForm: FormGroup;
  countries: string[];

  constructor(private fb: FormBuilder, private countryService: CountryService) { }

  ngOnChanges(){
    this.securityForm = this.fb.group({
      name: [this.security.name, [Validators.required, Validators.minLength(2)]],
      ISIN: [this.security.ISIN, Validators.required],
      country: [this.security.country, Validators.required]
    });
  }

  ngOnInit() {
    this.getCountries();

  }

  getCountries(){
    this.countryService.getCountries()
    .subscribe(countries => this.countries = countries);
  }

  onDelete(){
    this.modalHandler();
    this.deleteSecurity.emit(this.security.id)
  }

  onCancel(){
    this.modalHandler();
  }

  onSubmit({ value, valid }: { value: security, valid: boolean }){
    this.security = {...this.security, ...value};
    this.newSecurity.emit(this.security)

    this.modalHandler();
    
  }

}
