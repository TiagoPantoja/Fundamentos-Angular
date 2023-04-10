import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCustomizadaComponent } from './pipe-customizada.component';

describe('PipeCustomizadaComponent', () => {
  let component: PipeCustomizadaComponent;
  let fixture: ComponentFixture<PipeCustomizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeCustomizadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeCustomizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
