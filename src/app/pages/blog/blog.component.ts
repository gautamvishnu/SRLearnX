import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  imageUrl: string;
  readTime: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Online Education: Trends to Watch in 2023',
      excerpt: 'Explore the emerging trends in online education that are shaping the future of learning in 2023 and beyond.',
      content: `
        <p>The landscape of online education is constantly evolving, with new technologies and methodologies emerging to enhance the learning experience. As we move further into 2023, several key trends are shaping the future of online education.</p>

        <h3>Artificial Intelligence and Personalized Learning</h3>
        <p>AI is revolutionizing online education by enabling personalized learning experiences tailored to individual students' needs. Adaptive learning platforms use AI algorithms to analyze student performance and adjust content difficulty, pacing, and format accordingly. This personalization helps students learn more effectively and efficiently.</p>

        <h3>Immersive Learning with VR and AR</h3>
        <p>Virtual Reality (VR) and Augmented Reality (AR) are transforming how students interact with educational content. These technologies create immersive learning environments that allow students to explore complex concepts in a hands-on way. From virtual field trips to interactive 3D models, VR and AR make learning more engaging and memorable.</p>

        <h3>Microlearning and Bite-sized Content</h3>
        <p>With decreasing attention spans and busy schedules, microlearning has gained popularity. This approach breaks down complex topics into small, manageable chunks that can be consumed in short sessions. Bite-sized content is easier to digest and remember, making it ideal for modern learners.</p>

        <h3>Gamification and Learning Through Play</h3>
        <p>Gamification elements like points, badges, leaderboards, and challenges are being integrated into online courses to increase engagement and motivation. By turning learning into a game-like experience, educators can make the process more enjoyable and effective.</p>

        <h3>Social Learning and Community Building</h3>
        <p>Online education is becoming more social, with platforms incorporating features that facilitate collaboration and community building. Discussion forums, group projects, and peer feedback mechanisms help create a sense of belonging and support among learners.</p>

        <h3>Conclusion</h3>
        <p>As technology continues to advance, the possibilities for online education are expanding. By embracing these trends, educational institutions and learners can take advantage of more effective, engaging, and accessible learning experiences. The future of online education looks promising, with innovations that will continue to transform how we learn and teach.</p>
      `,
      author: 'Dr. Priya Sharma',
      date: 'August 15, 2023',
      category: 'Education Technology',
      tags: ['Online Learning', 'EdTech', 'Future Trends', 'AI in Education'],
      imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Mastering Data Science: A Beginner\'s Guide',
      excerpt: 'Learn the essential skills and tools you need to start your journey in the exciting field of data science.',
      content: `
        <p>Data Science has become one of the most sought-after skills in today's job market. But for beginners, the field can seem overwhelming with its vast array of concepts, tools, and techniques. This guide aims to provide a clear roadmap for those starting their data science journey.</p>

        <h3>Understanding the Fundamentals</h3>
        <p>Before diving into complex algorithms and tools, it's essential to build a strong foundation in mathematics and statistics. Focus on understanding concepts like probability, statistical inference, linear algebra, and calculus. These fundamentals will help you grasp the underlying principles of data science algorithms.</p>

        <h3>Learning Programming Languages</h3>
        <p>Python and R are the most popular programming languages in data science. Python is versatile and has a wide range of libraries for data analysis and machine learning, while R is specifically designed for statistical analysis. As a beginner, start with Python due to its simpler syntax and broader applications.</p>

        <h3>Data Manipulation and Analysis</h3>
        <p>Learn how to clean, manipulate, and analyze data using libraries like Pandas in Python. Data cleaning is a crucial step in any data science project, as real-world data is often messy and incomplete. Practice working with different data formats and sources to build your skills.</p>

        <h3>Visualization Techniques</h3>
        <p>Data visualization is essential for understanding patterns and communicating insights. Libraries like Matplotlib, Seaborn, and Plotly in Python allow you to create compelling visualizations. Learn how to choose the right visualization for different types of data and questions.</p>

        <h3>Machine Learning Basics</h3>
        <p>Start with supervised learning algorithms like linear regression, logistic regression, and decision trees. Then move on to unsupervised learning techniques like clustering and dimensionality reduction. Libraries like Scikit-learn in Python provide easy-to-use implementations of these algorithms.</p>

        <h3>Building Projects</h3>
        <p>The best way to learn data science is by working on projects. Start with simple projects like analyzing a dataset or building a basic prediction model. As you gain confidence, tackle more complex problems. Building a portfolio of projects will also help you showcase your skills to potential employers.</p>

        <h3>Continuous Learning</h3>
        <p>Data science is a rapidly evolving field, so continuous learning is essential. Follow blogs, join online communities, and participate in competitions on platforms like Kaggle to stay updated and challenge yourself.</p>

        <h3>Conclusion</h3>
        <p>Becoming proficient in data science takes time and practice. By following this roadmap and consistently building your skills, you'll be well on your way to mastering this exciting and rewarding field. Remember, the journey is as important as the destination, so enjoy the process of learning and discovery.</p>
      `,
      author: 'Rahul Verma',
      date: 'July 28, 2023',
      category: 'Data Science',
      tags: ['Data Science', 'Machine Learning', 'Python', 'Beginners Guide'],
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80',
      readTime: '10 min read'
    },
    {
      id: 3,
      title: '5 Essential Skills Every Web Developer Should Master',
      excerpt: 'Discover the key skills that will set you apart as a web developer in today\'s competitive job market.',
      content: `
        <p>Web development is a dynamic field that requires a diverse set of skills. Whether you're just starting out or looking to advance your career, mastering these five essential skills will help you stand out as a web developer.</p>

        <h3>1. HTML, CSS, and JavaScript Fundamentals</h3>
        <p>These three languages form the foundation of web development. HTML provides the structure, CSS handles the presentation, and JavaScript adds interactivity. A deep understanding of these fundamentals is crucial before moving on to frameworks and libraries. Focus on semantic HTML, CSS layout techniques like Flexbox and Grid, and modern JavaScript (ES6+) features.</p>

        <h3>2. Responsive Design</h3>
        <p>With the increasing variety of devices used to access the web, responsive design has become non-negotiable. Learn how to create websites that adapt to different screen sizes and orientations. Master media queries, fluid layouts, and responsive images. Tools like Bootstrap and Tailwind CSS can help streamline the process, but understanding the underlying principles is essential.</p>

        <h3>3. Version Control with Git</h3>
        <p>Version control is vital for tracking changes, collaborating with others, and maintaining code quality. Git is the industry standard, so become proficient in commands for committing, branching, merging, and resolving conflicts. Platforms like GitHub, GitLab, or Bitbucket are commonly used in professional settings, so familiarize yourself with their features as well.</p>

        <h3>4. Modern JavaScript Frameworks</h3>
        <p>Frameworks like React, Angular, or Vue.js have revolutionized front-end development by providing efficient ways to build complex user interfaces. Choose one framework to specialize in initially, understanding its core concepts and best practices. This will make it easier to learn other frameworks later if needed, as many concepts transfer across different tools.</p>

        <h3>5. Backend Development and APIs</h3>
        <p>Even if you focus on front-end development, understanding how the backend works and how to interact with APIs is crucial. Learn a server-side language like Node.js, Python, or PHP, and understand concepts like RESTful APIs, authentication, and database interactions. This full-stack knowledge will make you more versatile and valuable as a developer.</p>

        <h3>Bonus: Soft Skills</h3>
        <p>Technical skills alone aren't enough in today's collaborative work environments. Develop your communication skills, problem-solving abilities, and time management. Learn to write clear documentation and explain technical concepts to non-technical stakeholders. These soft skills often differentiate good developers from great ones.</p>

        <h3>Conclusion</h3>
        <p>Web development is a field that requires continuous learning, as technologies and best practices evolve rapidly. By mastering these five essential skills and committing to ongoing education, you'll position yourself for success in this exciting and rewarding career. Remember that practical experience is invaluable, so apply these skills in real projects whenever possible.</p>
      `,
      author: 'Ananya Patel',
      date: 'July 10, 2023',
      category: 'Web Development',
      tags: ['Web Development', 'HTML', 'CSS', 'JavaScript', 'Career Tips'],
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80',
      readTime: '7 min read'
    },
    {
      id: 4,
      title: 'How to Prepare for a Career in Artificial Intelligence',
      excerpt: 'A comprehensive guide to building the skills and knowledge needed for a successful career in AI.',
      content: `
        <p>Artificial Intelligence (AI) is transforming industries across the globe, creating exciting career opportunities for those with the right skills and knowledge. If you're interested in pursuing a career in AI, this guide will help you navigate the path to success.</p>

        <h3>Build a Strong Foundation in Mathematics</h3>
        <p>AI relies heavily on mathematical concepts. Focus on developing a solid understanding of linear algebra, calculus, probability, and statistics. These mathematical foundations are essential for understanding the algorithms and models used in AI.</p>

        <h3>Develop Programming Skills</h3>
        <p>Python has emerged as the preferred language for AI development due to its simplicity and the availability of powerful libraries. Become proficient in Python and familiarize yourself with libraries like NumPy, Pandas, and Matplotlib for data manipulation and visualization.</p>

        <h3>Master Machine Learning Concepts</h3>
        <p>Machine learning is a core component of AI. Start with supervised learning algorithms like linear regression and decision trees, then progress to more complex techniques like neural networks and deep learning. Libraries such as Scikit-learn, TensorFlow, and PyTorch are essential tools for implementing these algorithms.</p>

        <h3>Gain Expertise in Deep Learning</h3>
        <p>Deep learning has driven many recent advances in AI. Learn about neural network architectures, convolutional neural networks (CNNs) for image processing, recurrent neural networks (RNNs) for sequential data, and transformers for natural language processing. Understanding these models and their applications is crucial for AI specialists.</p>

        <h3>Specialize in an AI Domain</h3>
        <p>AI encompasses various subfields, including computer vision, natural language processing, reinforcement learning, and robotics. Choose a specialization that aligns with your interests and career goals. Focusing on a specific domain will allow you to develop deeper expertise and stand out in the job market.</p>

        <h3>Work on Real-world Projects</h3>
        <p>Theory alone isn't enough. Apply your knowledge by working on practical projects that solve real problems. Build a portfolio showcasing your AI projects, which will be invaluable when applying for jobs. Consider participating in competitions on platforms like Kaggle to challenge yourself and learn from others.</p>

        <h3>Pursue Relevant Education</h3>
        <p>While self-learning is valuable, formal education in AI, computer science, or a related field can provide structured learning and networking opportunities. Consider pursuing a degree or specialized courses in AI. Many universities now offer AI-focused programs, and there are numerous online courses and certifications available.</p>

        <h3>Stay Updated with Research</h3>
        <p>AI is a rapidly evolving field with new research published regularly. Follow AI conferences like NeurIPS, ICML, and CVPR, read research papers, and stay updated with the latest developments. Platforms like arXiv and Google Scholar are great resources for accessing research papers.</p>

        <h3>Conclusion</h3>
        <p>Preparing for a career in AI requires dedication and continuous learning. By building a strong foundation in mathematics and programming, mastering machine learning and deep learning concepts, specializing in an AI domain, working on real-world projects, pursuing relevant education, and staying updated with research, you'll be well-equipped for a successful career in this exciting field.</p>
      `,
      author: 'Dr. Sanjay Mishra',
      date: 'June 22, 2023',
      category: 'Artificial Intelligence',
      tags: ['Artificial Intelligence', 'Machine Learning', 'Career Guide', 'Deep Learning'],
      imageUrl: 'https://images.unsplash.com/photo-1677442135968-6144fc1c8d14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80',
      readTime: '9 min read'
    },
    {
      id: 5,
      title: 'The Importance of Soft Skills in Technical Careers',
      excerpt: 'Discover why soft skills are just as crucial as technical expertise for success in the tech industry.',
      content: `
        <p>In the tech industry, there's often a strong emphasis on technical skills and expertise. While these hard skills are undoubtedly important, soft skills—the personal attributes that enable someone to interact effectively with others—are equally crucial for career success. This article explores why soft skills matter in technical careers and how to develop them.</p>

        <h3>Communication: Bridging the Technical Divide</h3>
        <p>The ability to communicate complex technical concepts in simple, understandable terms is invaluable. Whether you're explaining a solution to a non-technical client, documenting your code for future developers, or presenting your work to stakeholders, clear communication ensures your technical expertise is understood and appreciated. Practice translating technical jargon into plain language and tailoring your message to your audience's level of technical understanding.</p>

        <h3>Collaboration: The Power of Teamwork</h3>
        <p>Few tech projects are completed in isolation. Most require collaboration with designers, product managers, other developers, and stakeholders. Being able to work effectively in a team, share ideas, give and receive feedback, and resolve conflicts constructively is essential. Develop your collaboration skills by actively participating in team projects, being open to different perspectives, and focusing on collective goals rather than individual achievements.</p>

        <h3>Problem-Solving: Beyond Technical Solutions</h3>
        <p>While technical problem-solving is a core part of any tech role, many problems require a broader approach. Understanding the business context, considering user needs, and evaluating different solutions based on various factors (not just technical elegance) are all part of effective problem-solving. Enhance this skill by seeking to understand the "why" behind project requirements and considering multiple approaches before settling on a solution.</p>

        <h3>Adaptability: Thriving in a Changing Landscape</h3>
        <p>The tech industry evolves rapidly, with new tools, languages, and methodologies emerging regularly. Being adaptable—willing to learn new skills, adjust to changing priorities, and embrace new ways of working—is crucial for long-term success. Cultivate adaptability by staying curious, seeking out new learning opportunities, and maintaining a growth mindset that views challenges as opportunities to develop.</p>

        <h3>Empathy: Understanding Users and Colleagues</h3>
        <p>Empathy—the ability to understand and share the feelings of others—is particularly important in user-centered design and development. It also helps in working effectively with colleagues who may have different working styles or perspectives. Develop empathy by actively listening to others, seeking to understand their needs and viewpoints, and considering how your work affects them.</p>

        <h3>Time Management and Organization</h3>
        <p>Technical work often involves juggling multiple tasks, deadlines, and priorities. Strong time management and organizational skills help you stay productive, meet deadlines, and maintain work-life balance. Improve these skills by using productivity techniques like time blocking, breaking large tasks into smaller, manageable chunks, and regularly reviewing and adjusting your priorities.</p>

        <h3>Leadership: Influencing Without Authority</h3>
        <p>Even if you're not in a formal leadership role, the ability to influence others, advocate for best practices, and take initiative is valuable. Technical leadership often involves guiding decisions based on expertise rather than hierarchical authority. Develop leadership skills by taking ownership of your work, mentoring others when possible, and confidently sharing your knowledge and insights.</p>

        <h3>Conclusion</h3>
        <p>While technical skills may get you in the door, soft skills often determine how far you'll go in your career. By recognizing the importance of these skills and actively working to develop them, you'll not only become a more well-rounded professional but also increase your value to employers and your potential for career advancement. Remember that soft skills, like technical skills, can be learned and improved with practice and reflection.</p>
      `,
      author: 'Ritu Malhotra',
      date: 'June 5, 2023',
      category: 'Career Development',
      tags: ['Soft Skills', 'Career Growth', 'Communication', 'Leadership'],
      imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80',
      readTime: '8 min read'
    }
  ];

  selectedPost: BlogPost | null = null;
  searchTerm: string = '';
  selectedCategory: string = 'All';

  categories: string[] = ['All', 'Education Technology', 'Data Science', 'Web Development', 'Artificial Intelligence', 'Career Development'];

  get filteredPosts(): BlogPost[] {
    return this.blogPosts.filter(post => {
      // Search term filter
      const searchMatch = this.searchTerm === '' ||
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()));

      // Category filter
      const categoryMatch = this.selectedCategory === 'All' ||
        post.category === this.selectedCategory;

      return searchMatch && categoryMatch;
    });
  }

  selectPost(post: BlogPost): void {
    this.selectedPost = post;
    window.scrollTo(0, 0);
  }

  clearSelection(): void {
    this.selectedPost = null;
  }

  getRelatedPosts(currentPost: BlogPost): BlogPost[] {
    return this.blogPosts
      .filter(post => post.id !== currentPost.id &&
        (post.category === currentPost.category ||
         post.tags.some(tag => currentPost.tags.includes(tag))))
      .slice(0, 3);
  }
}
