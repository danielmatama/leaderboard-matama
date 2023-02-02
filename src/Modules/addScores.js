const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OmGDLaPICGpgbissvUjm/scores/';

// add score to the API.
const AddScore = async (user, message) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: user.name,
      score: user.score,
    }),
  });

  const result = await response.json();
  message.innerHTML += '<strong>Success!</strong>';
  message.classList.add('show');
  result.result();
};

export default AddScore;