import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-floating-menu",
  templateUrl: "./floating-menu.component.html",
  styleUrls: ["./floating-menu.component.scss"]
})
export class FloatingMenuComponent implements OnInit {
  drawerOpen: boolean;

  constructor() {}

  ngOnInit() {}

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }
}
