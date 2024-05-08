import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef, Renderer2 } from '@angular/core';
import { InfoComponent } from './info.component';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;
  let renderer: Renderer2;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoComponent],
      providers: [Renderer2]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    renderer = TestBed.inject(Renderer2);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('showModal should set modal visibility to true', () => {
    component.showModal('modal1');
    expect(component.modal1Visible).toBe(true);
  });

  it('hideModal should set modal visibility to false', () => {
    component.modal1Visible = true;
    component.hideModal('modal1');
    expect(component.modal1Visible).toBe(false);
  });
 
});
