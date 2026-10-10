import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictcardComponent } from './districtcard.component';

describe('DistrictcardComponent', () => {
  let component: DistrictcardComponent;
  let fixture: ComponentFixture<DistrictcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
