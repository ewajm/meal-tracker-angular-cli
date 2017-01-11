import { Component, Input, EventEmitter } from '@angular/core';
import { Fud } from '../fud.model';

@Component({
  selector: 'summary-display',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent  {
  @Input() summaryFudList: Fud[];

}
