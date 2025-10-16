import { Component,OnInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  childMsg = "";
  sliderValue: any;
  
  onChildClicked(msg: string) {
    this.childMsg = msg;
  }
}
