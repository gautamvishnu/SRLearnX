import { Directive, ElementRef, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { AnimationService } from '../services/animation.service';

@Directive({
  selector: '[appAnimate]',
  standalone: true
})
export class AnimateDirective implements AfterViewInit, OnDestroy {
  @Input() animation: string = 'fadeIn';
  @Input() delay: number = 0;

  constructor(
    private el: ElementRef,
    private animationService: AnimationService
  ) {}

  ngAfterViewInit() {
    const element = this.el.nativeElement as HTMLElement;
    element.setAttribute('data-animation', this.animation);
    element.setAttribute('data-delay', this.delay.toString());
    this.animationService.observe(element);
  }

  ngOnDestroy() {
    this.animationService.unobserve(this.el.nativeElement);
  }
}