window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

new TypeIt("#header", {
    speed: 60,
})
  .type("Hi")
  .pause(500)
  .type(", I'm Aaron.")
  .pause(1000)
  .type(" I study Math, CS, & Econ @ Harvard.")
  .go();

function showAbout(){
    document.querySelector('#content-2').scrollIntoView({ 
        behavior: 'smooth' 
      });
}

function showResume(){
    document.querySelector('#content-3').scrollIntoView({ 
        behavior: 'smooth' 
      });
}

function showContact(){
    document.querySelector('#content-4').scrollIntoView({ 
        behavior: 'smooth' 
      });
}