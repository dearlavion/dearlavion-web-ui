import { Component } from '@angular/core';
import { FooterComponent } from '../common/footer/footer.component';
import { BackgroundComponent } from '../common/background/background.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FooterComponent, BackgroundComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {}
