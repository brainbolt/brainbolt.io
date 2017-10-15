import { Component } from '@angular/core';

import { MatCard, MatButton } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'brainbolt.io';
  projects = [
    {
      title: "CubeNet",
      imageUrl: "http://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
      description: "Used object-oriented programming (OOP), relational databases, object-relational mapping (ORM), and web frameworks, to develop a comprehensive suite of mission-critical applications which increased productivity and profitability, and streamlined communications company-wide. Technologies used include C#, JavaScript, SQL Server, IIS, NHibernate, VBScript, and Bootstrap."
    },
    {
      title: "wuweb",
      imageUrl: "http://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
      description: "Used object-oriented programming (OOP), relational databases, object-relational mapping (ORM), and web frameworks, to develop a comprehensive suite of mission-critical applications which increased productivity and profitability, and streamlined communications company-wide. Technologies used include C#, JavaScript, SQL Server, IIS, NHibernate, VBScript, and Bootstrap."
    },
    {
      title: "wuiOS",
      imageUrl: "http://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
      description: "Used object-oriented programming (OOP), relational databases, object-relational mapping (ORM), and web frameworks, to develop a comprehensive suite of mission-critical applications which increased productivity and profitability, and streamlined communications company-wide. Technologies used include C#, JavaScript, SQL Server, IIS, NHibernate, VBScript, and Bootstrap."
    }]
}
