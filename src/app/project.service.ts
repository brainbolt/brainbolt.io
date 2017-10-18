import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(): any[] {
    return [
      {
        title: "CubeNet",
        subtitle:"Data-driven intranet application",
        imageUrl: "../../assets/images/cubenet-brainbolt-io.png",
        imageAlt: "CubeNet screenshot",
        description: ["Accounting package integration enabling task and order management.", "Technologies used include: SQL Server, IIS, ASP.Net, C#, NHibernate, Bootstrap, JQuery, and JavaScript"],
        url: "http://cubenet.brainbolt.io"
      },
      {
        title: "Valquest.com",
        subtitle: "Corporate Website",
        imageUrl: "../../assets/images/valquest-com.png",
        imageAlt: "Valquest.com screenshot",
        description: ["Technologies used include: ASP.Net MVC, JavaScript"],
        url: "http://www.valquest.com"
      }];
 }  

}
