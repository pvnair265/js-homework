import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule, MdCardModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AddUserComponent} from '../user/add-user/add-user.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LogoutComponent } from '../account/logout.component';
import { UserDetailComponent } from '../user/detail.component';
import { APP_BASE_HREF } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserInfoComponent } from './user-info.component';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ],
      declarations: [ UserInfoComponent, DashboardComponent, LogoutComponent, UserDetailComponent, AddUserComponent ],
      imports: [ MaterialModule, AppRoutingModule, FormsModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
