import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SubmitButtonComponent } from '../../shared/submit-button/submit-button.component';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, SubmitButtonComponent],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }
}
