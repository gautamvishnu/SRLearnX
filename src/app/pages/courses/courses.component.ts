import { Component } from "@angular/core"; 
import { CommonModule } from "@angular/common";
import { CourseService } from "../../services/course.service";
import { Course } from "../../models/course.model";
import { CartService } from "../../services/cart.service";
import { RazorpayService } from "../../services/razorpay.service";

@Component({
  selector: "app-courses",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
})
export class CoursesComponent {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  selectedLevel: string = "all";
  searchTerm: string = "";

  levels = ["all", "Beginner", "Intermediate", "Advanced"];
  isLoading: boolean = false;

  constructor(
    private courseService: CourseService,
    public cartService: CartService,
    public razorpayService: RazorpayService
  ) {
    this.courses = this.courseService.getCourses();
    this.filteredCourses = [...this.courses];
  }

  filterByLevel(level: string): void {
    this.selectedLevel = level;
    this.applyFilters();
  }

  search(term: string): void {
    this.searchTerm = term.toLowerCase();
    this.applyFilters();
  }

  private applyFilters(): void {
    this.filteredCourses = this.courses.filter((course) => {
      // Apply level filter
      const levelMatch =
        this.selectedLevel === "all" || course.level === this.selectedLevel;

      // Apply search filter
      const searchMatch =
        this.searchTerm === "" ||
        course.title.toLowerCase().includes(this.searchTerm) ||
        course.description.toLowerCase().includes(this.searchTerm) ||
        course.instructor.toLowerCase().includes(this.searchTerm);

      return levelMatch && searchMatch;
    });
  }

  addToCart(course: Course): void {
    this.cartService.addToCart(course);
    // alert(`${course.title} added to cart!`);
    this.paymentWithRazorPay(course);
  }

  paymentWithRazorPay(course: Course) {
    this.isLoading = true;
    const payload = {
      partnerId: 51,
      amount: course.price,
      charge: 10,
      firstName: "Vishnu",
      mobile: "9990662544",
      email: "amaren1982@gmail.com",
      txnId: "",
      sUrl: "",
      ramarks: course.description,
    };
    this.razorpayService.initiateRazorpayGateway(payload).subscribe({
      next: (response: any) => {
        console.log(
          " initiateRazorpayGateway : ",
          response,
          response?.data?.orderId
        );
        this.isLoading = false;
        this.razorpayService.pay(response?.data?.orderId, 10);
      },
      error: (err) => {
        
        console.error("Error fetching bill details", err);
        this.isLoading = false;
      },
    });
  }
}
