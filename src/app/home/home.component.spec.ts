import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef, Renderer2 } from '@angular/core';
import { ParallaxService } from '../parallax_effect/parallax.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let parallaxService: ParallaxService;
  let renderer: Renderer2;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [ParallaxService, Renderer2]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    parallaxService = TestBed.inject(ParallaxService);
    renderer = TestBed.inject(Renderer2);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngAfterViewInit should call applyParallax', () => {
    const spy = spyOn(parallaxService, 'applyParallax');
    component.ngAfterViewInit();
    expect(spy).toHaveBeenCalledWith(component.elem.nativeElement);
  });

  it('updatePosition should update element position', () => {
    const mockMouseEvent = new MouseEvent('mousemove', { clientX: 100, clientY: 200 });
    component.mouseX = 100;
    component.mouseY = 200;
    component.elem1 = { nativeElement: { style: { top: '', left: '' } } } as ElementRef;
    component.updatePosition();
    expect(component.elem1.nativeElement.style.top).toBe('200px');
    expect(component.elem1.nativeElement.style.left).toBe('100px');
  });
 
});
