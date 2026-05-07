import {concatMap, delay, from, mergeMap, Observable, tap} from "rxjs";

interface FoodOrder { orderId: string; items: string[]; }
const orders: FoodOrder[] = [
    { orderId: 'ZAM-01', items: ['Піца Маргарита', 'Кола 0.5л'] },
    { orderId: 'ZAM-02', items: ['Борщ', 'Вареники', 'Компот'] },
    { orderId: 'ZAM-03', items: ['Суші-сет 20шт', 'Місо-суп'] }
];

const result1 = from([...orders]).pipe(
    mergeMap(order => from(order.items))).subscribe(i => console.log(`>> ${i}`));

const result2 = from(orders).pipe(
    concatMap(order =>
        from(order.items).pipe(
            delay(500),
        )
    )
).subscribe(i => console.log(`>>>${i}`));