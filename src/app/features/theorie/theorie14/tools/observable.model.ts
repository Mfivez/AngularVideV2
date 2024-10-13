import { Observable } from 'rxjs';

const observable = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);

  observer.complete();
});

observable.subscribe({
  next(value) {
    console.log('Valeur reçue :', value);
  },
  complete() {
    console.log('Observable terminé.');
  }
});