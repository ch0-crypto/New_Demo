"use strict";

const modalOne = document.querySelector(".modal-1");
const modalTwo = document.querySelector(".modal-2");
const modalThree = document.querySelector(".modal-3");
const modalFour = document.querySelector(".modal-4");
const modalFive = document.querySelector(".modal-5");
const modalSix = document.querySelector(".modal-6");
const modalSeven = document.querySelector(".modal-7");
const modalEight = document.querySelector(".modal-8");
const modalNine = document.querySelector(".modal-9");
const modalTen = document.querySelector(".modal-10");
const modalEleven = document.querySelector(".modal-11");
const modalTwelve = document.querySelector(".modal-12");
const btnCloseModal = document.querySelector(".close-modal");
const CloseModal = document.querySelector(".close-modal1");
const Modal = document.querySelector(".close-modal2");
const dal = document.querySelector(".close-modal3");
const theFifit = document.querySelector(".close-modal4");
const theSix = document.querySelector(".close-modal5");
const theSeven = document.querySelector(".close-modal6");
const theEight = document.querySelector(".close-modal7");
const theNine = document.querySelector(".close-modal8");
const theTen = document.querySelector(".close-modal9");
const theEleven = document.querySelector(".close-modal10");
const theTwelve = document.querySelector(".close-modal11");
const overlay = document.querySelector(".overlay");
const carOne = document.querySelector(".car1");
const carTwo = document.querySelector(".car2");
const carThree = document.querySelector(".car3");
const carFour = document.querySelector(".car4");
const carFive = document.querySelector(".car5");
const carSix = document.querySelector(".car6");
const carSeven = document.querySelector(".car7");
const carEight = document.querySelector(".car8");
const carNine = document.querySelector(".car9");
const carTen = document.querySelector(".car10");
const carEleven = document.querySelector(".car11");
const carTwelve = document.querySelector(".car12");
const carParagraph = document.querySelector(".car-p");
const Paragraph = document.querySelector(".car-p1");
const graph = document.querySelector(".car-p2");
const map = document.querySelector(".car-p3");
const fifth = document.querySelector(".car-p4");
const six = document.querySelector(".car-p5");
const seven = document.querySelector(".car-p6");
const eight = document.querySelector(".car-p7");
const nine = document.querySelector(".car-p8");
const ten = document.querySelector(".car-p9");
const eleven = document.querySelector(".car-p10");
const twelve = document.querySelector(".car-p11");

carOne.addEventListener("click", function () {
  modalOne.classList.remove("hidden");
  overlay.classList.remove("hidden");
  console.log("button clicked");
});
carTwo.addEventListener("click", function () {
  modalTwo.classList.remove("hidden");
  console.log("button clicked");
});
carThree.addEventListener("click", function () {
  modalThree.classList.remove("hidden");
  console.log("button clicked");
});
carFour.addEventListener("click", function () {
  modalFour.classList.remove("hidden");
  console.log("button clicked");
});
carFive.addEventListener("click", function () {
  modalFive.classList.remove("hidden");
  console.log("button clicked");
});
carSix.addEventListener("click", function () {
  modalSix.classList.remove("hidden");
  console.log("button clicked");
});
carSeven.addEventListener("click", function () {
  modalSeven.classList.remove("hidden");
  console.log("button clicked");
});
carEight.addEventListener("click", function () {
  modalEight.classList.remove("hidden");
  console.log("button clicked");
});
carNine.addEventListener("click", function () {
  modalNine.classList.remove("hidden");
  console.log("button clicked");
});
carTen.addEventListener("click", function () {
  modalTen.classList.remove("hidden");
  console.log("button clicked");
});
carEleven.addEventListener("click", function () {
  modalEleven.classList.remove("hidden");
  console.log("button clicked");
});
carTwelve.addEventListener("click", function () {
  modalTwelve.classList.remove("hidden");
  console.log("button clicked");
});

// button add

btnCloseModal.addEventListener("click", function () {
  carParagraph.classList.add("hidden");
  console.log("clicked");
});
CloseModal.addEventListener("click", function () {
  Paragraph.classList.add("hidden");
  console.log("clicked");
});
Modal.addEventListener("click", function () {
  graph.classList.add("hidden");
  console.log("clicked");
});
dal.addEventListener("click", function () {
  map.classList.add("hidden");
  console.log("clicked");
});
theFifit.addEventListener("click", function () {
  fifth.classList.add("hidden");
  console.log("clicked");
});
theSix.addEventListener("click", function () {
  six.classList.add("hidden");
  console.log("clicked");
});
theSeven.addEventListener("click", function () {
  seven.classList.add("hidden");
  console.log("clicked");
});
theEight.addEventListener("click", function () {
  eight.classList.add("hidden");
  console.log("clicked");
});
theNine.addEventListener("click", function () {
  nine.classList.add("hidden");
  console.log("clicked");
});
theTen.addEventListener("click", function () {
  ten.classList.add("hidden");
  console.log("clicked");
});
theEleven.addEventListener("click", function () {
  eleven.classList.add("hidden");
  console.log("clicked");
});
theTwelve.addEventListener("click", function () {
  twelve.classList.add("hidden");
  console.log("clicked");
});
