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
        imageUrl: "./../../assets/cloe.png",
        tech: [
          {
            name: "Angular",
            iconClass: "fab fa-angular"
          },
          {
            name: "Sass",
            iconClass: ""
          }
        ],
        link: "http://www.getcloe.com"
      },
      {
        title: "Social Dev",
        imageUrl: "./../../assets/social-dev.jpg",
        tech: [
          {
            name: "React JS",
            iconClass: ""
          },
          {
            name: "Firebase",
            iconClass: ""
          }
        ],
        link: "https://danielpik18.github.io/social-dev"
      }
    ];

    return projects;
  }
}
