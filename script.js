const ops = document.querySelectorAll('.ops');
const numbers = document.querySelectorAll('.numbers');
const equal = document.querySelector('.equals');
const clearAll = document.querySelector('.clearAll');
const del = document.querySelector('.del');

const history = document.querySelector('.previous');
const input = document.querySelector('.current');

let exp='';

clearAll.addEventListener('click',clear);

del.addEventListener('click',deleteItem);

numbers.forEach(function(btn){
    btn.addEventListener('mouseup',()=>{
        append(btn.textContent);
    })
})

ops.forEach(function(btn){
    btn.addEventListener('mouseup',()=>{
            append(btn.textContent);
    })
})

equal.addEventListener('click',calculate);

function clear(){
    history.textContent = '';
    input.textContent = '';
    exp = '';
}

function deleteItem(){
    exp = exp.slice(0,-1);
    input.textContent = exp;
}

function append(item){
    exp +=item;
    input.textContent = exp;
}

function calculate(){
    history.textContent = input.textContent;
    let ans = eval(exp);
    input.textContent = ans;
    exp = '';
}
