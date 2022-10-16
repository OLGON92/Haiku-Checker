import Haiku from './haiku.js';
import './css/styles.css';
import 'bootstrap';
import './css/styles.css';




function runapp (event) {
  event.preventDefault();
const lineOne = document.getElementById("lineOne");
const lineTwo = document.getElementById("lineTwo");
const lineThree = document.getElementById("lineThree");
}

window.addEventListener("load", function() {
  document.querySelector("form#poem-check").addEventListener("submit", runapp);
});