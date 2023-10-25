import { Injectable } from '@angular/core';
import { combineLatestWith, map, Observable, of, Subject, take, zip } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SplitterService {
  private billSubject = new Subject<number>();
  bill$ = this.billSubject.asObservable();

  private pourcentSubject = new Subject<number>();
  pourcent$ = this.pourcentSubject.asObservable();

  private personSubject = new Subject<number>();
  person$ = this.personSubject.asObservable();

  private clickSubject = new Subject<void>();
  clickEvent$ = this.clickSubject.asObservable();

  private resetClickSubject = new Subject<void>();
  resetClickEvent$ = this.resetClickSubject.asObservable();

  tipAmount$: Observable<number> = of(0);

  addBill(bill: number): void {
    this.billSubject.next(bill);
  }

  addPourcent(pourcent: number): void {
    this.pourcentSubject.next(pourcent);
  }

  addPerson(person: number): void {
    this.personSubject.next(person);
  }

  triggerClickEvent(): void {
    this.clickSubject.next();
  }

  triggerResetClickEvent(): void {
    this.resetClickSubject.next();
  }

  getTipAmount(): Observable<number> {
    return this.bill$.pipe(
      combineLatestWith(this.pourcent$),
      map(([bill, pourcent]) => {
        return (bill * pourcent) / 100;
      }),
      take(1)
    );
  }

  getTotal(): Observable<number> {
    return zip(this.bill$, this.getTipAmount(), this.person$).pipe(
      map(([bill, tipAmount, person]) => {
        console.log((bill + tipAmount) * person)
        return (bill + tipAmount) * person;
      })
    );
  }
}
