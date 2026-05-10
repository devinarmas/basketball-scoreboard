
const scores = { home: 0, guest: 0 };

function updateDisplay() {
  document.getElementById('home-score').textContent = scores.home;
  document.getElementById('guest-score').textContent = scores.guest;
}

function addScore(team, pts) {
  scores[team] += pts;
  updateDisplay();
}