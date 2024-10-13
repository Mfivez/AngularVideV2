import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-class',
  templateUrl: './router-class.component.html',
  styleUrl: './router-class.component.scss'
})
export class RouterClassComponent {
  id!: number;
  name!: string;

  constructor (private _router: Router, private _activatedRoute: ActivatedRoute) { }


  ngOnInit (): void {
    console.log('this._activatedRoute :>> ', this._activatedRoute);

    // La propriété snapshot représente la route à l'instant T
    if (this._activatedRoute.snapshot.params['id']) {
      this.id = this._activatedRoute.snapshot.params['id'];
    }

    if (this._activatedRoute.snapshot.queryParams) {
      console.log('this._activatedRoute.snapshot.queryParams["name"] :>> ', this._activatedRoute.snapshot.queryParams['name']);
      this.name = this._activatedRoute.snapshot.queryParams['name'];
    }
  }

  navigate (): void {
    this._router.navigate(['/demos/12']);
  }

  navigateWithParam (): void {
    //La démo 12 contient un module routing, regarde-le si tu as du mal à comprendre💡
    this._router.navigate(['/demos/12', 1]); // Le paramètre de route sera traité par :id dans le router
  }

  navigateWithQuery (): void {
    this._router.navigate(['/demos/12/'], { queryParams: { 'name': 'Hongo' } });
  }

}
