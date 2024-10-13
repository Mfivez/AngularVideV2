import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) {}

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${user.id}`, user);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = ''

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erreur : ${error.error.message}`;// Erreur côté client/réseau
    } 
    else {
      errorMessage = `Code : ${error.status}, Message : ${error.message}`;// Erreur côté serveur
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));  // Relancer l'erreur
  }

  getUsersWithOptions(): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer token_123',
        'Content-Type': 'application/json' }),
      params: new HttpParams()
      .set('userId', '1')
      .set('_limit', '5') 
    }
    return this.http.get(this.apiUrl, options);
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
  
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
