import {
  Component,
  OnInit,
  Input // <--- added this
} from '@angular/core';


@Component({
  selector: 'app-user-item2',
  templateUrl: './user-item2.component.html',
  styleUrls: ['./user-item2.component.css']
})

export class UserItem2Component implements OnInit {
  //@Input() name: string; // <-- added Input annotation
  @Input() name: string;

  constructor() {
  // removed setting name
  }
  
  ngOnInit() {}
}
