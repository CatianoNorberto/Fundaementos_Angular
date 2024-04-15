import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewslatterService } from '../../services/newslatter.service';

@Component({
  selector: 'newslatter-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  providers: [
    NewslatterService
  ],
  templateUrl: './newslatter-form.component.html',
  styleUrl: './newslatter-form.component.scss'
})
export class NewslatterFormComponent {
  newsletterForm!: FormGroup;

  constructor(private newsletterService: NewslatterService) {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    if((this.newsletterForm.value)){
      this.newsletterService.senData(this.newsletterForm.value.name, this.newsletterForm.value.email).subscribe()
    }
  }
}
