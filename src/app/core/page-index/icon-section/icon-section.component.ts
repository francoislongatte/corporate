import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: '[iconSection]',
  standalone: true,
  imports: [NgFor],
  templateUrl: './icon-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSectionComponent {}
