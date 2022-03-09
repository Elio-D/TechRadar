import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TechnologienService } from 'src/app/services/technologien.service';
import { Technologie } from 'src/app/technologie';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tech-edit-form',
  templateUrl: './tech-edit-form.component.html',
  styleUrls: ['./tech-edit-form.component.css']
})
export class TechEditFormComponent implements OnInit {

  @Input() technologie?: Technologie;
  @Input() showDetailForm?: boolean;
  @Output() formSubmittedEvent = new EventEmitter<boolean>();

  kategorie = ['Techniques', 'Platforms', 'Tools', 'Languages & Frameworks']
  ring = ['Hold', 'Assess', 'Trial', 'Adopt'];

  constructor(
    private technologienService: TechnologienService,
    private location: Location
  ) { }

  ngOnInit(): void {
    console.log(this.showDetailForm);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() { 
    this.showDetailForm = false; 
    this.formSubmittedEvent.emit(this.showDetailForm);
    if (this.technologie) {
      this.technologienService.updateTechnologie(this.technologie)
        .subscribe();
    }
    window.location.reload();
  }


  deleteTech() {
    this.showDetailForm = false; 
    console.log(this.showDetailForm);
    this.formSubmittedEvent.emit(this.showDetailForm);
    
    if (this.technologie) {
      this.technologienService.deleteTechnologie(this.technologie._id)
        .subscribe();
    }
    window.location.reload();
  }

  onCancel(){
    this.showDetailForm = false; 
    this.formSubmittedEvent.emit(this.showDetailForm);
  }
}
