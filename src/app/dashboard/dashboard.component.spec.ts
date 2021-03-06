import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddUserComponent} from '../user/add-user/add-user.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule, MdCardModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import { LogoutComponent } from '../account/logout.component';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserDetailComponent } from '../user/detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, LogoutComponent, UserDetailComponent, AddUserComponent ],
      imports: [MaterialModule, AppRoutingModule, FormsModule, BrowserAnimationsModule],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
