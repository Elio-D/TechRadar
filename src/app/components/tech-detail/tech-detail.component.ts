import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TechnologienService } from 'src/app/services/technologien.service';
import { Technologie } from 'src/app/technologie';

@Component({
  selector: 'app-tech-detail',
  templateUrl: './tech-detail.component.html',
  styleUrls: ['./tech-detail.component.css']
})
export class TechDetailComponent implements OnInit {

  @Input() technologie?: Technologie;
  @Input() showDetailMenu?: boolean;
  @Output() formSubmittedEvent = new EventEmitter<boolean>();

  constructor(
    private technologienService: TechnologienService,
  ) { }

  ngOnInit(): void {
  }

  onClose() { 
    this.showDetailMenu = false; 
    this.formSubmittedEvent.emit(this.showDetailMenu);
  }


}
