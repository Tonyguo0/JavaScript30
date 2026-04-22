# Learnt
- HTML5 Canvas is a powerful tool for drawing graphics on the web. It allows you to create dynamic and interactive visual content using JavaScript.
- The `<canvas>` element is used to define a drawing area in HTML. You can specify its width and height, and then use JavaScript to draw on it.
- The `getContext('2d')` method is used to get the 2D rendering context, which provides various methods for drawing shapes, text, images, and more.
- You can draw basic shapes like rectangles, circles, and lines using methods like `fillRect()`, `arc()`, and `moveTo()`.
- The `fillStyle` and `strokeStyle` properties allow you to set the color and style of the shapes you draw. You can use solid colors, gradients, or even patterns
- `ctx.beginPath()` is used to start a new path for drawing shapes. You can then use methods like `ctx.moveTo()`, `ctx.lineTo()`, and `ctx.closePath()` to define the shape, and finally use `ctx.fill()` or `ctx.stroke()` to render it on the canvas.
- `[lastX, lastY] = [e.offsetX, e.offsetY]` is a common pattern for tracking the last position of the mouse cursor on the canvas. This allows you to create smooth drawing effects as the user moves the mouse.
- Mouse `mousedown`, `mousemove`, and `mouseup` events are commonly used to handle drawing interactions on the canvas. the `[lastX, lastY] = [e.offsetX, e.offsetY]` can be used to update the last position of the mouse cursor during these events, allowing for continuous drawing as the user moves the mouse while holding down the button.
- The `lineWidth` property can be used to set the thickness of the lines you draw on the canvas. You can adjust it to create different effects and styles for your drawings.