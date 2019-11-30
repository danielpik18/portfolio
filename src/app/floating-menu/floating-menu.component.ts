import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-floating-menu",
  templateUrl: "./floating-menu.component.html",
  styleUrls: ["./floating-menu.component.scss"]
})
export class FloatingMenuComponent implements OnInit {
  faBars = faBars;
  drawerOpen: boolean;

  constructor() {}

  ngOnInit() {}

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }
}
