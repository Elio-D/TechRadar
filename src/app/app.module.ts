import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { TechAddFormComponent } from './components/tech-add-form/tech-add-form.component';
import { TechViewerComponent } from './components/tech-viewer/tech-viewer.component';
import { TechEditFormComponent } from './components/tech-edit-form/tech-edit-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { TechViewerUserComponent } from './components/tech-viewer-user/tech-viewer-user.component';
import { TechDetailComponent } from './components/tech-detail/tech-detail.component'; 

import { UsersService } from './services/users.service';
import { TechnologienService } from './services/technologien.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { AuthGuard } from './auth.guard';
import { AuthAdminGuard } from './auth-admin.guard';


import { FilterTechnologiePipe } from './pipes/filter-technologie.pipe'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TechAddFormComponent,
    TechViewerComponent,
    TechEditFormComponent,
    DashboardComponent,
    UserViewComponent,
    AdminViewComponent,
    FilterTechnologiePipe,
    TechViewerUserComponent,
    TechDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatListModule
  ],
  providers: [
    UsersService,
    TechnologienService,
    AuthGuard, AuthAdminGuard, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
