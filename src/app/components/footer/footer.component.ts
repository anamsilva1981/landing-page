import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage, ButtonPrimaryComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
