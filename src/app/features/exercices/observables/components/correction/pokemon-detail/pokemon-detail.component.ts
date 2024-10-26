import { Component } from '@angular/core';
import { CorrectionPokeService } from '../tools/poke.service';

@Component({
  selector: 'correction-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class CorrectionPokemonDetailComponent {
  selectedPokemon: any | null = null

  constructor(private pokeService: CorrectionPokeService) {}
  
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
