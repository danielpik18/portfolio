import { Component, OnInit } from "@angular/core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  faEnvelope = faEnvelope;
  faWhatsappSquare = faWhatsappSquare;

  constructor() {}

  ngOnInit() {}
}
