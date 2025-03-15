document.addEventListener('DOMContentLoaded', () => {
    const projects = {
      'Data Visualization': [
        {
          title: 'The State of Data Visualization',
          description: 'An analysis of global data visualization trends.',
          image: 'images/project1.jpg',
          link: 'https://medium.com/@yanhann10/the-state-of-data-visualization-6de999f9e386'
        },
        // Add more projects as needed
      ],
      'Creative Coding': [
        {
          title: 'Flow Fields',
          description: 'Interactive visualizations using p5.js.',
          image: 'images/project2.jpg',
          link: 'https://medium.com/@yanhann10/flow-fields-5e6a7f3a7c8'
        },
        // Add more projects as needed
      ],
      'Data Science': [
        {
          title: 'Predictive Modeling with Python',
          description: 'Building machine learning models for predictive analysis.',
          image: 'images/project3.jpg',
          link: 'https://github.com/yourusername/project3'
        },
        // Add more projects as needed
      ]
    };
  
    Object.keys(projects).forEach(category => {
      const categoryContainer = document.getElementById(category.toLowerCase().replace(' ', '-'));
      const projectList = categoryContainer.querySelector('.project-list');
      projects[category].forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `
          <img src="${project.image}" alt="${project.title}">
          <h4>${project.title}</h4>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectList.appendChild(projectItem);
      });
    });
  });
  