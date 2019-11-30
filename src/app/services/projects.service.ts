import { Injectable } from "@angular/core";
import { faAngular, faSass, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

@Injectable({
  providedIn: "root"
})
export class ProjectsService {
  constructor() {}

  getProjects() {
    const projects = [
      {
        title: "CloePMS",
        imageUrl: "./../../assets/cloeLogo.jpg",
        tech: [
          {
            name: "Angular",
            iconName: faAngular
          },
          {
            name: "Sass",
            iconName: faSass
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
            iconName: faReact
          },
          {
            name: "Firebase",
            iconName: faDatabase
          }
        ],
        link: "https://danielpik18.github.io/social-dev"
      }
    ];

    return projects;
  }
}
