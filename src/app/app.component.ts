import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from '../Components/hero/hero.component';
import { AboutComponent } from '../Components/about/about.component';
import { SkillsComponent } from '../Components/skills/skills.component';
import { ProjectsComponent } from '../Components/projects/projects.component';
import { ContactComponent } from '../Components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeroComponent,AboutComponent,SkillsComponent,ProjectsComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
