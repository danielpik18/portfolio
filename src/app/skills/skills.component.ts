import { Component, OnInit } from "@angular/core";
import { faColumns, faListUl, faLayerGroup, faGlobe, faServer, faDatabase, faCubes } from "@fortawesome/free-solid-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { SkillsService } from "../services/skills.service";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  //Font awesome icons
  faColumns = faColumns;
  faListUl = faListUl;
  faLayerGroup = faLayerGroup;
  faGlobe = faGlobe;
  faJsSquare = faJsSquare;
  faServer = faServer;
  faDatabase = faDatabase;
  faCubes = faCubes;

  skills: any;

  currentView;

  constructor(private _skillsService: SkillsService) { }

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
