import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() showNewTechForm?: boolean;
  @Output() formTriggerdEvent = new EventEmitter<boolean>();

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
  }

  onSelect(){
      this.showNewTechForm = true; 
      this.formTriggerdEvent.emit(this.showNewTechForm);
  }

}
