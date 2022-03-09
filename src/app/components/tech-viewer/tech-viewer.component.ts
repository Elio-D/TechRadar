import { Component, OnInit } from '@angular/core';
import { TechnologienService } from 'src/app/services/technologien.service';
import { Technologie } from 'src/app/technologie';

@Component({
  selector: 'app-tech-viewer',
  templateUrl: './tech-viewer.component.html',
  styleUrls: ['./tech-viewer.component.css']
})
export class TechViewerComponent implements OnInit {

  mybreakpoint?: number;
  selectedTechnologie?: Technologie;

  editFormTriggerd = false;

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
    this.technologienService.getAllTechnologiesFromKategorie("Platforms").subscribe(platforms => this.platforms = platforms);
  }
  getTechniques() {
    this.technologienService.getAllTechnologiesFromKategorie("Techniques").subscribe(techniques => this.techniques = techniques);
  }
  getTools() {
    this.technologienService.getAllTechnologiesFromKategorie("Tools").subscribe(tools => this.tools = tools);
  }

  getLanguagesFrameworks() {
    this.technologienService.getAllTechnologiesFromKategorie("Languages & Frameworks").subscribe(languagesframeworks => this.languagesframeworks = languagesframeworks);
  }

  getTechnologien(): void {
    this.technologienService.getAllTechnologies().subscribe(
      technologien => this.technologien = technologien);
      console.log(this.technologien);
  }

  delete(technologie: Technologie): void {
    this.technologienService.deleteTechnologie(technologie._id).subscribe();
  }

  handleSize(event: any) {
    this.mybreakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
    }

  onSelect(technologie: Technologie){
    this.selectedTechnologie = technologie;
    this.editFormTriggerd = true;
  }

  public visibleUpdated($event: any): void {
    this.editFormTriggerd = $event;
  }
}
