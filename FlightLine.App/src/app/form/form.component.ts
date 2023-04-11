import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  styleUrls: ['./form.component.scss'],
  selector: 'form-field-appearance-example',
  templateUrl: 'form.component.html',
})
export class FormComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: '',
      studentNumber: '',
      phoneNumber: '',
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
