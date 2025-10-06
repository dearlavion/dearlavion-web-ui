import { Component } from '@angular/core';
import { FooterComponent } from '../common/footer/footer.component';
import { BackgroundComponent } from '../common/background/background.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FooterComponent, BackgroundComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  services = [
    {
      title: 'Business Services',
      description:
        'We give you complete reliable delivery for your company. We will take full responsibility of the deliveries.',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/86459d727f23cb535753d272bd9e1f23c02ab8dd?width=140',
      items: ['Corporate goods', 'Shipment', 'Accesories'],
      buttonStyle: 'outline',
    },
    {
      title: 'Statewide Services',
      description:
        'Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/fb6973327f1c5408cd1f4b3efdd68a37bc9c1b67?width=140',
      items: ['Personal items', 'Percels', 'Documents'],
      buttonStyle: 'filled',
    },
    {
      title: 'Personal Services',
      description:
        'You can trust us to safely deliver your most sensitive documents to the specific area in a short time.',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/94f61bef25302391724a3edac77c39522695f2f5?width=140',
      items: ['Gifts', 'Package', 'Documents'],
      buttonStyle: 'outline',
    },
  ];
}
