import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautifyComponent } from './beautify.component';

describe('BeautifyComponent', () => {
  let component: BeautifyComponent;
  let fixture: ComponentFixture<BeautifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
