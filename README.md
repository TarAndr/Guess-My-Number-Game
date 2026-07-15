# 🎮 Guess My Number Game

A sleek, highly responsive web game built with pure JavaScript (Vanilla JS). The player's goal is to guess a randomly generated secret number between 1 and 20 in the fewest attempts possible.

## 🚀 Live Demo
> You can play the game directly in your browser: **[Play Game Guess My Number](https://tarandr.github.io/Guess-My-Number-Game/)**

---

## ✨ Features & Architecture Highlights

* **Dynamic Theme Swapping**: The background colors of the main layout sections fluidly transition depending on the game outcome (Green for Victory, Red for Game Over) by manipulating CSS Variables (`--main-bg-color`) directly through JavaScript.
* **Persistent Highscore**: The best score is stored locally in the user's browser using `localStorage`. It persists across page refreshes and tab closures.
* **Clean Event Architecture**: Completely avoids event listener accumulation. Instead of dynamically binding and unbinding listeners during game cycles, UI state is securely managed using the HTML `disabled` attribute.
* **Streamlined UX/UI**:
  * Keyboard support allowed (submit guesses seamlessly by pressing the `Enter` key).
  * Robust input validation (prevents empty submissions, text inputs, or numbers outside the 1–20 range).
  * Smart input field clearing (the field clears only upon valid entries, keeping errors visible so users can see what went wrong).
  * Safe highscore resetting with a confirmation modal (`confirm`) to prevent accidental data loss.

---

## 🛠️ Tech Stack

* **HTML5**: Semantic and accessible application layout.
* **CSS3**: Modern styling with native CSS custom properties (`:root`, `var()`) and smooth animated state changes (`transition`).
* **JavaScript (ES6+)**: Plain Vanilla JS without any external frameworks or dependencies. Organised around structured, isolated, and state-driven functions.

---

## 📦 Local Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TarAndr/Guess-My-Number-Game.git
   ```
2. Navigate into the project folder:
   ```bash
   cd Guess-My-Number-Game
   ```
3. Open `index.html` in your favorite browser (or launch it using the *Live Server* extension in VS Code).

---

## 📝 JavaScript Logic Breakdown

The codebase is highly modular and split into dedicated, single-responsibility functions:
* `resetGame()` – Initialises or resets the game state and handles layout restoration.
* `checkAnswer()` – Handles strict validation of user inputs.
* `compareAnswer()` – Calculates differences between the user's guess and the target number.
* `youWin()` / `gameOver()` – Evaluates end-game states, updates highscores, and freezes inputs.
* `clearHS()` – Safely purges persistent records from `localStorage`.
