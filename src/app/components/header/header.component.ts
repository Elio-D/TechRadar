import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showNewTechForm = false;

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
  }

  public visibleUpdated($event: any): void {
    this.showNewTechForm = $event;
  }

  loggedInAsAdmin(){
    if(localStorage.getItem('admin') == "true"){
      return true;
    } else {
      return false;
    }
  }
}
