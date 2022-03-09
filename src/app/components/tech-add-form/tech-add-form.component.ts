import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TechnologienService } from 'src/app/services/technologien.service';
import { Technologie } from '../../technologie'

@Component({
  selector: 'app-tech-add-form',
  templateUrl: './tech-add-form.component.html',
  styleUrls: ['./tech-add-form.component.css']
})
export class TechAddFormComponent implements OnInit {
  @Input() showNewTechForm?: boolean;
  @Output() formTriggerdEvent = new EventEmitter<boolean>();

  kategorie = ['Techniques', 'Platforms', 'Tools', 'Languages & Frameworks']
  ring = ['Hold', 'Assess', 'Trial', 'Adopt'];

  model = {
    name: "", 
    kategorie: "", 
    ring: "", 
    beschreibungTechnologie: "", 
    beschreibungEinordnung: "", 
    published: false
  };

  constructor(
    private technologienService: TechnologienService,
    ) { 
    }

    ngOnInit(): void {
    }

  onSubmit() { 
    this.showNewTechForm = false; 
    this.formTriggerdEvent.emit(this.showNewTechForm);
    const id = "" + Math.floor(100000000000 + Math.random() * 900000000000)
    console.log(id);
    const data = new Technologie(id, this.model.name, this.model.kategorie, this.model.ring, this.model.beschreibungTechnologie, this.model.beschreibungEinordnung, this.model.published)
    this.technologienService.addTechnologie(data)
        .subscribe();
    window.location.reload();
  }

  onCancel(){
    this.showNewTechForm = false; 
    this.formTriggerdEvent.emit(this.showNewTechForm);
  }


}
