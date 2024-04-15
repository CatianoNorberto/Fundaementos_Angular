import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input("img-path") imgPath: string = '';
  @Input("card-title") cardTitle: string = '';
  @Input("card-description") cardDescription: string = '';
}
