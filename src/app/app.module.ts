import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FloatingMenuComponent } from "./floating-menu/floating-menu.component";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsService } from "./services/projects.service";
import { SkillsService } from "./services/skills.service";

@NgModule({
  declarations: [
    AppComponent,
    FloatingMenuComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ProjectsService, SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
