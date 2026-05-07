import {from, pipe, toArray, filter, map, tap} from 'rxjs';

const cities: string[] = [
    "Київ","Харків","Одеса","Дніпро","Запоріжжя",
    "Кривий Ріг","Миколаїв","Херсон","Кропивницький",
    "Черкаси","Суми","Хмельницький","Чернівці","Каховка"
];
let result1 = []
for (const city of cities) {
    if (city.startsWith('К')){
        result1.push(city.toUpperCase());
    }
}
console.log(`Імперативний: ${result1.sort()}`);

let result2
result2 = cities.filter(city => city.startsWith('К')).map(city => city.toUpperCase()).sort();
console.log(`Функціональний: ${result2.sort()}`);

let result3
result3 = from(cities).pipe(
    filter(city => city.startsWith('К')),
    map(city => city.toUpperCase()),
    toArray(),
    tap(arr => arr.sort((a,b) => a.localeCompare(b, 'uk'))),
    tap(sorted => sorted.forEach(city => console.log(city)))
).subscribe()
