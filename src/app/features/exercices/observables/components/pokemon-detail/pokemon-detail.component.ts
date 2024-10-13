import { Component } from '@angular/core';
import { PokeService } from '../../tools/poke.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {
  selectedPokemon: any | null = null

  constructor(private pokeService: PokeService) {}
  
  ngOnInit(): void {
    this.pokeService.selectedPokemon$.subscribe( (pokemon) => {
      this.selectedPokemon = pokemon
    })
  }

  getPokemonTypes(): string {
    if (!this.selectedPokemon || !this.selectedPokemon.types) {
      return '';
    }
    return this.selectedPokemon.types.map((t: any) => t.type.name).join(', ');
  }
}
