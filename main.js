document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
      const accordionContent = button.nextElementSibling;
  
      document.querySelectorAll('.accordion-content').forEach(content => {
        if (content !== accordionContent) {
          content.style.display = 'none';
        }
      });
  
      document.querySelectorAll('.accordion-header').forEach(header => {
        if (header !== button) {
          header.classList.remove('active');
        }
      });
  
      if (button.classList.contains('active')) {
        accordionContent.style.display = 'none';
      } else {
        accordionContent.style.display = 'block';
      }
  
      button.classList.toggle('active');
    });
  });
  