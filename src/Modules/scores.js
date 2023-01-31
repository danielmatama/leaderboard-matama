import {
  displaySection,
  name,
  score,
} from './itemDeclaration.js';

export {
  displaySection,
  name,
  score,
};

export class Score {
  availableScores;

  constructor() {
    this.getFromLocalStorage();
  }

  saveToLocalStorage = (addedScores) => localStorage.setItem('availableScores', JSON.stringify(addedScores));

  getFromLocalStorage = () => {
    this.availableScores = JSON.parse(localStorage.getItem('availableScores')) ?? [];
  };

  displayItem = () => {
    this.getFromLocalStorage();
    displaySection.innerHTML = '';
    this.availableScores.forEach((availableScore) => {
      displaySection.innerHTML += `<div class="availableScore">
        <p>${availableScore.name} : ${availableScore.score}</p>
        </div>`;
    });
  };

  addScore = (e) => {
    if (name.value === '' || score.value === '') {
      e.preventDefault();
    } else {
      const addedScore = {
        name: name.value,
        score: score.value,
      };
      this.availableScores.push(addedScore);
      this.clear();
      this.saveToLocalStorage(this.availableScores);
      this.displayItem();
    }
  };

clear = () => {
  name.value = '';
  score.value = '';
};
}
