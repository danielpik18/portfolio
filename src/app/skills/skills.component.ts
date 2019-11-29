import { Component, OnInit } from "@angular/core";
import { faColumns, faListUl } from "@fortawesome/free-solid-svg-icons";
import { SkillsService } from "../services/skills.service";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  faColumns = faColumns;
  faListUl = faListUl;
  skills: any;

  constructor(private _skillsService: SkillsService) {}

  ngOnInit() {
    this.skills = this._skillsService.getSkills();
  }
}
