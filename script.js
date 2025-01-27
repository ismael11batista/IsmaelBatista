// Menu Responsivo
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");
});

// Slider de Depoimentos
const slides = document.querySelectorAll(".testimonial-slide");
let currentSlide = 0;
const totalSlides = slides.length;

// Função para mostrar o slide atual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

// Inicializar slider
showSlide(currentSlide);

// Mudar slide a cada 5 segundos
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}, 5000);

// Formulário de Contato
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Captura os valores do formulário
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validação avançada
    if (name === "" || email === "" || subject === "" || message === "") {
      displayMessage("Por favor, preencha todos os campos.", "error");
      return;
    }

    if (!validateEmail(email)) {
      displayMessage("Por favor, insira um e-mail válido.", "error");
      return;
    }

    // Simulação de envio
    setTimeout(() => {
      displayMessage("Mensagem enviada com sucesso!", "success");
      document.getElementById("contact-form").reset();
    }, 1000);
  });

// Função para validar e-mail
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}

// Função para exibir mensagens
function displayMessage(message, type) {
  const msgDiv = document.getElementById("form-message");
  msgDiv.textContent = message;
  msgDiv.className = type;

  // Remover a mensagem após 5 segundos
  setTimeout(() => {
    msgDiv.textContent = "";
    msgDiv.className = "";
  }, 5000);
}

// Botão de Scroll to Top
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
