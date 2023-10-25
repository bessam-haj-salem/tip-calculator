import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SplitterService } from 'src/app/services/splitter.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent {
  pourcentage!: number;
  bill!: number;
  tipAmount$: Observable<number> = this.splitterService.getTipAmount();
  total$: Observable<number> = this.splitterService.getTotal();
  constructor(private splitterService: SplitterService) {}

  reset() {
    this.splitterService.triggerResetClickEvent();
    this.total$ = of(0)
    this.tipAmount$ = of(0)
  }
}
