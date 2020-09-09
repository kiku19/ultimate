var loader =document.querySelector(".loader")
var na = document.querySelector(".cid-s7CJva1tdF .navbar")
var corcontrol = document.getElementById("corcontrol");
var body = document.querySelector("body")
var maincontainer = document.getElementById("maincontainer")
var projectcontainer = document.getElementById("projectcontainer")
var activeprojects  = document.getElementById("activeprojects")
var backcareer = document.getElementById("back")
var backbutton = document.querySelector(".back")
var backcareer1 = document.getElementById("back1")
var backbutton1 = document.querySelector(".back1")
var projects = document.querySelectorAll(".projects");
var projectimage = document.querySelectorAll(".projectimage");
var projecttitle = document.querySelectorAll(".projecttitle");
var projectsexpand = document.querySelectorAll(".projectsexpand")
var totalprojects = document.getElementById("totalprojects")
var projectcontainerexpand = document.getElementById("projectcontainerexpand")
var backexpand = document.getElementById("backexpand");
var backbuttonexpand = document.querySelector(".backexpand")
var secondmain = document.getElementById("secondmain")
console.log(projects)
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


//mobile or desktop
var apply1 = document.querySelectorAll(".apply1")
var apply2 = document.querySelectorAll(".apply2")
console.log("apply1");
var ismobile = /iPhone|iPad|iPaod|Android/i.test(navigator.userAgent);
if(ismobile)
{
  for (var p=0;p<apply1.length;p++)
  {
    apply1[p].style.display = "none";
    apply2[p].style.display = "inline";
    console.log("mobile")
  }
}

else
{
  for (var p=0;p<apply1.length;p++)
  {
    apply2[p].style.display = "none";
    apply1[p].style.display = "inline";
    console.log("window")
  }
}