import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { CartService } from '../../services/cart.service';
import { AnimateDirective } from '../../directives/animate.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, AnimateDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  featuredCourses: Course[] = [];
  isBrowser: boolean;

  constructor(
    private courseService: CourseService,
    public cartService: CartService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Get courses as featured (limited to 6)
    this.featuredCourses = this.courseService.getCourses().slice(0, 6);
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Any initialization logic
  }

  ngAfterViewInit() {
    // Start counter animation after view is initialized
    if (this.isBrowser) {
      this.initCounters();
    }
  }

  // Counter animation for stats section
  initCounters() {
    if (!this.isBrowser) return;

    setTimeout(() => {
      const counters = document.querySelectorAll('.counter');
      const speed = 200;

      counters.forEach(counter => {
        const target = +counter.textContent!;
        let count = 0;
        const increment = Math.ceil(target / speed);

        const updateCount = () => {
          if (count < target) {
            count += increment;
            if (count > target) count = target;
            counter.textContent = count.toString();
            setTimeout(updateCount, 10);
          }
        };

        updateCount();
      });
    }, 1000);
  }

  addToCart(course: Course): void {
    this.cartService.addToCart(course);

    // Ask user if they want to view cart or continue shopping
    if (confirm(`${course.title} added to cart! Would you like to view your cart?`)) {
      this.router.navigate(['/cart']);
    }
  }
}
