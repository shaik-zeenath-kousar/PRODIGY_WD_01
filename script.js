// Function to show a specific section and hide others
function showSection(sectionId) {
  // Get all sections
  const sections = document.querySelectorAll('.section');
  
  // Loop through each section and hide it
  sections.forEach(section => {
    section.style.display = 'none';
  });
  
  // Show the clicked section
  const activeSection = document.getElementById(sectionId);
  activeSection.style.display = 'block';
}
