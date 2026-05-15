import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private renderer: Renderer2;
  private observer: IntersectionObserver | null = null;
  private isBrowser: boolean;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.setupIntersectionObserver();
    }
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const animation = element.getAttribute('data-animation');
          const delay = element.getAttribute('data-delay');

          if (animation) {
            this.renderer.addClass(element, 'animate__animated');
            this.renderer.addClass(element, `animate__${animation}`);
            
            if (delay) {
              element.style.animationDelay = `${delay}ms`;
            }

            // If animation should only play once
            this.observer?.unobserve(element);
          }
        }
      });
    }, options);
  }

  observe(element: HTMLElement): void {
    if (this.isBrowser && this.observer) {
      this.observer.observe(element);
    }
  }

  unobserve(element: HTMLElement): void {
    if (this.isBrowser && this.observer) {
      this.observer.unobserve(element);
    }
  }
}