import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loading = false;

  setLoading(loading: boolean): void {
    this.loading = loading;
  }

  isLoading(): boolean {
    console.log("Chargement en cours")
    return this.loading;
  }
}
