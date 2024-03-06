import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common'
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { HttpClientModule } from '@angular/common/http';
import { BenefitComponent } from '../benefit/benefit.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent, 
    NgOptimizedImage, 
    ButtonPrimaryComponent,
    NewsletterFormComponent,
    HttpClientModule,
    BenefitComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
