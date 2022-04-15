"use strict";
(function() {
    window.addEventListener('load', init);


function init() {
   
    // (Given) When [#answer-btn] is clicked, call [showAnswer]
    id("answer-btn").addEventListener("click", showAnswer);
    // 2.1. When #start-btn is clicked, fillJar should be called.
    id("start-btn").addEventListener("click", fillJar);
  }

function showAnswer() {
    let greenSkittles=document.querySelectorAll(".green")
    console.log(greenSkittles);
    let myDiv = id("game-play");
    qs("#game-play > p").style.display="block";
    let greenskitttlenumber=qs("#count");
    greenskitttlenumber.innerHTML=greenSkittles.length;
  }
function fillJar() {
    var skittle=document.createElement("div");
    skittle.classList.add("skittle",getRandomColor())
    var element= document.getElementById("jar");
    element.appendChild(skittle);
    qs("#game-play > p").style.display= "none"; // Press start hide the answer
  }

 
  function getRandomColor() {
    let COLORS = ["red", "green", "blue"];
    let idx = Math.floor(Math.random() * COLORS.length); 
    return COLORS[idx];    
  }

  /* ----- Provided Shorthand Functions ------- */
  // Note: These are the three provided helper
  // functions shown in lecture/section. You may
  // use these in your own JS, but these are the
  // only functions you are allowed to use in
  // your own work as an exception to the course
  // Academic Conduct policy. These are also useful
  // examples of JSDoc comments!
  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id (null if none).
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} selector - CSS query selector
   * @returns {object[]} array of DOM objects matching the query (empty if none).
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector string.
   * @returns {object} first element matching the selector in the DOM tree (null if none)
   */
  function qs(selector) {
    return document.querySelector(selector);
  }
})();