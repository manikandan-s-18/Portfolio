document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    const mailtoLink = `mailto:manikandansundar18@gmail.com?subject=New Contact Message from ${name}&body=${message}%0A%0AFrom: ${email}`;
    
    window.location.href = mailtoLink;
  });
  