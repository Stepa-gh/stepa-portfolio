function toggleMenu() {
    const links = document.getElementById('nav-links');
    links.classList.toggle('show');
  }

  window.addEventListener("load", function () {
    document.getElementById("preloader").style.display = "none";
  });

  const modeToggle = document.getElementById('modeToggle');

  // Load dark mode preference
  if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    modeToggle.checked = true;
  }
  
  modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'disabled');
    }
  });
  const text = "Cybersecurity Student & Aspiring Developer";
const typingText = document.getElementById("typing-text");
const cursor = document.querySelector(".cursor");

let index = 0;

function type() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 80);
  } else {
    cursor.style.animation = "blink 0.7s infinite";
  }
}

type();
