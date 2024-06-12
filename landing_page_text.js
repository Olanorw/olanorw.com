// landing_page_text.js

document.addEventListener("DOMContentLoaded", function() {
    const text = "Hi, I'm Olanorw.";
    const typingSpeed = 130; // Speed in milliseconds

    const landpageContainer = document.getElementById("landpage");

    const newLine = document.createElement("h1");
    newLine.id = "terminal-text"; // Add an ID
    newLine.classList.add("heading-primary"); // Add a CSS class
    newLine.innerHTML = '<span id="cursor">_</span>'; // Add cursor
    landpageContainer.appendChild(newLine);

    let i = 0;
    const terminalText = document.getElementById("terminal-text");
    const cursor = document.getElementById("cursor");

    function typeWriter() {
        if (i < text.length) {
            terminalText.innerHTML = text.slice(0, i) + '<span id="cursor">_</span>';
            i++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            cursor.style.display = 'none'; // Hide cursor after typing is complete
        }
    }

    setTimeout(typeWriter, 2000); // Start typing after 2 seconds

    set
});