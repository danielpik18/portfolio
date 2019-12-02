import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SkillsService {
  constructor() { }

  getSkills() {
    const skills = {
      general: ["Java", "C#"],
      webBasic: ["HTML5", "CSS", "Sass"],
      frontEnd: ["Javascript", "Angular 2", "React"],
      backEnd: ["PHP", "NodeJS", "Express"],
      databases: ["Mysql", "SQL server", "PL/SQL", "MongoDB"],
      other: ["Git", "Github", "Diagramas UML", "Photoshop"]
    };

    return skills;
  }
}
