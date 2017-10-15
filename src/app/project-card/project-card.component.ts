import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'brainbolt-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: any;
  constructor() { }

  ngOnInit() {
  }

}
