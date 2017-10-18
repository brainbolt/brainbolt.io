import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(): any[] {
    return [
      {
        title: "CubeNet",
        subtitle:"Accounting package integration enabling task and order management",
        imageUrl: "../../assets/images/cubenet-brainbolt-io.png",
        imageAlt: "CubeNet screenshot",
        description: "Technologies used: SQL Server, IIS, ASP.Net, C#, Bootstrap, JQuery, and JavaScript",
        url: "http://cubenet.brainbolt.io"
      },
      {
        title: "Valquest.com",
        subtitle: "Company website",
        imageUrl: "../../assets/images/valquest-com.png",
        imageAlt: "Valquest.com screenshot",
        description: "Used object-oriented programming (OOP), relational databases, object-relational mapping (ORM), and web frameworks, to develop a comprehensive suite of mission-critical applications which increased productivity and profitability, and streamlined communications company-wide. Technologies used include C#, JavaScript, SQL Server, IIS, NHibernate, VBScript, and Bootstrap.",
        url: "http://www.valquest.com"
      },
      {
        title: "wuiOS",
        subtitle: "blah blah blah",
        imageUrl: "http://material.angular.io/assets/img/examples/shiba2.jpg",
        imageAlt: "Photo of a Shiba Inu",
        description: "Used object-oriented programming (OOP), relational databases, object-relational mapping (ORM), and web frameworks, to develop a comprehensive suite of mission-critical applications which increased productivity and profitability, and streamlined communications company-wide. Technologies used include C#, JavaScript, SQL Server, IIS, NHibernate, VBScript, and Bootstrap.",
        url: "http://cubenet.brainbolt.io"
      }];
 }  

}
