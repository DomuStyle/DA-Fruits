import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglefruitComponent } from './singlefruit.component';

describe('SinglefruitComponent', () => {
  let component: SinglefruitComponent;
  let fixture: ComponentFixture<SinglefruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglefruitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinglefruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
