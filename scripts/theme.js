
const header = document.querySelector(".header")
const main = document.querySelector(".main")
const footer = document.querySelector(".footer")
const links = document.querySelectorAll(".nav__link")

let color = "";
let navColor = '';

if (localStorage.getItem("bg-color") !== null) {
  color = localStorage.getItem("bg-color")
  header.style.background = color
  footer.style.background = color
}
if (localStorage.getItem("linkColor") !== null) {

  navColor = localStorage.getItem("linkColor")
  links.forEach((el) => {
    el.style.color = navColor
    
  })
  
}

function choosedark() {
  header.style.background = "grey"
  header.style.transition = "0.3s ease-out 0.5s"
  main.style.background = "grey"
  main.style.transition = "0.3s ease-out 0.5s"
  footer.style.background = "black"
  footer.style.transition = "0.3s ease-out 0.5s"
  links.forEach((el) => {
    el.style.color = "purple"
    localStorage.setItem("linkColor", "grey")
  }) 
   localStorage.setItem("bg-color", "grey")
  localStorage.setItem("linkColor", "purple")
}
localStorage.setItem("bg-color", "grey")
function chooselight() {
  header.style.background = "blue"
  header.style.transition = "0.3s ease-out 0.5s"
  main.style.background = "blue"
  main.style.transition = "0.3s ease-out 0.5s"
  footer.style.background = "blue"
  footer.style.transition = "0.3s ease-out 0.5s"
  links.forEach((el) => {
    el.style.color = "black"
  })
  localStorage.setItem("bg-color", "blue")
localStorage.setItem("linkColor", "black")
}



