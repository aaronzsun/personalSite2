window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

new TypeIt("#header", {
    lifeLike: false,
    speed: 0
})
	.type("H")
	.pause(80)
	.type("i")
	.pause(80)
	.type(",")
	.pause(80)
	.type(" ")
	.pause(80)
	.type("I")
	.pause(80)
	.type("'")
	.pause(80)
	.type("m")
	.pause(80)
	.type(" ")
	.pause(80)
	.type("A")
	.pause(80)
	.type("a")
	.pause(80)
	.type("r")
	.pause(80)
	.type("o")
	.pause(80)
	.type("n")
	.pause(80)
	.type(".")
	.pause(80)
	.type(" ")
	.pause(700)
	.type("M")
	.pause(80)
	.type("y")
	.pause(80)
	.type(" ")
	.pause(80)
	.type("w")
	.pause(80)
	.type("e")
	.pause(80)
	.type("b")
	.pause(80)
	.type("s")
	.pause(80)
	.type("i")
	.pause(80)
	.type("t")
	.pause(80)
	.type("e")
	.pause(80)
	.type(" ")
	.pause(80)
	.type("i")
	.pause(80)
	.type("s")
	.pause(80)
	.type(" ")
	.pause(80)
	.type("u")
	.pause(80)
	.type("n")
	.pause(80)
	.type("d")
	.pause(80)
	.type("e")
	.pause(80)
	.type("r")
	.pause(80)
	.type(" ")
	.pause(80)
	.type("d")
	.pause(80)
	.type("e")
	.pause(80)
	.type("v")
	.pause(80)
	.type("e")
	.pause(80)
	.type("l")
	.pause(80)
	.type("o")
	.pause(80)
	.type("p")
	.pause(80)
	.type("m")
	.pause(80)
	.type("e")
	.pause(80)
	.type("n")
	.pause(80)
	.type("t")
	.pause(80)
	.type(".")
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
