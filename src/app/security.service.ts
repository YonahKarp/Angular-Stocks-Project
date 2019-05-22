import { Injectable } from '@angular/core';
 
 
import { security } from './security';
import { SECURITIES } from './mock-securities';
 
@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  getSecurities(): security[] {
    return SECURITIES;
  }
}