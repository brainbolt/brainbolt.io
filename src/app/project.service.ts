import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(): any[] {
    return [
      {
        title: "CubeNet",
        subtitle:"Data-driven web application built using SQL Server, ASP.Net, C#, Bootstrap, and JavaScript",
        imageUrl: "http://material.angular.io/assets/img/examples/shiba2.jpg",
        imageAlt: "Photo of a Shiba Inu",
        description: "Used object-oriented programming (OOP), relational databases, object-relational mapping (ORM), and web frameworks, to develop a comprehensive suite of mission-critical applications which increased productivity and profitability, and streamlined communications company-wide. Technologies used include C#, JavaScript, SQL Server, IIS, NHibernate, VBScript, and Bootstrap."
      },
      {
        title: "Valquest.com",
        subtitle: "blah blah blah",
        imageUrl: "../../assets/images/valquest-com.png",
        imageAlt: "Photo of a Shiba Inu",
        description: "Used object-oriented programming (OOP), relational databases, object-relational mapping (ORM), and web frameworks, to develop a comprehensive suite of mission-critical applications which increased productivity and profitability, and streamlined communications company-wide. Technologies used include C#, JavaScript, SQL Server, IIS, NHibernate, VBScript, and Bootstrap."
      },
      {
        title: "wuiOS",
        subtitle: "blah blah blah",
        imageUrl: "http://material.angular.io/assets/img/examples/shiba2.jpg",
        imageAlt: "Photo of a Shiba Inu",
        description: "Used object-oriented programming (OOP), relational databases, object-relational mapping (ORM), and web frameworks, to develop a comprehensive suite of mission-critical applications which increased productivity and profitability, and streamlined communications company-wide. Technologies used include C#, JavaScript, SQL Server, IIS, NHibernate, VBScript, and Bootstrap."
      }];
 }  

}
