document.addEventListener('keydown', (event) => {
    let keyPressed = event.key.toLowerCase();

	const beat = document.querySelector(`#${keyPressed}`).textContent;

	const audio = new Audio(`./sounds/${beat}.wav`);
	audio.play();
});


// pseudocode
// add an event listener, that listens for keypress event
// when a key is pressed, get the key value 
// use the key value to select the corresponding element from the DOM, and then get its text content
// create a new Audio object using the URL to the beat sound file
// play audio