import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  public login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, {
      email,
      password
    });
  }

  public saveToken(token: string): void {
    sessionStorage.setItem('travlr-token', token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem('travlr-token');
  }

  public logout(): void {
    sessionStorage.removeItem('travlr-token');
  }

  public isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}