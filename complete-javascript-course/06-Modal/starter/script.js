'use strict';
const model =document.querySelector('.model');
const overlay =document.querySelector('.overlay');
const btnCloseModel=document.querySelector('.close-model');
const btnsOpenModel=document.querySelectorAll('.show-modal');
console.log(btnsOpenModel);
for(let i=0;i<btnsOpenModel.length;i++)
btnsOpenModel[i].addEventListener('click',function () {
console.log("ButtonClicked!!");
model.classList.remove('overlay');
    model.style.display='block';
});

