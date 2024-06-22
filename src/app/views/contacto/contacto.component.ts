import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    FooterComponent,HeaderComponent,RouterLink
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
