'use strict';

// // check for saved 'lightMode' in localStorage
// let darkMode = localStorage.getItem('darkMode'); 

// const darkModeToggle = document.querySelector('.label');

// const enabledarkMode = () => {
//     // 1. Add the class to the body
//     document.body.classList.add('darkmode');
//     // 2. Update darkMode in localStorage
//     localStorage.setItem('darkMode', 'enabled');
// }

// const disabledarkMode = () => {
//     const img = "img/LogoMM22.png";
//     // 1. Remove the class from the body
//     document.body.classList.remove('darkmode');
//     // 2. Update darkMode in localStorage 
//     localStorage.setItem('darkMode', null);
// }

// // If the user already visited and enabled darkMode
// // start things off with it on
// if (darkMode === 'enabled') {
//     enabledarkMode();
// }

// // When someone clicks the button
// darkModeToggle.addEventListener('click', () => {
//   // get their darkMode setting
//     darkMode = localStorage.getItem('darkMode'); 
    
//     // if it not current enabled, enable it
//     if (darkMode !== 'enabled') {
//         enabledarkMode();
//     // if it has been enabled, turn it off  
//     } else {  
//         disabledarkMode(); 
//     }
// });


// function myFunction() {
//   var element = document.body;
//   element.classList.toggle('is-night');
// }


const darkModeControl = () => {
  const darkCheck = document.getElementById('night-light-checkbox');

  darkCheck.addEventListener('click', () => {
    if (darkCheck.checked) {
      document.body.classList.add('dark');
      localStorage.setItem('animate-css', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.removeItem('animate-css');
    }
  })

  if (localStorage.getItem('animate-css')) {
    document.body.className = 'dark';
    darkCheck.checked = true;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  darkModeControl();
});