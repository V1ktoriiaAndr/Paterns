import { debounceTime, Observable, tap } from 'rxjs';

const keystrokes = new Observable<string>(observer => {
    const inputs = ["К", "Ки", "Киї", "Київ", "Київ ", "Київ К", "Київ Ки"];
    const delays = [50, 80, 120, 100, 400, 60, 350];
    let i = 0;

    const emit = () => {
        if (i < inputs.length) {
            const currentInput = inputs[i];
            const currentDelay = delays[i];

            observer.next(currentInput);

            i++;
            setTimeout(emit, currentDelay);
        } else {
            setTimeout(() => observer.complete(), 400);
        }
    };
    emit();
});

const result = keystrokes.pipe(
    debounceTime(300),
    tap(val => console.log(`[ПОШУК] Запит до API: "${val}"`))
);

result.subscribe();