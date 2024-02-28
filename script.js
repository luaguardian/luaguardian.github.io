let character = document.querySelector('div')
let test_btn = document.querySelector('button')
let score_display = document.querySelector('h1')

var width = 0
var last_width = width
var max_width = 100
var score = 0

function update() {
  character.animate(
    [{ width: `${last_width}px` }, { width: `${width}px` }],
    {
      fill: "forwards",
      delay: 0,
      easing: "ease-out",
      duration: 250,
    },
  ).play();
  
  last_width = width
  character.style.display = "block"
  score_display.innerText = `Score: ${score}`
}

function clicked(){
  width = width + 10
  
  if (width > max_width) {
    width = 0
    score += 10
  }
  
  update()
}

update()

test_btn.onclick = clicked;
