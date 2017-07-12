import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule, MdCardModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { LogoutComponent } from '../../account/logout.component';
import { UserDetailComponent } from '../../user/detail.component';
import { UserInfoComponent } from '../../user-info/user-info.component';
import { APP_BASE_HREF } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserComponent } from './add-user.component';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoComponent, DashboardComponent, UserDetailComponent, AddUserComponent, LogoutComponent],
      imports: [ MaterialModule, RouterModule, AppRoutingModule, FormsModule, BrowserAnimationsModule ],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should define component', () => {
    expect(component).toBeTruthy();
  });

  it('all initial fields should be empty initially',() => {
    expect(component.email).toBeUndefined();
    expect(component.firstname).toBeUndefined();
    expect(component.lastname).toBeUndefined();
  })

  
});
