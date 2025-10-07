import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavigationComponent } from './common/top-navigation/top-navigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopNavigationComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('dearlavion-web-ui');
}
