import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { SplitterService } from 'src/app/services/splitter.service';

@Component({
  selector: 'app-small-button',
  templateUrl: './small-button.component.html',
  styleUrls: ['./small-button.component.scss'],
})
export class SmallButtonComponent implements OnChanges {
  @Input() number: string = '';

  custom: boolean = false;
  constructor(private splitterService: SplitterService) {}

  ngOnChanges() {
    this.number === 'Custom' ? (this.custom = true) : (this.custom = false);
  }
  getPourcentage(pourcentage: string) {
    this.splitterService.addPourcent(parseInt(pourcentage));
    this.splitterService.triggerClickEvent();
  }
}
