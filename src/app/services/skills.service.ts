import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SkillsService {
  constructor() {}

  getSkills() {
    const skills = {
      general: ["Java", "C#"],
      webBasic: ["HTML5", "CSS"],
      frontEnd: ["Javascript", "Angular 2", "React", "Sass"],
      backEnd: ["PHP", "NodeJS"],
      databases: ["Mysql", "SQL server", "PL/SQL", "MongoDB"],
      other: ["Git", "Github", "Diagramas UML", "Photoshop"]
    };

    return skills;
  }
}
