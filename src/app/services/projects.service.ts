import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProjectsService {
  constructor() {}

  getProjects() {
    const projects = [
      {
        title: "CloePMS",
        imageUrl: "assets/cloeLogo.jpg",
        tech: [
          {
            name: "Angular",
            iconName: "fab fa-angular"
          },
          {
            name: "Sass",
            iconName: "fab fa-sass"
          },
          {
            name: "Bootstrap",
            iconName: "fab fa-bootstrap"
          }
        ],
        link: "http://www.getcloe.com"
      },
      {
        title: "Social Dev",
        imageUrl: "assets/social-dev.jpg",
        tech: [
          {
            name: "React JS",
            iconName: "fab fa-react"
          },
          {
            name: "Firebase",
            iconName: "fa fa-database"
          },
          {
            name: "Bootstrap",
            iconName: "fab fa-bootstrap"
          }
        ],
        link: "https://danielpik18.github.io/social-dev"
      }
    ];

    return projects;
  }
}
