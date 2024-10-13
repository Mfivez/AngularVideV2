import { Observable } from 'rxjs';

const observable = new Observable(observer => {
  observer.next(1)
  observer.next(2)

  if (Math.random() > 0.5) { observer.error('Une erreur s\'est produite !') }
  
  observer.next(3)
  observer.complete()
});


const observer = {
  next(value: any) { console.log('Valeur reçue :', value); },
  error(err: any) { console.error('Erreur reçue :', err); },
  complete() { console.log('Observable terminé.'); }
};

observable.subscribe(observer);