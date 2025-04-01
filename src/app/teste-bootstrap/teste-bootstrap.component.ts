import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-teste-bootstrap',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './teste-bootstrap.component.html',
  styleUrl: './teste-bootstrap.component.css'
})
export class TesteBootstrapComponent {

}
