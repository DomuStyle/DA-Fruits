import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-singlefruit',
  standalone: true,
  imports: [],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss'
})
export class SinglefruitComponent {
  @Input()fruitNumber = 0;
}
