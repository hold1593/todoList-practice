'use strict';

const jsForm = document.querySelector('.js-form');
const jsInput = document.querySelector('.js-input');
const jsTodo = document.querySelector('.js-todo');
const jsDone = document.querySelector('.js-done');
const TODO_LS = 'toDos';
//const toDos = [];

// done 버튼 클릭 시 이벤트 처리
function doneEvent(doneBtn, delBtn) {
  doneBtn.parentNode.remove();
  jsDone.appendChild(doneBtn.parentNode);
  delBtn.classList.add('no-show');
  doneBtn.classList.add('no-show');
}

// list의 버튼 이벤트 
function clickBtn(event) {
  event.preventDefault();
  const currentBtn = event.target.innerHTML;

  if(currentBtn === 'Delete') {
    const delBtn = event.target;
    delBtn.parentNode.remove();
  }else{ 
    const doneBtn = event.target;
    const delBtn = event.target.previousSibling;
    doneEvent(doneBtn, delBtn);
  }
}

// list에 input값 나타내기
function paintList(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const delBtn = document.createElement('button');
  const doneBtn = document.createElement('button');
  span.innerText = text;
  delBtn.innerHTML = 'Delete';
  doneBtn.innerHTML = 'Done';
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(doneBtn);
  jsTodo.appendChild(li);
}

// input 값 받아오기 (작성 후 공백처리)
function handleSubmit(event){
  event.preventDefault();
  const currentValue = jsInput.value;
  currentValue === '' ? alert('Please enter at least 1 character') : paintList(currentValue);
  jsInput.value = '';
}

// 저장한 toDOs 불러오기
function loadTodos() {
  const loadToDos = localStorage.getItem(TODO_LS);
  if(loadToDos !== null) {
    
  }
}

// main 함수 
function main() {
  //loadTodos();
  jsForm.addEventListener('submit', handleSubmit);
  jsTodo.addEventListener('click', clickBtn);
}
main();