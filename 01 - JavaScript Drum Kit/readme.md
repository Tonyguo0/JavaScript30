# JavaScript Drum Kit

This is a simple drum kit made with JavaScript. It allows you to play different drum sounds by pressing the corresponding keys on your keyboard.

## Learning points

- Using javascript to listen for keyboard events and trigger actions based on the key pressed. such as playing a sound and adding a visual effect to the corresponding key on the screen.
- Using CSS transitions to create a visual effect when a key is pressed, and then removing the effect after a short delay. This is done by adding a class to the key element when it is pressed, and then removing the class after a short delay using setTimeout. This creates a visual feedback for the user, making it clear which key was pressed and enhancing the overall user experience.
- Using the `data-key` attribute to associate each key element with a specific key code. This allows us to easily select the corresponding audio element and play the correct sound when a key is pressed.
- Using the `transitionend` event to listen for when a CSS transition has completed, and then removing the visual effect class from the key element. This ensures that the visual effect is removed at the right time, creating a smooth and responsive user experience.
- Using the `currentTime` property of the audio element to reset the sound to the beginning before playing it again. This allows us to play the same sound multiple times in quick succession without waiting for it to finish playing first.
- Using the `play()` method of the audio element to play the sound when a key is pressed. This allows us to create an interactive drum kit that responds to user input in real time.
- Using the `querySelector` method to select elements from the DOM based on their class or data attributes. This allows us to easily access and manipulate the elements we need to create our drum kit.
- Using the `addEventListener` method to listen for events such as `keydown` and `transitionend`, and to trigger functions when those events occur. This allows us to create an interactive user experience that responds to user input and changes in the state of the elements on the page.
- Using the `classList` property to add and remove classes from elements, which allows us to easily apply and remove styles based on user interactions.
- Using the `forEach` method to loop through a NodeList of elements and add event listeners to each one. This allows us to easily apply the same behavior to multiple elements without having to write separate code for each one.
- Using the `keyCode` property of the event object to determine which key was pressed, and to select the corresponding audio and key elements based on that key code. This allows us to create a responsive drum kit that plays the correct sound and applies the correct visual effect based on user input.
- Using the `removeEventListener` method to remove event listeners when they are no longer needed, which can help improve performance and prevent memory leaks in larger applications.
- Using the `setTimeout` function to delay the removal of the visual effect class from the key element, which allows us to create a more natural and responsive user experience. This is especially important for creating a drum kit, where users may want to play multiple sounds in quick succession without waiting for the previous sound to finish playing first.
