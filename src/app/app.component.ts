import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Countries, UserRegister } from './model/user-register.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'UHAngularEjercicio2';

  public createUserForm?: FormGroup;
  public countries: Countries[] = [
    "France", "Germany", "Italy", "Portugal", "Spain", "United States", "United Kingdom"
  ];
  public savedUser: UserRegister[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createUserForm = new FormGroup({
      name: new FormControl("", Validators.required),
      lName: new FormControl(""),
      nif: new FormControl("", [Validators.required, Validators.pattern('((([X-Z])|([LM])){1}([-]?)((\d){7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]))')]),
      nTlf: new FormControl("", [Validators.min(600000000), Validators.max(999999999)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", {validators: [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$')], updateOn:'blur'}),
      hasAcceptedConditions: new FormControl("", Validators.required),
      countries: new FormControl("Spain"),
      description: new FormControl("")
    });
  }

  public saveUser(event: Event) {
    event.preventDefault();
    if (this.createUserForm?.valid) {
      // Add User
      console.log(this.createUserForm.value);
      this.savedUser.push(this.createUserForm.value);
    }
  }
}
