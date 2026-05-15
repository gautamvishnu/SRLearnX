import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  postedDate: string;
}

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  jobPositions: JobPosition[] = [
    {
      id: 1,
      title: 'Senior Angular Developer',
      department: 'Engineering',
      location: 'Gurgaon, India (Remote)',
      type: 'Full-time',
      description: 'We are looking for a Senior Angular Developer to join our growing team. You will be responsible for developing and maintaining web applications using Angular, working closely with our product and design teams to create intuitive user experiences.',
      requirements: [
        'At least 4 years of experience with Angular (2+)',
        'Strong understanding of TypeScript, RxJS, and NgRx',
        'Experience with responsive design and CSS frameworks',
        'Knowledge of RESTful APIs and integration',
        'Bachelor\'s degree in Computer Science or related field'
      ],
      postedDate: '2023-06-15'
    },
    {
      id: 2,
      title: 'Data Science Instructor',
      department: 'Education',
      location: 'Delhi, India',
      type: 'Full-time',
      description: 'Join our team as a Data Science Instructor to teach and mentor students in our data science courses. You will be responsible for delivering lectures, creating course materials, and providing guidance to students on projects and assignments.',
      requirements: [
        'At least 3 years of experience in data science or related field',
        'Proficiency in Python, R, and SQL',
        'Experience with machine learning frameworks and libraries',
        'Strong communication and presentation skills',
        'Master\'s degree in Data Science, Statistics, or related field'
      ],
      postedDate: '2023-07-02'
    },
    {
      id: 3,
      title: 'Content Developer - Web Development',
      department: 'Content',
      location: 'Bangalore, India (Hybrid)',
      type: 'Full-time',
      description: 'We are seeking a Content Developer specializing in web development to create high-quality educational content for our courses. You will be responsible for developing curriculum, writing tutorials, and creating coding exercises for our web development courses.',
      requirements: [
        'At least 2 years of experience in web development',
        'Strong knowledge of HTML, CSS, JavaScript, and modern frameworks',
        'Experience in content creation or technical writing',
        'Ability to explain complex concepts in simple terms',
        'Bachelor\'s degree in Computer Science or related field'
      ],
      postedDate: '2023-07-10'
    },
    {
      id: 4,
      title: 'Student Success Manager',
      department: 'Student Support',
      location: 'Mumbai, India',
      type: 'Full-time',
      description: 'As a Student Success Manager, you will be responsible for ensuring our students have a positive learning experience. You will provide support, track student progress, and implement strategies to improve course completion rates and student satisfaction.',
      requirements: [
        'At least 2 years of experience in education or customer success',
        'Strong interpersonal and communication skills',
        'Experience with CRM systems and data analysis',
        'Problem-solving abilities and attention to detail',
        'Bachelor\'s degree in Education, Business, or related field'
      ],
      postedDate: '2023-07-15'
    },
    {
      id: 5,
      title: 'Marketing Specialist - Digital Education',
      department: 'Marketing',
      location: 'Gurgaon, India',
      type: 'Full-time',
      description: 'We are looking for a Marketing Specialist to help grow our online education platform. You will be responsible for developing and implementing marketing strategies, managing social media campaigns, and analyzing marketing performance.',
      requirements: [
        'At least 3 years of experience in digital marketing',
        'Experience with social media marketing and content creation',
        'Knowledge of SEO, SEM, and email marketing',
        'Analytical skills and experience with marketing tools',
        'Bachelor\'s degree in Marketing, Business, or related field'
      ],
      postedDate: '2023-07-20'
    }
  ];

  selectedJob: JobPosition | null = null;
  searchTerm: string = '';
  filterDepartment: string = 'All';
  filterLocation: string = 'All';

  departments: string[] = ['All', 'Engineering', 'Education', 'Content', 'Student Support', 'Marketing'];
  locations: string[] = ['All', 'Gurgaon, India', 'Delhi, India', 'Bangalore, India', 'Mumbai, India'];

  applyForm = {
    name: '',
    email: '',
    phone: '',
    resume: '',
    coverLetter: ''
  };

  isSubmitted = false;

  get filteredJobs(): JobPosition[] {
    return this.jobPositions.filter(job => {
      // Search term filter
      const searchMatch = this.searchTerm === '' ||
        job.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(this.searchTerm.toLowerCase());

      // Department filter
      const departmentMatch = this.filterDepartment === 'All' ||
        job.department === this.filterDepartment;

      // Location filter
      const locationMatch = this.filterLocation === 'All' ||
        job.location.includes(this.filterLocation);

      return searchMatch && departmentMatch && locationMatch;
    });
  }

  selectJob(job: JobPosition): void {
    this.selectedJob = job;
    window.scrollTo(0, 0);
  }

  clearSelection(): void {
    this.selectedJob = null;
  }

  submitApplication(): void {
    // In a real application, this would send the form data to a server
    console.log('Application submitted:', this.applyForm);
    this.isSubmitted = true;

    // Reset form after submission
    setTimeout(() => {
      this.applyForm = {
        name: '',
        email: '',
        phone: '',
        resume: '',
        coverLetter: ''
      };
      this.isSubmitted = false;
      this.selectedJob = null;
    }, 3000);
  }
}
