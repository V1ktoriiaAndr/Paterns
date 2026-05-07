import { concatMap, defaultIfEmpty, EMPTY, ignoreElements, Observable, of, tap, throwError } from "rxjs";

const findInCache = (key: string): Observable<string> => {
    switch (key) {
        case "user:1":
            return of("{'name': 'Леся', 'age': 28}");
        case "user:2":
            return EMPTY;
        case "user:error":
            return throwError(() => new Error("Redis недоступний"));
        default:
            return EMPTY;
    }
};

const testCache = (key: string, label: string) => {
    findInCache(key).pipe(
        defaultIfEmpty("Завантажено з БД")
    ).subscribe({
        next: (val) => {
            const status = val === "Завантажено з БД" ? "Кеш-міс. Значення:" : "Знайдено:";
            console.log(`${label} ${status} ${val}`);
        },
        error: (err) => console.log(`${label} Помилка: ${err.message}`)
    });
};

const validateInput = (): Observable<void> => {
    return of(undefined).pipe(
        tap(() => console.log("[ПОШУК] Перевірка даних...")),
        tap(() => console.log("(+) Дані валідні"))
    );
}

const saveToDatabase = (shouldFail: boolean = false): Observable<void> => {
    return of(undefined).pipe(
        tap(() => console.log("[DB] Збереження в БД...")),
        concatMap(() => shouldFail
            ? throwError(() => new Error("Помилка запису в БД"))
            : of(undefined)
        ),
        tap(() => console.log("(+) Збережено"))
    );
}

const generateToken = (): Observable<string> => {
    return of("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo").pipe(
        tap(() => console.log("[ТОКЕН] Генерація токена..."))
    );
}

const runRegistration = (failAtDb: boolean) => {
    const scenario = failAtDb ? "СЦЕНАРІЙ ПОМИЛКИ" : "УСПІШНИЙ СЦЕНАРІЙ";
    console.log(`\n=== ${scenario} ===`);

    validateInput().pipe(
        concatMap(() => saveToDatabase(failAtDb)),
        concatMap(() => generateToken())
    ).subscribe({
        next: (token) => console.log(`Токен: ${token}`),
        error: (err) => console.error(`[!] Реєстрацію перервано: ${err.message}`),
        complete: () => console.log("(+) Реєстрацію завершено успішно!")
    });
};

testCache("user:1", "[КЕШ (+)]");
testCache("user:2", "[КЕШ (-)]");
testCache("user:error", "[КЕШ (!)]");

runRegistration(false);
runRegistration(true);