document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      if (!name || !email || !message) {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      alert(`¡Gracias, ${name}! Tu mensaje ha sido enviado.`);
      form.reset();
    });
  });
  