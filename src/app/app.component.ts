import { Component } from '@angular/core';
import { MatCard, MatButton, MatIconRegistry } from "@angular/material";

import { ProjectService } from "./project.service";
import { ProjectCardComponent } from "./project-card/project-card.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private projService: ProjectService, public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  title = 'brainbolt.io';
  projects = this.projService.getProjects();
}
