import {Observable, throwError, of, catchError} from 'rxjs';

const currencyService = new Observable<string>(subscriber => {
    subscriber.next('USD-> UAH: 41.50');
    subscriber.next('EUR-> UAH: 44.20');
    subscriber.error(new Error('Сервіс тимчасово недоступний'));
    subscriber.next('GBP-> UAH: 52.10');
});

const scenery_A = currencyService.pipe(
    catchError(() => of('Використовується кешований курс: USD → UAH: 41.00'))
);

const scenery_B = currencyService.pipe(
    catchError(() => of('JPY → UAH: 0.27', 'PLN → UAH: 10.30'))
);

scenery_A.subscribe(console.log);
scenery_B.subscribe(console.log);