import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-64 h-64 rounded text-center flex-1 bg-blue-500',
  },
})
export class CardComponent {
  @Input() count!: string;
}
