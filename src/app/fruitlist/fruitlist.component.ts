import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { SinglefruitComponent } from "./singlefruit/singlefruit.component";
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  fruitlistdata = inject(FruitlistdataService);
    
  addComment(comment:string, index:number) {
    // console.log(comment);
    this.fruitlistdata.adCommentToFruit(comment, index);
  }
}
