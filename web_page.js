let btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    alert('혹시 지금 날 누른거야?')
})

let red_btn = document.getElementById('red_btn');
let content = document.getElementById('content');

    red_btn.addEventListener('click',()=>{
        content.style.background='red';})

        
    blue_btn.addEventListener('click',()=>{
        content.style.background='blue';})

        
    green_btn.addEventListener('click',()=>{
        content.style.background='green';})