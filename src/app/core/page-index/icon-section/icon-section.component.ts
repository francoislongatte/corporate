import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardComponent } from './card/card.component';

@Component({
  selector: '[iconSection]',
  standalone: true,
  imports: [NgFor, CardComponent],
  templateUrl: './icon-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    id: 'services',
    class: 'bg-white m-auto overflow-hidden relative justify-center',
  },
})
export class IconSectionComponent {}
