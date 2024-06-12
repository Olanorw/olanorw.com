// skills.js

document.addEventListener("DOMContentLoaded", function () {
    const skillElements = document.querySelectorAll('.skills__skill');
  
    skillElements.forEach(element => {
      element.addEventListener('mouseenter', function () {
        element.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease'; // Smooth transition on entering
        element.style.transform = 'translateY(-10px)'; // Initial lift
      });
  
      element.addEventListener('mousemove', function (e) {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2; // x position within the element
        const y = e.clientY - rect.top - rect.height / 2 - 10; // y position within the element (lifted by 10px)
  
        const rotateX = y / rect.height * 15; // Calculate rotation based on cursor position
        const rotateY = -x / rect.width * 15; // Calculate rotation based on cursor position
  
        element.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`; // Move up by 10px and rotate
        element.style.boxShadow = `${-x / 10}px ${y / 10}px 15px rgba(0, 0, 0, 0.2)`; // Adjust shadow for pseudo-3D effect
      });
  
      element.addEventListener('mouseleave', function () {
        element.style.transform = 'translateY(0) rotateX(0) rotateY(0)'; // Reset to original position
        element.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)'; // Reset shadow
      });
    });
  });
  