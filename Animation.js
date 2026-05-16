document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrambleTextPlugin);

  const greeting = document.querySelector('.presentation__greeting');
  const nameElement = document.querySelector('.presentation__name');

  // 🔥 1️⃣ Animación inicial del nombre
  if (nameElement) {
    gsap.from(nameElement, {
      duration: 2,
      scrambleText: {
        text: nameElement.textContent,
        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      }
    });
  }

  // 🔥 Función reutilizable para hover scramble
  function addScrambleHover(element) {
    if (!element) return;

    let originalText = element.textContent;

    let tween = gsap.to(element, {
      duration: 1.2,
      scrambleText: {
        text: originalText,
        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      },
      paused: true
    });

    element.addEventListener("mouseenter", () => {
      tween.restart();
    });
  }

  // 🔥 Aplicamos hover a ambos
  addScrambleHover(greeting);
  addScrambleHover(nameElement);

});