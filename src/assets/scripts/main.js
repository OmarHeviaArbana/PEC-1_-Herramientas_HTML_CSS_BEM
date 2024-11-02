/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".header__navbar-button-toggle");
  const menu = document.querySelector(".header__navbar-list");
  const icon = document.querySelector(".fa-bars");


  toggleButton.addEventListener("click", function () {
    menu.classList.toggle("header__navbar-list--active");
    icon.classList.toggle("fa-circle-xmark");
  });
});

