import { Component,OnInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  message = "";
  childMsg = "";
  
  constructor(){
    setInterval(()=>{
      this.message = `first prize number is ${Math.floor(Math.random() * 1000000)}`
    },500)
  }
  
  onChildClicked(msg: string) {
    this.childMsg = msg;
  }
}
