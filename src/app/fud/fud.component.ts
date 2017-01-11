import { Component, Input, EventEmitter } from '@angular/core';
import { EditService } from '../edit.service';
import { Fud } from '../fud.model';

@Component({
  selector: 'fud-display',
  templateUrl: './fud.component.html',
  styleUrls: ['./fud.component.scss']
})
export class FudComponent  {
  @Input() fud: Fud;

  constructor(private editService: EditService){}
  passUpFud(fudtoEdit){
    this.editService.setEdit(fudtoEdit);
  }
}
