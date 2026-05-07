import {from, Observable, of, pipe, take, throwError} from "rxjs";

const getUserById = (id: number): Observable<string> =>{
    if (id > 0){
        return of(`Користувач#${id}: Іван Франко`).pipe(take(1));
    }
    else {
        return throwError(() => (new Error("ID не може бути від’ємним або нульовим")))
    }
}

getUserById(42).subscribe({
    next: (user) => console.log('(+) Отримано:', user),
    error: (err) => console.error('(-) Помилка:', err.message)
});

getUserById(-1).subscribe({
    next: (user) => console.log('(+) Отримано:', user),
    error: (err) => console.error('(-) Помилка:', err.message)
});