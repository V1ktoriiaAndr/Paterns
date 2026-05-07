import { from, interval, map, take, connectable } from 'rxjs';

const results = [
    "Динамо 2:1 Інгулець",
    "ЛНЗ 0:0 Буковина",
    "Металіст 3:0 Локомотив Київ",
    "Фенікс-Маріуполь 0:0 Чернігів",
    "Буковина 0:3 Динамо"
]

const cold = from([...results])

cold.subscribe((res) => console.log(`Subscriber 1: ${res}`));
cold.subscribe((res) => console.log(`Subscriber 2: ${res}`));

const source$ = interval(1000).pipe(
    take(results.length),
    map(i => results[i])
);

const hot$ = connectable(source$);

console.log("Hot Observable:");

hot$.subscribe(res => console.log(`Subscriber 1: ${res}`));

hot$.connect();

setTimeout(() => {
    hot$.subscribe(res => console.log(`Subscriber 2: ${res}`));
}, 2000);