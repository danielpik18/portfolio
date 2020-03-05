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
        imageUrl: "assets/img/projects/project__cloe.png",
        tech: [
          {
            name: "Angular",
            iconName: "fab fa-angular"
          }
        ],
        link: "http://www.getcloe.com"
      },
      {
        title: "Social Dev",
        imageUrl: "assets/img/projects/project__socialDev.png",
        tech: [
          {
            name: "React JS",
            iconName: "fab fa-react"
          },
          {
            name: "Firebase",
            iconName: "fa fa-database"
          }
        ],
        link: "https://danielpik18.github.io/social-dev"
      },
      {
        title: "SocketIO Chatrooms",
        imageUrl: "assets/img/projects/project__chatrooms.png",
        tech: [
          {
            name: "Node JS",
            iconName: "fab fa-react"
          }
        ],
        link: "https://chatroomsapp.herokuapp.com/index.html"
      },
      {
        title: "Space",
        imageUrl: "assets/img/projects/project__chatrooms.png",
        tech: [
          {
            name: "Angular",
            iconName: "fab fa-angular"
          },
          {
            name: "Laravel",
            iconName: "fab fa-laravel"
          }
        ],
        link: "/projects"
      }
    ];

    return projects;
  }
}
