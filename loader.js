var loader =document.querySelector(".loader")
var na = document.querySelector(".cid-s7CJva1tdF .navbar")
var corcontrol = document.getElementById("corcontrol");
var maincontainer = document.getElementById("maincontainer")
window.addEventListener("load",()=>{
// loader.style.display = "flex";
window.setTimeout(function()
     { 
loader.classList.add("afterload")
na.style.display ="flex";
console.log(corcontrol);
if(corcontrol!=null)
  {corcontrol.style.display = "flex";}
maincontainer.classList.remove("saavu");
maincontainer.style.opacity = "1";
},4000)})

var animate = anime.timeline({
	duration :2000,
	loop :true,
	direction : "alternate"
})

var animate1 = anime.timeline({duration : 1000,direction:"alternate",loop:true})

animate.add({
	targets : ".circle1",
	scale : [0,1],
	translateY : [-30,0,],
	// direction : "alternate",
	// rotate :180
  fill : ["#FFFFFF","#f47a27"],
	delay : anime.stagger (200 , {grid : [1,3],from :"center"}),
	duration :1000
})

animate1.add({
            targets: '#orange path',
          strokeDashoffset:[anime.setDashoffset,0],
          scale : [0.9,1],
          easing : "linear",
          fill : ["#FFFFFF","#f47a27"],
          stroke : "#f47a27",
          duration :1000,
          delay: function(el, i) { return i * 250 }
})

// //brown

animate1.add({
            targets: '#brown path',
          strokeDashoffset:[anime.setDashoffset,0],
          scale : [0.9,1],
          easing : "linear",
          fill : ["#FFFFFF","#552402"],
          stroke :"#552402",
          duration :1000,
          delay: function(el, i) { return i * 250 }
},"-=1000")

// animate.add({
//      targets : "#logo",
//      scale :[0.8,1],
//      duration :2000,
//      easing :"linear"
// },"-=2500")
// animate.add({
// 	targets : ".grid-item",
// 	scale : [1,0],
// 	translateY : [0,-50,],
// 	// direction : "alternate",
// 	// rotate :180,
// 	elasticity : 10,
// 	delay : anime.stagger (200 , {grid : [1,3],from :"center"}),
// 	duration :1000
// },1400)


// animate.add({
// 	targets : ".grid-item",
// 	scale : [1,0,1,0,1],
// 	easing :"linear",
// 	delay : anime.stagger (200 , {grid : [1,5],from :"last"}),
// 	duration:2000
// },1600)
