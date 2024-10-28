const fortunes = [
    "You will find great success in your endeavors.",
    "Happiness will come your way soon.",
    "An exciting opportunity awaits you.",
    "You will make a new friend today.",
    "Good fortune is coming your way!",
    "You are capable of achieving anything you desire.",
    "Your hard work will pay off.",
    "Expect great things to happen!",
    "You will soon receive an important message.",
    "A pleasant surprise is waiting for you."
];

document.getElementById('revealFortune').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortuneMessage = fortunes[randomIndex];
    document.getElementById('fortuneMessage').innerText = fortuneMessage;

    // Disable the button after revealing the fortune
    document.getElementById('revealFortune').disabled = true;
});
