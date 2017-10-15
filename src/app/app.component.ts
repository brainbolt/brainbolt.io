import { Component } from '@angular/core';
import { MatCard, MatButton } from "@angular/material";

import { ProjectService } from "./project.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private projService: ProjectService) {
    
  }

  title = 'brainbolt.io';
  projects = this.projService.getProjects();
}
