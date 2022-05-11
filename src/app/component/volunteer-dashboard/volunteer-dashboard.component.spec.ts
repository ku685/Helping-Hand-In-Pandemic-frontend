import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { VolunteerDashboardComponent } from './volunteer-dashboard.component';

describe('VolunteerDashboardComponent', () => {
  let component: VolunteerDashboardComponent;
  let fixture: ComponentFixture<VolunteerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
