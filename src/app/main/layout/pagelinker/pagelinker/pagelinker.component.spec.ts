import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagelinkerComponent } from './pagelinker.component';

describe('PagelinkerComponent', () => {
  let component: PagelinkerComponent;
  let fixture: ComponentFixture<PagelinkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagelinkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagelinkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
