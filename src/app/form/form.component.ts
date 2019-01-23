import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() onCloseForm = new EventEmitter<void>();

  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    about: new FormControl(''),
    eyeColor: new FormControl(''),
    gender: new FormControl('', Validators.required),
    balance: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(\$|)([1-9]\d{0,2}(\,\d{3})*|([1-9]\d*))(\.\d{2})?$/)
    ]),
    registered: new FormControl(new Date())
  });
  constructor(private usersService: UsersService) { }

  public get name() {
    return this.form.get('name')
  }

  ngOnInit() {
  }

  onSubmit() {
    this.usersService.users.push(this.form.value);
    this.usersService.saveToLocalStorage();
    this.onCloseForm.emit();
  }
}