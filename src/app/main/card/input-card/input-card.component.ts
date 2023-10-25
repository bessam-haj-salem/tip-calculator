import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SplitterService } from 'src/app/services/splitter.service';
@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss'],
})
export class InputCardComponent implements OnInit {
  @Input() label: string = '';
  @Input() img: string = '';
  // bill = new FormControl('', Validators.required)
  bill: string = '';
  constructor(private splitterService: SplitterService) {}
  ngOnInit(): void {
    this.splitterService.clickEvent$.subscribe(() => {
      console.log(this.bill);
      console.log('label', this.label);
      this.label === 'Bill'
        ? this.splitterService.addBill(parseInt(this.bill))
        : this.splitterService.addPerson(parseInt(this.bill));
    });
    this.splitterService.resetClickEvent$.subscribe(() => {
      this.bill = '';
    });
  }
}
