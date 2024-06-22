import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NavegarComponent } from './components/navegar/navegar.component';
import { SobrenosotrosComponent } from './views/sobrenosotros/sobrenosotros.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SobrenosotrosComponent,
    NavegarComponent,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public router: Router) { }
  title = 'frontend';
}
