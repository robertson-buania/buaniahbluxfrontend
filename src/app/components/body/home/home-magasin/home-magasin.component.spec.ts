import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMagasinComponent } from './home-magasin.component';

describe('HomeMagasinComponent', () => {
  let component: HomeMagasinComponent;
  let fixture: ComponentFixture<HomeMagasinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMagasinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
