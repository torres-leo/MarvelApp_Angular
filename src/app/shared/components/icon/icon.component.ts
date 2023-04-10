import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() customClass: string = '';
  @Input() customTitle?: string = '';
  @Input() handleClick: () => void = () => '';
}
