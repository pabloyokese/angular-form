import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamic-form';
  myForm: FormGroup;
  apiInfo = {
    name: true,
    email: true,
    message: true
  };

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9.@]*')]),
      message: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
    for (const element of Object.keys(this.apiInfo)) {
      console.log(element + ' = ' + this.apiInfo[element]);
    }
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
}
