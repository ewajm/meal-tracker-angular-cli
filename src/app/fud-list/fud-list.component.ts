import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Fud } from '../fud.model';

@Component({
  selector: 'fud-list',
  templateUrl: './fud-list.component.html',
  styleUrls: ['./fud-list.component.scss']
})
export class FudListComponent {
  @Input() childFudList: Fud[];
  @Output() editFudSender = new EventEmitter();
  public calorieFilter: string = "all";
  onChange(option){
    this.calorieFilter = option;
  }
}
