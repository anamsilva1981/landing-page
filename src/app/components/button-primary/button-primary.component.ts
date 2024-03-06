import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

type BtnVariants = "primary" | "secondary";

@Component({
  selector: 'app-button-primary',
  standalone: true,
  imports: [NgIf],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss'
})
export class ButtonPrimaryComponent {
  @Output("submit") onSubmit = new EventEmitter
  @Input("btn-text") btnText: string = '';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary";

  public submit(){
    this.onSubmit.emit();
  }
}
