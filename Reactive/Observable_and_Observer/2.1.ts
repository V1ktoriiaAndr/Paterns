import { Observable } from 'rxjs';

const atmSteps = new Observable<string>(subscriber =>{
    console.log("[ATM] Session started")
    subscriber.next('insert card');
    subscriber.next('enter PIN');
    subscriber.next('choose amount');
    subscriber.next('cash withdrawal...');
    subscriber.next('success!');
    subscriber.complete();
})

atmSteps.subscribe({
    next: (step) => console.log(`>> ${step}`),
    complete: () => console.log('[ATM] Session complete'),
    error: (err) => console.error('[ATM] Error:', err)
    }
);

