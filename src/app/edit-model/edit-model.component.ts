import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-model',
  templateUrl: './edit-model.component.html',
  styleUrls: ['./edit-model.component.css']
})
export class EditModelComponent implements OnInit {
  @Input() groups: any;

  constructor() { }
  
  ngOnInit() {
  }

}
