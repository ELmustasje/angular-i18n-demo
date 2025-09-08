import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomJaspMF2 } from './tom-jasp-mf2';

describe('TomJaspMF2', () => {
  let component: TomJaspMF2;
  let fixture: ComponentFixture<TomJaspMF2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TomJaspMF2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TomJaspMF2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
