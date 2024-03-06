import { Component, inject, signal } from '@angular/core';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [ButtonPrimaryComponent, ReactiveFormsModule],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss',
  providers: [NewsletterService],
})
export class NewsletterFormComponent {
  private _newsletterService = inject(NewsletterService);

  public newsletterForm!: FormGroup;
  public loading = signal(false);


  constructor() {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  public onSubmit() {
    this.loading.set(true);
    if (this.newsletterForm.valid) {
      this._newsletterService.sendData(this.newsletterForm.value.name, this.newsletterForm.value.email).subscribe({
        next: () => { 
          this.newsletterForm.reset 
          this.loading.set(false);
        }
      })
    }
    console.log(this.newsletterForm.value);

  }
}
