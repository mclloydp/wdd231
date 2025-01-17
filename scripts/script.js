// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('header');

menuToggle.addEventListener('click', () => {
  header.classList.toggle('nav-open');
});

// Course data array
const courses = [
  {
      subject: 'CSE',
      number: 110,
      title: 'Introduction to Programming',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
      technology: ['Python'],
      completed: true // Marked as completed
  },
  {
      subject: 'WDD',
      number: 130,
      title: 'Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.',
      technology: ['HTML', 'CSS'],
      completed: false
  },
  {
      subject: 'CSE',
      number: 111,
      title: 'Programming with Functions',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'Students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
      technology: ['Python'],
      completed: true // Marked as completed
  },
  {
      subject: 'CSE',
      number: 210,
      title: 'Programming with Classes',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level.',
      technology: ['C#'],
      completed: false
  },
  {
      subject: 'WDD',
      number: 131,
      title: 'Dynamic Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
      technology: ['HTML', 'CSS', 'JavaScript'],
      completed: true // Marked as completed
  },
  {
      subject: 'WDD',
      number: 231,
      title: 'Frontend Web Development I',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course focuses on user experience, accessibility, compliance, and basic API usage.',
      technology: ['HTML', 'CSS', 'JavaScript'],
      completed: false
  }
];

// DOM Elements
const courseContainer = document.getElementById('course-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const totalCreditsElement = document.getElementById('total-credits');

// Function to dynamically render courses
function renderCourses(filter = 'all') {
  courseContainer.innerHTML = ''; // Clear the container
  let totalCredits = 0;

  courses.forEach(course => {
      if (filter === 'all' || course.subject === filter) {
          // Increment total credits
          totalCredits += course.credits;

          // Create course card
          const courseCard = document.createElement('div');
          courseCard.classList.add('course-card');
          courseCard.style.backgroundColor = course.completed ? '#d4edda' : '#f8d7da'; // Green for completed, red for incomplete

          courseCard.innerHTML = `
              <h3>${course.subject} ${course.number}: ${course.title}</h3>
              <p>${course.description}</p>
              <p><strong>Credits:</strong> ${course.credits}</p>
              <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
          `;

          courseContainer.appendChild(courseCard);
      }
  });

  // Update total credits
  totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
}

// Event listener for filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));

      // Add active class to clicked button
      button.classList.add('active');

      // Render courses based on filter
      renderCourses(filter);
  });
});

// Initial rendering of courses
renderCourses();
