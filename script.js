// Effet de fondu au chargement
window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  body.style.opacity = 0;
  setTimeout(() => {
    body.style.transition = "opacity 1s ease-in";
    body.style.opacity = 1;
  }, 100);
});

// Initialisation EmailJS
emailjs.init("HRBSuS_fO6WWQl7Mw");

// Fonction pour afficher l'énigme
function showEnigme() {
  const container = document.getElementById("enigmeContainer");
  if (container) {
    container.style.display = "block";
  }
}

// Envoi formulaire énigme
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enigmeForm");
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      emailjs.sendForm("service_33xo0km", "template_jvfh7hz", this)
        .then(() => {
          document.getElementById("message").style.display = "block";
          form.reset();
        }, (error) => {
          alert("❌ Erreur lors de l'envoi : " + JSON.stringify(error));
        });
    });
  }
});
