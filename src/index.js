import './style.css';
import AddScore from './Modules/addScores.js';
import fetchScores from './Modules/fetchScores.js';

const form = document.forms[0];
const scoreList = document.querySelector('.list');
const refreshBtn = document.querySelector('.refresh');
const message = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = {
    name: form.name.value,
    score: form.score.value,
  };

  AddScore(user, message);
  form.reset();
});

[form.name, form.score].forEach((input) => {
  input.addEventListener('focus', () => {
    message.classList.remove('show');
  });
});

refreshBtn.addEventListener('click', () => {
  fetchScores(scoreList);
});