import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'newslatter-form',
  standalone: true,
  imports: [BtnPrimaryComponent],
  templateUrl: './newslatter-form.component.html',
  styleUrl: './newslatter-form.component.scss'
})
export class NewslatterFormComponent {

}
