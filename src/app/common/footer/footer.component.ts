import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  footerLinks = {
    otherLinks: [
      { label: 'Blogs', href: '#' },
      { label: 'Movers website', href: '#' },
      { label: 'Traffic Update', href: '#' },
    ],
    services: [
      { label: 'Corporate goods', href: '#' },
      { label: 'Artworks', href: '#' },
      { label: 'Documents', href: '#' },
    ],
    customerCare: [
      { label: 'About Us', href: '#' },
      { label: 'Contact US', href: '#' },
      { label: 'Get Update', href: '#' },
    ],
  };
}
