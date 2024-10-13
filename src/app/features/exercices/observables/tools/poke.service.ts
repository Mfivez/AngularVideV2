import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private apiUrl = 'https://pokeapi.co/api/v2';
  
  private selectedPokemonSubject = new BehaviorSubject<any | null>(null);
  selectedPokemon$ = this.selectedPokemonSubject.asObservable();

  
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/pokemon?limit=20`).pipe(
      map( response => response.results)
    )
  }

  getPokemonDetails(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokemon/${name}`)
  }

  selectPokemon(pokemon: any): void {
    this.selectedPokemonSubject.next(pokemon);
  }

}
