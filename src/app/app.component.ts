import { Component } from '@angular/core';
import {NgForm} from "@angular/forms"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: {name: string, email:string, password: string, age: number | null, country: string, accept: boolean} = {
    name:"",
    email:"",
    password:"",
    age: null,
    country:"",
    accept: false
  }

  onSubmit(form: NgForm){
    if(form.valid){
      console.log(this.data);
    }
  }


}
