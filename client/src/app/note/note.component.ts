import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NoteService} from './../note.service'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class NoteComponent implements OnInit { 
	notes = [];
	note = {note: ''};

  constructor(private _noteService: NoteService) {
  	
   }

  ngOnInit() {
   this._noteService.getNotes(callback=>{
      this.notes = (callback);
      console.log(typeof(this.notes));
    });
  }

  onSubmit(){
  	this._noteService.createNotes(this.note, response => {
      this.notes = response;
      
    });
  }

}
