# Learnings
- CSS variables are defined using the `--` prefix and can be accessed using the `var()` function.
- They can be defined globally (e.g., on the `:root` selector) or locally within specific selectors.
- CSS variables can be used to store values such as colors, fonts, spacing, and more, allowing for easier maintenance and consistency across a website.
- They can be updated dynamically using JavaScript, enabling real-time changes to the styles of a webpage.
- CSS variables can also be used in media queries, allowing for responsive design adjustments based on different screen sizes or conditions.
- They can be inherited by child elements, making it easier to manage styles across a hierarchy of elements.
```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
}
.button {
  background-color: var(--primary-color);
  color: white;
}
.button:hover {  background-color: var(--secondary-color);
}
```
- In the example above, we define two CSS variables for primary and secondary colors. The `.button` class uses the primary color for its background, and on hover, it changes to the secondary color. This allows for easy updates to the color scheme by simply changing the values of the CSS variables in one place.
- CSS variables can also be used in conjunction with JavaScript to create dynamic themes or user preferences. For example, you can allow users to switch between light and dark modes by updating the CSS variables accordingly.
```javascript
function toggleTheme() {
  const root = document.documentElement;
  if (root.style.getPropertyValue('--primary-color') === '#3498db') {
    root.style.setProperty('--primary-color', '#2c3e50');
    root.style.setProperty('--secondary-color', '#ecf0f1');
  } else {
    root.style.setProperty('--primary-color', '#3498db');
    root.style.setProperty('--secondary-color', '#2ecc71');
  }
}
```

- In this JavaScript function, we toggle between two themes by changing the values of the CSS variables. When the function is called, it checks the current value of the `--primary-color` variable and updates it accordingly, allowing for a seamless theme switch without needing to modify individual CSS rules.
- Overall, CSS variables provide a powerful way to manage and maintain styles in a more efficient and flexible manner, making it easier to create consistent designs and adapt to changes across a website.

EXAMPLES for input type **range**: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/range#examples