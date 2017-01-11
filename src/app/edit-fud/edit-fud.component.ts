import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Fud } from '../fud.model';

@Component({
  selector: 'edit-fud',
  templateUrl: './edit-fud.component.html',
  styleUrls: ['./edit-fud.component.scss']
})
export class EditFudComponent  {
  @Input() childFudToEdit: Fud;
  @Output() editDoneSender = new EventEmitter();
  editDoneClicked(){
    this.editDoneSender.emit();
  }
}
