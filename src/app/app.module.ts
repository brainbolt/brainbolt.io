import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatCardModule, MatButtonModule, MatIconModule, MatIconRegistry, MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ProjectService } from "./project.service";
import { ProjectCardComponent } from './project-card/project-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatCardModule, MatButtonModule, MatIconModule, MatToolbarModule
  ],
  providers: [ProjectService, MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
