import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    // Original courses
    {
      id: 1,
      title: 'Introduction to Web Development',
      description: 'Learn the basics of HTML, CSS, and JavaScript to build modern websites.',
      price: 37000,
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&h=180&q=80',
      instructor: 'John Doe',
      duration: '8 weeks',
      level: 'Beginner',
      rating: 4.5
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      description: 'Master JavaScript concepts like closures, promises, and async/await.',
      price: 45000,
      imageUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&h=180&q=80',
      instructor: 'Jane Smith',
      duration: '10 weeks',
      level: 'Intermediate',
      rating: 4.8
    },
    {
      id: 3,
      title: 'Angular Fundamentals',
      description: 'Build powerful web applications with Angular framework.',
      price: 55000,
      imageUrl: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5ndWxhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&h=180&q=80',
      instructor: 'Mike Johnson',
      duration: '12 weeks',
      level: 'Intermediate',
      rating: 4.7
    },

    // New courses from edu.viabledigiseva.com
    {
      id: 4,
      title: 'Data Science Fundamentals',
      description: 'Learn the core concepts of data science including data analysis, visualization, and machine learning algorithms.',
      price: 70000,
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&h=180&q=80',
      instructor: 'Dr. Priya Sharma',
      duration: '16 weeks',
      level: 'Intermediate',
      rating: 4.9
    },
    {
      id: 5,
      title: 'Electrical Engineering and Robotics',
      description: 'Comprehensive course covering electrical engineering principles and robotics applications with hands-on projects.',
      price: 65000,
      imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&h=180&q=80',
      instructor: 'Prof. Rajesh Kumar',
      duration: '20 weeks',
      level: 'Advanced',
      rating: 4.7
    },
    {
      id: 6,
      title: 'React Native Fundamental Course',
      description: 'Master React Native to build cross-platform mobile applications for iOS and Android with a single codebase.',
      price: 64000,
      imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjBuYXRpdmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&h=180&q=80',
      instructor: 'Vikram Mehta',
      duration: '14 weeks',
      level: 'Intermediate',
      rating: 4.8
    },
    {
      id: 7,
      title: 'Business Marketing with Finance',
      description: 'Comprehensive course covering marketing strategies, financial planning, and business development techniques.',
      price: 75000,
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&h=180&q=80',
      instructor: 'Neha Gupta',
      duration: '12 weeks',
      level: 'Intermediate',
      rating: 4.6
    },
    {
      id: 8,
      title: 'Cybersecurity Course',
      description: 'Learn to protect systems, networks, and programs from digital attacks with comprehensive cybersecurity training.',
      price: 70500,
      imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&h=180&q=80',
      instructor: 'Arjun Reddy',
      duration: '16 weeks',
      level: 'Advanced',
      rating: 4.9
    },
    {
      id: 9,
      title: 'Programming (Python, Java, C++)',
      description: 'Master multiple programming languages with this comprehensive course covering Python, Java, and C++.',
      price: 72000,
      imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&h=180&q=80',
      instructor: 'Rahul Verma',
      duration: '24 weeks',
      level: 'Beginner to Advanced',
      rating: 4.8
    },
    {
      id: 10,
      title: 'HTML, CSS, JavaScript Course',
      description: 'Comprehensive web development fundamentals course covering HTML, CSS, and JavaScript with practical projects.',
      price: 64500,
      imageUrl: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHRtbCUyMGNzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&h=180&q=80',
      instructor: 'Ananya Patel',
      duration: '10 weeks',
      level: 'Beginner',
      rating: 4.7
    },
    {
      id: 11,
      title: 'Introduction to Artificial Intelligence',
      description: 'Learn the fundamentals of AI including machine learning, neural networks, and natural language processing.',
      price: 73000,
      imageUrl: 'https://images.unsplash.com/photo-1677442135968-6144fc1c8d14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&h=180&q=80',
      instructor: 'Dr. Sanjay Mishra',
      duration: '12 weeks',
      level: 'Intermediate',
      rating: 4.6
    },
    {
      id: 12,
      title: 'Leadership & Management',
      description: 'Develop essential leadership skills and management techniques to excel in organizational settings.',
      price: 69300,
      imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhZGVyc2hpcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&h=180&q=80',
      instructor: 'Ritu Malhotra',
      duration: '8 weeks',
      level: 'Intermediate',
      rating: 4.8
    },

    // Additional courses to provide more variety
    {
      id: 13,
      title: 'UI/UX Design Principles',
      description: 'Master the fundamentals of user interface and user experience design.',
      price: 66991,
      imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dWklMjB1eHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&h=180&q=80',
      instructor: 'Sophia Martinez',
      duration: '8 weeks',
      level: 'Beginner',
      rating: 4.7
    },
    {
      id: 14,
      title: 'Mobile App Development with Flutter',
      description: 'Build cross-platform mobile apps with Flutter and Dart.',
      price: 69991,
      imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&h=180&q=80',
      instructor: 'Alex Turner',
      duration: '12 weeks',
      level: 'Intermediate',
      rating: 4.8
    },
    {
      id: 15,
      title: 'DevOps and CI/CD Pipelines',
      description: 'Learn DevOps practices and implement CI/CD pipelines for software delivery.',
      price: 59991,
      imageUrl: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2b3BzfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&h=180&q=80',
      instructor: 'James Anderson',
      duration: '10 weeks',
      level: 'Advanced',
      rating: 4.9
    }
  ];

  constructor() { }

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }
}
