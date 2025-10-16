import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() parentMsg: string | undefined;
  @Output() clicked = new EventEmitter<string>();
  
  

  notify(val: string) { 
    this.clicked.emit(val); 
  }
}
