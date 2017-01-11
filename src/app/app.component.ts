import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Fud } from './fud.model';
import { EditService } from './edit.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [EditService]
})

export class AppComponent implements OnInit{
  public masterFudList: Fud[] = [];
  public fudToEdit: Fud = null;
  constructor(private editService: EditService){}

  ngOnInit(){
    this.editService.getEdit().subscribe((fud: Fud)=>{
      this.fudToEdit = fud;
    });
  }

  addFud(newFudFromChild: Fud) {
    this.masterFudList.push(newFudFromChild);
  }
  sendToEdit(sentFud){
    this.fudToEdit = sentFud;
  }
  finishedEditing(){
    this.fudToEdit = null;
  }
}
