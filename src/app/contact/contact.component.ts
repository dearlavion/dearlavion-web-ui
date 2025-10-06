import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../common/footer/footer.component';
import { BackgroundComponent } from '../common/background/background.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, FooterComponent, BackgroundComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  email = '';

  onSubscribe() {
    if (this.email) {
      console.log('Subscribing email:', this.email);
      this.email = '';
    }
  }
}
