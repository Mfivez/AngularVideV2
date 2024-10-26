import { Component, OnInit } from '@angular/core';
import { PokeApiService } from './tools/poke-api.service';

@Component({
  selector: 'correction-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class CorrectionPokemonComponent implements OnInit {
  pokemon: any;
  error: string | null = null;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.getPokemon('pikachu');
  }

  getPokemon(name: string): void {
    this.pokeApiService.getPokemon(name).subscribe({
      next: (data) => {
        this.pokemon = data;
        this.error = null;
      },
      error: (err) => {
        this.error = 'Erreur lors de la récupération des données du Pokémon.';
        console.error(err);
      }
    });
  }
}