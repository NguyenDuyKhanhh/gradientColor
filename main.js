const btnsColor = document.querySelectorAll(".buttons button")
const boardColor1 = document.querySelector(".board-color1")
const boardColor2 = document.querySelector(".board-color2")
const generate = document.querySelector("#generate")
const body = document.querySelector("body")
const textarea = document.querySelector('textarea')
const copyText = document.querySelector('.copy-textcolor button')
let color1 =''
let color2 = ''
let text = ''
let currentArrow = ''
function setBg(value,_this){
    for(let i of btnsColor){
    i.classList.remove('active')
    
   }
    _this.classList.add('active')
    currentArrow = value;
    
}
boardColor1.addEventListener("change",(e)=>{
    color1=e.target.value;
      console.log(color1)
})
boardColor2.addEventListener("change",(e)=>{
    color2=e.target.value;
      console.log(color2)
})
generate.addEventListener('click',()=>{
    console.log(body)
     text = body.style.backgroundImage = `linear-gradient(${currentArrow},${color1},${color2})`
     textarea.innerText= text
})
copyText.addEventListener('click',()=>{
    textarea.select()
    document.execCommand('copy')
    alert('Copied')
})