import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  model = new User('','')

  submitted = false;
  
  constructor(private usersService: UsersService,
    private _router: Router
    ) { }

  
  ngOnInit(): void {
    
  }

  onSubmit(){
    this.submitted = true; 
    this.usersService.loginUser(this.model).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.accessToken)
        if(this.model.benutzername == 'admin1'){
          localStorage.setItem('admin', 'true')
          this._router.navigate(['/admin'])
        } else {
          localStorage.setItem('admin', 'false')
          this._router.navigate(['/user'])
        }        
      },
      err => console.log(err)
      )
  }
}
