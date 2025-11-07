// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.

const mainnav = document.querySelector('.navigation');
3
const hambutton = document.querySelector('#menu');
4
​
5
// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
6
hambutton.addEventListener('click', () => {
7
  mainnav.classList.toggle('show');
8
  hambutton.classList.toggle('show');
9
});
10
​
11
/* ❔What does toggle mean?
12
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
13
The CSS class rules will handle the different views, layouts, and displays.
14
🗝️ JavaScript only applies the class value or not.
15
*/
16
​
17
​


