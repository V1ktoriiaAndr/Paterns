import {from, bufferCount, tap, range, asyncScheduler, interval, take} from 'rxjs';
import { throttleTime, map, count } from 'rxjs/operators';

const eventData: string[] = [
    "LOGIN:user1", "CLICK:btn_buy", "VIEW:product_42",
    "LOGIN:user2", "LOGOUT:user1", "CLICK:btn_cart",
    "VIEW:product_7", "LOGIN:user3", "CLICK:btn_pay",
    "LOGOUT:user2", "LOGIN:user4", "VIEW:product_1"
];

let totalSaved = 0;
let batchIndex = 0;

from(eventData).pipe(
    bufferCount(5),
    tap((batch: string[]) => {
        batchIndex++;
        totalSaved += batch.length;
        console.log(`[DB] Batch INSERT #${batchIndex}: [${batch.join(', ')}]`);
    })
).subscribe({
    next: () => {},
    complete: () => console.log(`(+) Збережено подій: ${totalSaved}\n`)
});

const TOTAL_ELEMENTS = 1000;
let processedCount = 0;

interval(1).pipe(
    take(TOTAL_ELEMENTS),
    throttleTime(10, asyncScheduler, { leading: true, trailing: false })
).subscribe({
    next: () => {
        processedCount++;
    },
    complete: () => {
        const droppedCount = TOTAL_ELEMENTS - processedCount;
        console.log(`[ЗВІТ] Оброблено: ~${processedCount}`);
        console.log(`[ЗВІТ] Відкинуто: ~${droppedCount}`);
        console.log(`(!) Стратегія DROP: частину елементів втрачено`);
    }
});