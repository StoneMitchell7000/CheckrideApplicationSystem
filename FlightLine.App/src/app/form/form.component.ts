import { Component } from '@angular/core';
import { Form } from './form';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  styleUrls: ['./form.component.scss'],
  selector: 'app-form-form',
  templateUrl: 'form.component.html',
})
export class FormComponent {
  panelOpenState = false;
}
