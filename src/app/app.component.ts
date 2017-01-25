import {Component} from "@angular/core";
import {FormGroup, FormControl, FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-root',
  template: `
    
    <form [formGroup]="userForm" (ngSubmit)="register()">
    
    <fieldset>
      <input type="text" 
             formControlName="username" 
             placeholder="username">
      <input type="password" 
             formControlName="password" 
             placeholder="password">
    </fieldset>
    
    <fieldset formGroupName="address">
      <legend>Address</legend>
      <input type="text" 
             formControlName="city" 
             placeholder="city">
      <input type="text" 
             formControlName="street"
             placeholder="street">
    </fieldset>
      
      <fieldset formArrayName="phones">
        <legend>Phones</legend>
        
        <input type="text"
               *ngFor="let phone of userForm.get('phones').controls; let i =index"
               [formControlName]="i"
               placeholder="phone">
        
        <button type="button" (click)="addPhone()">+</button>
      </fieldset>
      
      <button type="submit">send</button>
    
    </form>
    

  `,
})

export class AppComponent {

  private userForm: FormGroup;

  constructor(builder:FormBuilder) {

    this.userForm = builder.group({
      username: '',
      password: '',
      address: builder.group({
        city: '',
        street:''
      }),
      phones: builder.array([ new FormControl() ])
    });

  }

  addPhone(){
    const phonesArr = <FormArray>this.userForm.get('phones');
    phonesArr.push(new FormControl())
  }

  register(){
    console.log(this.userForm.value);
  }



}

