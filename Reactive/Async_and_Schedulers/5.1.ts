import {from, Observable, asyncScheduler, animationFrameScheduler, queueScheduler, asapScheduler} from 'rxjs';
import { delay, observeOn, tap, concatMap } from 'rxjs/operators';

const images$ = from(['photo_1.jpg', 'photo_2.jpg', 'photo_3.jpg']);

const downloadImage = (img: string): Observable<string> => {
    return from([img]).pipe(
        observeOn(asyncScheduler),
        delay(1000),
        tap(() => console.log(`[async-io] [ЗАВАНТ] Завантаження: ${img}`))
    );
};

const compressImage = (img: string): Observable<string> => {
    return from([img]).pipe(
        observeOn(queueScheduler),
        delay(500), 
        tap(() => console.log(`[queue-comp] [СТИСК] Стиснення: ${img}`))
    );
};

const displayImage = (img: string): Observable<string> => {
    return from([img]).pipe(
        observeOn(asapScheduler),
        tap(() => console.log(`[main-asap] [ФОТО] Відображення: ${img}`))
    );
};

images$.pipe(
    concatMap(img => downloadImage(img).pipe(
        concatMap(downloadedImg => compressImage(downloadedImg)),
        concatMap(compressedImg => displayImage(compressedImg))
    ))
).subscribe();