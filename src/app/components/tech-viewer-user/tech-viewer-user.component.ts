import { Component, OnInit } from '@angular/core';
import { TechnologienService } from 'src/app/services/technologien.service';
import { Technologie } from 'src/app/technologie';

@Component({
  selector: 'app-tech-viewer-user',
  templateUrl: './tech-viewer-user.component.html',
  styleUrls: ['./tech-viewer-user.component.css']
})
export class TechViewerUserComponent implements OnInit {

  mybreakpoint?: number;
  selectedTechnologie?: Technologie;

  detailMenuOpen = false;

  technologien: Technologie[] = [];
  tools: Technologie[] = [];
  techniques: Technologie[] = [];
  platforms: Technologie[] = [];
  languagesframeworks: Technologie[] = [];

  ring = ['Hold', 'Assess', 'Trial', 'Adopt'];

  constructor(private technologienService: TechnologienService) { }

  ngOnInit(): void {
    this.getTechnologien();
    this.getTools();
    this.getTechniques();
    this.getPlatforms();
    this.getLanguagesFrameworks();
    this.mybreakpoint = (window.innerWidth <= 600) ? 1 : 2;
  }
  
  getPlatforms() {
    this.technologienService.getAllPublishedTechnologiesFromKategorie("Platforms").subscribe(platforms => this.platforms = platforms);
  }
  getTechniques() {
    this.technologienService.getAllPublishedTechnologiesFromKategorie("Techniques").subscribe(techniques => this.techniques = techniques);
  }
  getTools() {
    this.technologienService.getAllPublishedTechnologiesFromKategorie("Tools").subscribe(tools => this.tools = tools);
  }

  getLanguagesFrameworks() {
    this.technologienService.getAllPublishedTechnologiesFromKategorie("Languages & Frameworks").subscribe(languagesframeworks => this.languagesframeworks = languagesframeworks);
  }

  getTechnologien(): void {
    this.technologienService.getAllTechnologies().subscribe(
      technologien => this.technologien = technologien);
      console.log(this.technologien);
  }

  onSelect(technologie: Technologie){
    this.selectedTechnologie = technologie;
    this.detailMenuOpen = true;
  }

  public visibleUpdated($event: any): void {
    this.detailMenuOpen = $event;
  }
}
