var loader =document.querySelector(".loader")
var na = document.querySelector(".cid-s7CJva1tdF .navbar")
var corcontrol = document.getElementById("corcontrol");
var maincontainer = document.getElementById("maincontainer")
var projectcontainer = document.getElementById("projectcontainer")
var activeprojects  = document.getElementById("activeprojects")
var backcareer = document.getElementById("back")
var backbutton = document.querySelector(".back")
var projects = document.querySelectorAll(".projects");
var projectimage = document.querySelectorAll(".projectimage");
var projecttitle = document.querySelectorAll(".projecttitle");
var projectsexpand = document.querySelectorAll(".projectsexpand")
var projectcontainerexpand = document.getElementById("projectcontainerexpand")
var backexpand = document.getElementById("backexpand");
var backbuttonexpand = document.querySelector(".backexpand")
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


//projects
activeprojects.addEventListener("click",animate2)
console.log(projectcontainer)
function animate2()
{
   // projectcontainer.scrollTop ="100px"
  maincontainer.classList.add("saavu2");
    projectcontainer.style.display ="flex";
    projectcontainer.style.opacity = "1";
    na.style.top ="-100%";
    anime({
    targets :".projects",
    scale : ["0","1"],
    opacity : ["0","1"],
    duration:100,
    // easing : "linear",
    delay : anime.stagger (100),
  })
      anime({
    targets : "#back path",
    strokeDashoffset:[anime.setDashoffset,0],
              duration :500,
              easing : "linear",
          delay: function(el, i) { return i * 250 }

  })
}

backbutton.addEventListener("click",back)
projectcontainer.onclick = function (tar)
{
  if(tar.target==tar.currentTarget){
     projectcontainer.style.opacity = "0"
      anime({
    targets : "#back path",
    strokeDashoffset:[anime.setDashoffset,0],
              duration :500,
              easing : "linear",
              direction :"reverse",
          delay: function(el, i) { return i * 250 }

  })

  anime({
    targets :".projects",
    scale : ["1","0"],
    opacity : ["1","0"],
    duration:100,
    // easing : "linear",
    delay : anime.stagger (100),
  })

    na.style.top ="0%";
  setTimeout(function(){    
    projectcontainer.style.display ="none";
     maincontainer.classList.remove("saavu2");
  },400)
  }
  else
  {
for ( var i=0 ; i<projects.length ; i++)
{
      if (projects[i]==tar.target || projectimage[i]==tar.target || projecttitle[i] == tar.target)
      {
        // projectcontainer.style.opacity = "0.5"
        projectcontainerexpand.style.display = "flex"
        projectcontainerexpand.style.opacity = "1"
        projectcontainerexpand.style.transform ="scale(1)"
        backcareer.style.opacity = "0"
        backbutton.style.opacity = "0"
        anime({
          targets : projectsexpand[i],
          translateX :"-50%",
          translateY : "-50%",
          opacity : 1,
          scale : 1,
          duration : 50
        })

      }
      else
      {
        anime({
          targets : projectsexpand[i],
          opacity : 0,
          scale : 0,
          translateX :"50%",
          translateY : "-50%",
          duration : 50
        }) 
      }
}
  }
}

function back ()
{
 
    projectcontainer.style.opacity = "0"
      anime({
    targets : "#back path",
    strokeDashoffset:[anime.setDashoffset,0],
              duration :500,
              easing : "linear",
              direction :"reverse",
          delay: function(el, i) { return i * 250 }

  })
  anime({
    targets :".projects",
    scale : ["1","0"],
    opacity : ["1","0"],
    duration:100,
    // easing : "linear",
    delay : anime.stagger (100),
  })
na.style.top ="0%";
  setTimeout(function(){    
    projectcontainer.style.display ="none";
     maincontainer.classList.remove("saavu2");
  },1000)

}
projectcontainer.onmouseover=function (tar){
for ( var i=0 ; i<projects.length ; i++)
{
  if (tar.target !== tar.currentTarget)
    {
      if (projects[i]==tar.target || projectimage[i]==tar.target || projecttitle[i] == tar.target)
      {
        projectimage[i].style.transform ="scale(1.05)"
        projecttitle[i].style.transform = "scale(1)"
        // projects[i].style.flexGrow ="40"
        // projects[i].style.flexShrink ="0"
      }
    }
}
}

projectcontainer.onmouseout=function (tar){
for ( var i=0 ; i<projects.length ; i++)
{
      if (projects[i]==tar.target || projectimage[i]==tar.target || projecttitle[i] == tar.target)
      {
        projectimage[i].style.transform ="scale(1)"
        projecttitle[i].style.transform = "scale(1)"
        // projects[i].style.flexGrow ="0"
        // projects[i].style.flexShrink ="40"
      }
}
}


backbuttonexpand.addEventListener("click",backexpandfun);

function backexpandfun ()
{
  console.log("kdnfnkdnf");

        anime({
          targets : ".projectsexpand",
          opacity : 0,
          scale : 0,
          translateX :"-50%",
          translateY : "-50%",
          duration : 50
        })
              setTimeout(function(){
                projectcontainerexpand.style.transform ="scale(0)"
        projectcontainerexpand.style.display = "none"
        backcareer.style.opacity = "1";
        backbutton.style.opacity = "1"
        projectcontainerexpand.style.opacity = "0"
      },500)

}

projectcontainerexpand.onclick=function (tar)
{
  console.log("fkwhf")
  if(tar.target == tar.currentTarget)
  {

      anime({
          targets : ".projectsexpand",
          opacity : 0,
          scale : 0,
          translateX :"-50%",
          translateY : "-50%",
          duration : 50
        })
      setTimeout(function(){
                projectcontainerexpand.style.transform ="scale(0)"
        projectcontainerexpand.style.display = "none"
        backcareer.style.opacity = "1";
        backbutton.style.opacity = "1"
        projectcontainerexpand.style.opacity = "0"
      },500)
        // projectsexpand.style.zIndex = "1";

  }
}
