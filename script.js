const fortunes = [
    "You will find great success in your endeavors.",
    "Happiness will come your way soon.",
    "Good fortune is coming your way!",
    "You are capable of achieving anything you desire.",
    "Your hard work will pay off.",
    "Expect great things to happen!",
    "You will soon receive an important message.",
    "Great job! Your hard work is about to pay off. Stay positive and keep pushing forward!",
    "Victory is just around the corner! Trust your instincts, and fortune will follow.",
    "You've shown great skill! Remember, success is not just a destination; it's a journey. Keep going!",
    "Your dedication will lead you to unexpected rewards. Embrace the adventure ahead!",
    "The universe has noticed your efforts! Keep your head up; amazing things are coming your way!",
    "Your determination shines brightly! Stay open to new opportunities; they’re just around the bend.",
    "Congratulations! You’re on the brink of something wonderful. Keep believing in yourself!",
    "Good fortune is drawn to your passion! Keep striving; your efforts will soon bear fruit."
];

document.getElementById('revealFortune').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortuneMessage = fortunes[randomIndex];
    document.getElementById('fortuneMessage').innerText = fortuneMessage;

    // Disable the button after revealing the fortune
    document.getElementById('revealFortune').disabled = true;
});
