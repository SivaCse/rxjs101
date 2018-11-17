import { Observable, interval } from "rxjs";

// an observable is a stream of data
// unline a function, it can return multiple values over time,
// even asynchronously

const o$ = new Observable<number>(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    setTimeout(() => {
        subscriber.next(3);
        subscriber.complete();
    }, 1000);
});

o$.subscribe(v => console.log("subscriber: " + v));

// or use a builtin `creation operator` to create an Observable that
// emits an infinite sequence of numbers over time

const o2$ = interval(1000);

o2$.subscribe(v => console.log("interval subscriber: " + v));