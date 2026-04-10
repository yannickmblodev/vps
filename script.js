const body = document.body;
const toggleBtn = document.getElementById('theme-toggle');
const yearSpan = document.getElementById('year');
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

yearSpan.textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  const isLight = body.classList.contains('light');
  toggleBtn.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  feedback.textContent = 'Merci ! Votre message a bien été envoyé.';
  form.reset();
});
