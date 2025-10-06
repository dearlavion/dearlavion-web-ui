import { Component } from '@angular/core';
import { FooterComponent } from '../common/footer/footer.component';
import { BackgroundComponent } from '../common/background/background.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterComponent, BackgroundComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  stats = [
    {
      icon: 'trophy',
      number: '26+',
      label: 'Awards won',
    },
    {
      icon: 'map',
      number: '65+',
      label: 'States covered',
    },
    {
      icon: 'user',
      number: '689K+',
      label: 'Happy clients',
    },
    {
      icon: 'truck',
      number: '130M+',
      label: 'Goods delivered',
    },
    {
      icon: 'briefcase',
      number: '130M+',
      label: 'Business hours',
    },
  ];

  testimonials = [
    {
      name: 'Yves Tanguy',
      position: 'Chief Executive, DLF',
      image:
        'https://api.builder.io/api/v1/image/assets/TEMP/c6d0f2cad48476d658bb91c4d754164b5edbe53f?width=106',
      rating: 5,
      title: 'Fantastic service!',
      text: 'I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.',
    },
  ];

  currentTestimonialIndex = 0;
}
