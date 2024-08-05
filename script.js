document.addEventListener('DOMContentLoaded', () => {
    const gameImage = document.getElementById('gameImage');
    const clickIcon = document.getElementById('clickIcon');
    const clickCountElem = document.getElementById('clickCount');
    const messageElem = document.getElementById('message');
    const progressBar = document.getElementById('progressBar');
    
    let clickCount = 0;
    const totalClicks = 1000;

    gameImage.addEventListener('click', () => {
        clickCount++;
        clickCountElem.textContent = clickCount;

        // Update progress bar
        const progressWidth = (clickCount / totalClicks) * 100;
        progressBar.style.width = `${progressWidth}%`;

        // Add animation class
        gameImage.classList.add('clicked');

        // Remove animation class after animation ends to allow it to be triggered again
        setTimeout(() => {
            gameImage.classList.remove('clicked');
        }, 600); // Match the duration of the animation

        if (clickCount >= totalClicks) {
            messageElem.textContent = 'Congratulations! You have won 50 XRD!';
            gameImage.style.pointerEvents = 'none'; // Disable further clicks
            progressBar.style.background = '#6a0dad'; // Change color when goal is reached
        }
    });
});
