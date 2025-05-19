import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credit, PersonalCredit, MortgageCredit, BusinessCredit } from '../models/credit.model';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  private apiUrl = 'http://localhost:8085/api/credits';

  constructor(private http: HttpClient) { }

  getAllCredits(): Observable<Credit[]> {
    return this.http.get<Credit[]>(this.apiUrl);
  }

  getCreditById(id: string): Observable<Credit> {
    return this.http.get<Credit>(`${this.apiUrl}/${id}`);
  }

  getCreditsByCustomerId(customerId: number): Observable<Credit[]> {
    return this.http.get<Credit[]>(`${this.apiUrl}/customer/${customerId}`);
  }

  createPersonalCredit(credit: PersonalCredit): Observable<PersonalCredit> {
    return this.http.post<PersonalCredit>(`${this.apiUrl}/personal`, credit);
  }

  createMortgageCredit(credit: MortgageCredit): Observable<MortgageCredit> {
    return this.http.post<MortgageCredit>(`${this.apiUrl}/mortgage`, credit);
  }

  createBusinessCredit(credit: BusinessCredit): Observable<BusinessCredit> {
    return this.http.post<BusinessCredit>(`${this.apiUrl}/business`, credit);
  }

  updateCredit(id: string, credit: Credit): Observable<Credit> {
    return this.http.put<Credit>(`${this.apiUrl}/${id}`, credit);
  }

  deleteCredit(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
} 