import { Component, OnInit } from "@angular/core";
import { SkillsService } from "../services/skills.service";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  skills: any;

  currentView;

  constructor(private _skillsService: SkillsService) {}

  ngOnInit() {
    this.skills = this._skillsService.getSkills();

    console.log(window.innerWidth);

    if (window.innerWidth < 768) {
      this.currentView = 1;
    } else {
      this.currentView = 0;
    }
  }
}
