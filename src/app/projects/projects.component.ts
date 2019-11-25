import { Component, OnInit } from "@angular/core";
import { ProjectsService } from "../services/projects.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  projects;

  constructor(private _projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects = this._projectsService.getProjects();
  }
}
