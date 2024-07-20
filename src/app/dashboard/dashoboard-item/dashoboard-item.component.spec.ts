import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashoboardItemComponent } from './dashoboard-item.component';

describe('DashoboardItemComponent', () => {
  let component: DashoboardItemComponent;
  let fixture: ComponentFixture<DashoboardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashoboardItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashoboardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
