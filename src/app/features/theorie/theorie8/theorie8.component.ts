import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NavigateService } from '../shared/services/navigate.service';

@Component({
  selector: 'app-theorie8',
  templateUrl: './theorie8.component.html',
  styleUrl: './theorie8.component.scss'
})
export class Theorie8Component implements OnChanges, OnInit, DoCheck, 
                                          AfterContentInit, AfterContentChecked, 
                                          AfterViewInit, AfterViewChecked, OnDestroy{

  constructor(public readonly nav: NavigateService) {}


                                              
  ngOnChangesUrl: String = "assets/lifeCycles/ngOnChanges.png"
  ngOnInitUrl: String = "assets/lifeCycles/ngOnInit.png"
  ngdoCheckUrl: String = "assets/lifeCycles/ngDoCheck.png"
  ngAfterContentInitUrl: String = "assets/lifeCycles/ngAfterContentInit.png"
  ngAfterContentCheckedUrl: String = "assets/lifeCycles/ngAfterContentChecked.png"
  ngAfterViewInitUrl: String = "assets/lifeCycles/ngAfterViewInit.png"
  ngAfterViewCheckedUrl: String = "assets/lifeCycles/ngAfterViewChecked.png"
  ngOnDestroyUrl: String = "assets/lifeCycles/ngOnDestroy.png"

  ngOnInit() {
  console.log('ngOnInit - Initialisation du composant');
  }

  ngOnChanges(changes: SimpleChanges) {
  console.log('ngOnChanges - propriété modifiée', changes);
  }

  ngDoCheck() {
  console.log('ngDoCheck - Détection manuelle des changements');
  }

  ngAfterContentInit() {
  console.log('ngAfterContentInit - Contenu projeté initialisé');
  }

  ngAfterContentChecked() {
  console.log('ngAfterContentChecked - Contenu projeté vérifié');
  }

  ngAfterViewInit() {
  console.log('ngAfterViewInit - Vues initialisées');
  }

  ngAfterViewChecked() {
  console.log('ngAfterViewChecked - Vues vérifiées');
  }

  ngOnDestroy() {
  console.log('ngOnDestroy - Composant détruit');
  }

}
