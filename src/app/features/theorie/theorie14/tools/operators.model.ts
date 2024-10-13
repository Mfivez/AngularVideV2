import { Observable } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

const observable = new Observable<number>(observer => {
  for (let i = 1; i <= 10; i++) { observer.next(i); }
  observer.complete();
});

const subscription = observable.pipe( // Opérateurs RxJS
  filter(value => value % 2 === 0), // Filtrer
  map(value => value * value), // Transformer
  take(3) // Limiter

).subscribe({
  next(value) { console.log('Après transformation :', value); },
  complete() { console.log('Observable terminé.'); }
});