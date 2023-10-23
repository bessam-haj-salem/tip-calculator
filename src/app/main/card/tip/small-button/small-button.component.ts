import { Component, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-small-button',
  templateUrl: './small-button.component.html',
  styleUrls: ['./small-button.component.scss']
})
export class SmallButtonComponent implements OnChanges{
  @Input() number: string ="";
  custom: boolean = false

ngOnChanges() {
  this.number === "Custom" ? this.custom = true : this.custom = false
}

}
