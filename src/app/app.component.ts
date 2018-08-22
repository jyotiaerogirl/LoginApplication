import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deutsche Bank';
  registerUser(form: NgForm) {
    console.log(JSON.stringify(form.value));
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
  }

}
