import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class NoteService {


constructor(private _http: Http) { }

  getNotes(callback){
  this._http.get('/notes').subscribe( 
  (response) => {
  	console.log(response.json());
  	let x = response.json();
  	callback(x);

  },
  (error) => {
 	console.log('error');
  } 
);
  }
  
  createNotes(note, callback){
  	console.log(note);
  	note = note
  	this._http.post('/notes', note).subscribe(
  		(response)=>{
  			console.log("The note has left the service and entered the database");
        callback(response.json());
  		},
  		(error) =>{
  			console.log('The note could not leave the service and did not enter the database');
  		})
  }

}

  
