import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as cryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root',
})
export class ValidateAndPunchService {
  constructor(private http: HttpClient) {}

  validateEmployee(employeeId: string) {
    return this.http.post(`${environment.API_BASE_URL}validate`, {
      id: this.encryptData(employeeId, environment.SECRET_KEY),
    });
  }
  punchEmployee(nfcCardId: string) {
    return this.http.post(`${environment.API_BASE_URL}punch`, {
      id: this.encryptData(nfcCardId, environment.SECRET_KEY),
    });
  }
  encryptData(plainText, secretKey) {
    return cryptoJS.AES.encrypt(plainText, secretKey).toString();
  }
}