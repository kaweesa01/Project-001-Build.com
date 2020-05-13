///////////hidding logo

const logo = document.querySelector('.logo')
const show = document.querySelector('.show')
const Hide = document.querySelectorAll('.hide')

show.addEventListener('click',function(){
    logo.setAttribute("style", `--logoVisiBility:visible`);
})

Hide.forEach(function(e){
  e.addEventListener('click',function(){
    logo.setAttribute("style", `--logoVisiBility:hidden`);
  })
})

