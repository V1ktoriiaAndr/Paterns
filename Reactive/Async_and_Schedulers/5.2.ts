import {concatMap, from, map, mergeMap, pipe, tap, timer} from "rxjs";

interface ServiceCall { serviceName: string; delayMs: number; }
const services: ServiceCall[] = [
    { serviceName: 'UserService', delayMs: 800 },
    { serviceName: 'OrderService', delayMs: 1200 },
    { serviceName: 'RecommendationService', delayMs: 600 }
];

const startA = Date.now();

from(services).pipe(
    concatMap(s => timer(s.delayMs).pipe(
        map(() => s),
        tap(res => console.log(`(+) ${res.serviceName} відповів за ${res.delayMs} мс`))
    ))
).subscribe({
    complete: () => console.log(`Загальний час (послідовно): ~${Date.now() - startA} мс\n`)
});

const startB = Date.now();

from(services).pipe(
    mergeMap(s => timer(s.delayMs).pipe(
        map(() => s),
        tap(res => console.log(`(+) ${res.serviceName} відповів за ${res.delayMs} мс`))
    ))
).subscribe({
    complete: () => console.log(`Загальний час (паралельно): ~${Date.now() - startB} мс`)
});