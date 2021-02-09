'use strict';

const form = document.querySelector('.loginForm');
const inputName = document.querySelector('.name');
const loginText = document.querySelector('.loginText');
const todoForm = document.querySelector('.js-form');
const USER_LS = "currentUser",
NOSHOWING_CN = "no-showing",
SHOWING_CN = "showing";

function sameName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = inputName.value;
  paintGreeting(currentValue);
  sameName(currentValue);
}

function askFormName() {
  console.log(form);
  form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
  form.classList.add(NOSHOWING_CN);
  todoForm.classList.add(SHOWING_CN);
  loginText.innerText = `Hello ${text} 🙌`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null) {
    askFormName();
  }else {
    paintGreeting(currentUser);
  }
}

function main() {
  loadName();
}
main();