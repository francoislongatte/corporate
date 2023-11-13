import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'h-card rounded-2xl text-center flex-1 overflow-hidden',
  },
})
export class CardComponent {
  @Input() link!: string;
  @Input() count!: string;
}
