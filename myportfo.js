document.addEventListener('DOMContentLoaded', () => {
  // Portfolio box click functionality
  const portfolioBoxes = document.querySelectorAll('.portfolio-box');
  
  portfolioBoxes.forEach((box) => {
    const content = box.querySelector('.content');
    // Initially hide all contents
    content.style.display = 'none';

    box.addEventListener('click', () => {
      // Toggle visibility of this box's content
      if (content.style.display === 'none') {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });

  // Certificate toggle functionality
  const toggleBtn = document.querySelector('.toggle-certificates');
  const certificateList = document.querySelector('.certificates-list');

  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    certificateList.classList.toggle('show');
    toggleBtn.textContent = certificateList.classList.contains('show')
      ? 'Hide Certificates'
      : 'Click here to explore more';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Toggle Resume section visibility
  const resumeToggleBtn = document.querySelector('.toggle-resume');
  const resumeList = document.querySelector('.resume-list');

  resumeToggleBtn.addEventListener('click', function (e) {
    e.preventDefault();
    resumeList.style.display =
      resumeList.style.display === 'none' ? 'block' : 'none';
    resumeToggleBtn.textContent =
      resumeList.style.display === 'block'
        ? 'Hide Resume Info'
        : 'Click here to explore more';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Toggle Projects section visibility
  const projectToggleBtn = document.querySelector('.toggle-projects');
  const projectList = document.querySelector('.projects-list');

  projectToggleBtn.addEventListener('click', function (e) {
    e.preventDefault();
    projectList.style.display =
      projectList.style.display === 'none' ? 'block' : 'none';
    projectToggleBtn.textContent =
      projectList.style.display === 'block'
        ? 'Hide Projects'
        : 'Click to explore more!';
  });
});
