import { Observable } from 'rxjs';

const observable = new Observable(observer => {
  observer.next('Première valeur');
  observer.next('Deuxième valeur');
  observer.next('Troisième valeur');

  observer.complete();
});

const subscription = observable.subscribe({
  next(value) { console.log('Valeur reçue :', value); },
  error(err) { console.error('Erreur :', err); },
  complete() { console.log('Observable terminé.'); }
});