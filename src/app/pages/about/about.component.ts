import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

interface Testimonial {
  content: string;
  name: string;
  position: string;
  imageUrl: string;
}

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent {
  stats = [
    { value: "1K+", label: "Enrolled Students" },
    { value: "4.9", label: "Average Rating (8.6K Reviews)" },
    { value: "90%", label: "Success Rate" },
    { value: "100+", label: "Expert Instructors" },
  ];

  teamMembers: TeamMember[] = [
    {
      name: "Riya Patel",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in education technology, Riya founded SRLearnX with a vision to make quality education accessible to everyone.",
      imageUrl: "https://via.placeholder.com/300x300.png?text=Riya+Patel",
    },
    {
      name: "Akshay Mistry",
      position: "Chief Learning Officer",
      bio: "Akshay brings his expertise in curriculum development and instructional design to ensure our courses meet the highest standards of educational excellence.",
      imageUrl: "https://via.placeholder.com/300x300.png?text=Akshay+Mistry",
    },
    {
      name: "Priya Sharma",
      position: "Head of Technology",
      bio: "Priya leads our technology team, ensuring that our platform provides a seamless and engaging learning experience for all students.",
      imageUrl: "https://via.placeholder.com/300x300.png?text=Priya+Sharma",
    },
    {
      name: "Rahul Verma",
      position: "Director of Student Success",
      bio: "Rahul and his team are dedicated to supporting our students throughout their learning journey, helping them achieve their goals.",
      imageUrl: "https://via.placeholder.com/300x300.png?text=Rahul+Verma",
    },
  ];

  testimonials: Testimonial[] = [
    {
      content:
        "I can't thank SRLearnX enough for the incredible courses they offer. I completed the 'Web Development Fundamentals' course, and it not only gave me the skills I needed but also the confidence to pursue a career in this field.",
      name: "Riya Patel",
      position: "Web Developer",
      imageUrl: "https://via.placeholder.com/100x100.png?text=Riya+P",
    },
    {
      content:
        "SRLearnX's courses are exceptionally well-structured and practical. The 'App Development Fundamentals' course helped me transition into mobile development, and I'm now working on projects I never thought I could handle.",
      name: "Akshay Mistry",
      position: "App Developer",
      imageUrl: "https://via.placeholder.com/100x100.png?text=Akshay+M",
    },
    {
      content:
        "The quality of instruction at SRLearnX is outstanding. The instructors are not only knowledgeable but also passionate about teaching. The 'Data Science Essentials' course transformed my career path completely.",
      name: "Neha Gupta",
      position: "Data Analyst",
      imageUrl: "https://via.placeholder.com/100x100.png?text=Neha+G",
    },
  ];

  plans = [
    {
      name: "Basic Plan",
      price: "₹15,999",
      period: "/Per Month",
      features: [
        "Access to select courses",
        "Limited community support",
        "Monthly progress reports",
        "Certificate of completion",
      ],
      recommended: false,
    },
    {
      name: "Standard Plan",
      price: "₹29,999",
      period: "/Per Month",
      features: [
        "Access to all courses",
        "Priority support",
        "Weekly progress reports",
        "Certificate of completion",
      ],
      recommended: true,
    },
    {
      name: "Premium Plan",
      price: "₹39,999",
      period: "/Per Month",
      features: [
        "All courses and resources",
        "Priority support & response",
        "Weekly reports & feedback",
        "Certificate of completion",
      ],
      recommended: false,
    },
  ];

  selectedPlanType: "monthly" | "yearly" = "monthly";

  togglePlanType(type: "monthly" | "yearly"): void {
    this.selectedPlanType = type;
  }

  isPlanTypeSelected(type: "monthly" | "yearly"): boolean {
    return this.selectedPlanType === type;
  }
}
