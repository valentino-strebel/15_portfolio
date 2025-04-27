import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StandardButtonComponent } from '../../shared/standard-button/standard-button.component';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, StandardButtonComponent],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    console.log(this.contactData);
  }
}
