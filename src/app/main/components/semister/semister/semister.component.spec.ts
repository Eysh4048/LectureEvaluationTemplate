import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemisterComponent } from './semister.component';

describe('SemisterComponent', () => {
  let component: SemisterComponent;
  let fixture: ComponentFixture<SemisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
