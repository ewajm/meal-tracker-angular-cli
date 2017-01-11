import { Component, Output, EventEmitter } from '@angular/core';
import { Fud } from '../fud.model';
@Component({
  selector: 'new-fud',
  templateUrl: './new-fud.component.html',
  styleUrls: ['./new-fud.component.scss']
})
export class NewFudComponent {
  @Output() newFudSender = new EventEmitter();
  saveFud(name: string, calories: string, details: string){
    var caloriesNum: number = parseInt(calories);
    var newFudToAdd: Fud = new Fud(name, caloriesNum, details);
    this.newFudSender.emit(newFudToAdd);
  }
}
