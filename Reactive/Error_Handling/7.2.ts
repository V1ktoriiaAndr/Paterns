import { Observable, timer, retry } from 'rxjs';

let attemptCount = 0;

const unstableApiCall = new Observable<string>(subscriber => {
    const attempt = ++attemptCount;
    console.log(`[ПОВТОР] Спроба #${attempt}`);

    if (attempt < 4) {
        subscriber.error(new Error('Connection timeout'));
    } else {
        subscriber.next("(+) Відповідь API: {status: 'ok', data: [...]}");
        subscriber.complete();
    }
});

unstableApiCall.pipe(
    retry({
        count: 3,
        delay: (error, retryCount) => {
            const delayTime = Math.pow(2, retryCount - 1);
            console.log(`Очікуємо ${delayTime} сек перед повтором...`);

            return timer(delayTime * 1000);
        }
    })
).subscribe({
    next: val => console.log(val),
    error: err => console.error(`[ФІНАЛЬНА ПОМИЛКА] ${err.message}`)
});