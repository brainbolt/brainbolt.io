import { Component, OnInit, Input } from '@angular/core';
import { MatToolbarRow } from "@angular/material";
@Component({
  selector: 'brainbolt-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: any;
  constructor() { }

  ngOnInit() {
  }

}
