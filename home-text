document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "Hi, I'm Olavorw.",
        "AKA Olav.",
        "I'm a software developer.",
        "Welcome to my website.",
        "Feel free to look around.",
        "I hope you enjoy your stay.",
        "Have a great day! :D"
    ];
    const typingSpeed = 130; // Speed in milliseconds
    const backspaceSpeed = 80; // Speed for backspacing
    const pauseBetweenTexts = 1000; // Pause between texts in milliseconds

    const landpageContainer = document.getElementById("landpage");

    const newLine = document.createElement("h1");
    newLine.id = "terminal-text"; // Add an ID
    newLine.classList.add("heading-primary"); // Add a CSS class
    newLine.innerHTML = '<span id="cursor">_</span>'; // Add cursor
    landpageContainer.appendChild(newLine);

    let i = 0;
    let textIndex = 0;
    const terminalText = document.getElementById("terminal-text");
    const cursor = document.getElementById("cursor");

    function typeWriter() {
        if (i < texts[textIndex].length) {
            terminalText.innerHTML = texts[textIndex].slice(0, i + 1) + '<span id="cursor">_</span>';
            i++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            if (textIndex < texts.length - 1) {
                setTimeout(backspace, pauseBetweenTexts); // Start backspacing after a pause
            } else {
                cursor.style.display = 'none'; // Hide cursor after all texts are complete
            }
        }
    }

    function backspace() {
        if (i > 0) {
            terminalText.innerHTML = texts[textIndex].slice(0, i - 1) + '<span id="cursor">_</span>';
            i--;
            setTimeout(backspace, backspaceSpeed);
        } else {
            textIndex++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    setTimeout(typeWriter, 2000); // Start typing after 2 seconds
});
