import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from "@angular/core";


@Component({
  selector: 'app-life-cycles',
  templateUrl: './life-cycles.component.html',
  styleUrl: './life-cycles.component.scss'
})
export class LifeCyclesComponent{

  @Input() maVariable: string = "";
  
  // Utilisation de @ViewChild pour obtenir une référence à l'élément du DOM
  @ViewChild('ref') el!: ElementRef<HTMLButtonElement>;

  constructor() {
    console.log('Constructor');
    console.log('maVariable :>> ', this.maVariable); // La variable est encore undefined ici
  }

  // Appelé lorsque les valeurs de @Input changent
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges : ', changes);
  }

  // Appelé une seule fois lorsque le composant est initialisé
  ngOnInit(): void {
    console.log('OnInit');
    console.log('maVariable :>> ', this.maVariable);
    // À ce stade, this.el est toujours undefined, car le template n'est pas encore chargé
  }

  // Vérifications supplémentaires, rarement utilisées
  ngDoCheck(): void {
    console.log('DoCheck');
  }

  // Appelé après que le contenu a été initialisé
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

  // Vérifications supplémentaires du contenu
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }

  // Appelé après que la vue (template) a été initialisée
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    console.log('this.el :>> ', this.el); // Ici, this.el sera disponible
  }

  // Vérifications supplémentaires après que la vue a été vérifiée
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }

  // Nettoyage avant la destruction du composant
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
}