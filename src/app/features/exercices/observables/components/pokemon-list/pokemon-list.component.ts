import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../tools/poke.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = []
  loading: boolean = true

  constructor(private pokeService : PokeService, private router: Router) {}

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe( (data) => {
      this.pokemons = data
      this.loading = false
    })
  }

  selectPokemon(pokemon: any): void {
    this.pokeService.getPokemonDetails(pokemon.name).subscribe( (details) => {
      this.pokeService.selectPokemon(details)
      this.router.navigate(['exos/11/pokemon-detail'])
    })
  }
}