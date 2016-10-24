import { Component,OnInit,Input} from '@angular/core';

@Component({
  selector: 'child-component',
  template: `Hello - this is out child component
  this is input property {{title}}`
  })

  export class ChildComponent{
    @Input() title:string

  }
