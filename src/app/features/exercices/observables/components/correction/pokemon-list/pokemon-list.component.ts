import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorrectionPokeService } from '../tools/poke.service';

@Component({
  selector: 'correction-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class CorrectionPokemonListComponent implements OnInit {
  pokemons: any[] = []
  loading: boolean = true

  constructor(private pokeService : CorrectionPokeService, private router: Router) {}

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe( (data) => {
      this.pokemons = data
      this.loading = false
    })
  }

  selectPokemon(pokemon: any): void {
    this.pokeService.getPokemonDetails(pokemon.name).subscribe( (details) => {
      this.pokeService.selectPokemon(details)
      this.router.navigate(['exos/12/pokemon-detail'])
    })
  }
}