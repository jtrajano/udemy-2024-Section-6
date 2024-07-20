import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dashoboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashoboard-item.component.html',
  styleUrl: './dashoboard-item.component.css'
})
export class DashoboardItemComponent {
  @Input() img!: {src: string, alt: string};
  @Input() title!: string;
}
