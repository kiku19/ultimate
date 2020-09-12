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
var imagec2 = document.getElementById("imagec2")
var award =document.querySelectorAll(".award")
var para = document.querySelectorAll(".para")
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
          scale : [0.95,1],
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
// activeprojects.addEventListener("click",animate2)
// console.log(projectcontainer)
// function animate2()
// {
//    // projectcontainer.scrollTop ="100px"
//   maincontainer.classList.add("saavu2");
//     projectcontainer.style.display ="flex";
//     projectcontainer.style.opacity = "1";
//     na.style.top ="-100%";
//     anime({
//     targets :".projects",
//     scale : ["0","1"],
//     opacity : ["0","1"],
//     duration:100,
//     // easing : "linear",
//     delay : anime.stagger (100),
//   })
//       anime({
//     targets : "#back path",
//     strokeDashoffset:[anime.setDashoffset,0],
//               duration :500,
//               easing : "linear",
//           delay: function(el, i) { return i * 250 }

//   })
// }

// backbutton.addEventListener("click",back)
// projectcontainer.onclick = function (tar)
// {
//   if(tar.target==tar.currentTarget){
//      projectcontainer.style.opacity = "0"
//       anime({
//     targets : "#back path",
//     strokeDashoffset:[anime.setDashoffset,0],
//               duration :500,
//               easing : "linear",
//               direction :"reverse",
//           delay: function(el, i) { return i * 250 }

//   })

//   anime({
//     targets :".projects",
//     scale : ["1","0"],
//     opacity : ["1","0"],
//     duration:100,
//     // easing : "linear",
//     delay : anime.stagger (100),
//   })

//     na.style.top ="0%";
//   setTimeout(function(){    
//     projectcontainer.style.display ="none";
//      maincontainer.classList.remove("saavu2");
//   },400)
//   }
//   else
//   {
// for ( var i=0 ; i<projects.length ; i++)
// {
//       if (projects[i]==tar.target || projectimage[i]==tar.target || projecttitle[i] == tar.target)
//       {
//         // projectcontainer.style.opacity = "0.5"
//         projectcontainerexpand.style.display = "flex"
//         projectcontainerexpand.style.opacity = "1"
//         projectcontainerexpand.style.transform ="scale(1)"
//         backcareer.style.opacity = "0"
//         backbutton.style.opacity = "0"
//         anime({
//           targets : projectsexpand[i],
//           translateX :"-50%",
//           translateY : "-50%",
//           opacity : 1,
//           scale : 1,
//           duration : 50
//         })

//       }
//       else
//       {
//         anime({
//           targets : projectsexpand[i],
//           opacity : 0,
//           scale : 0,
//           translateX :"-50%",
//           translateY : "-50%",
//           duration : 50
//         }) 
//       }
// }
//   }
// }

// function back ()
// {
 
//     projectcontainer.style.opacity = "0"
//       anime({
//     targets : "#back path",
//     strokeDashoffset:[anime.setDashoffset,0],
//               duration :500,
//               easing : "linear",
//               direction :"reverse",
//           delay: function(el, i) { return i * 250 }

//   })
//   anime({
//     targets :".projects",
//     scale : ["1","0"],
//     opacity : ["1","0"],
//     duration:100,
//     // easing : "linear",
//     delay : anime.stagger (100),
//   })
// na.style.top ="0%";
//   setTimeout(function(){    
//     projectcontainer.style.display ="none";
//      maincontainer.classList.remove("saavu2");
//   },1000)

// }
// projectcontainer.onmouseover=function (tar){
// for ( var i=0 ; i<projects.length ; i++)
// {
//   if (tar.target !== tar.currentTarget)
//     {
//       if (projects[i]==tar.target || projectimage[i]==tar.target || projecttitle[i] == tar.target)
//       {
//         projectimage[i].style.transform ="scale(1.05)"
//         projecttitle[i].style.transform = "scale(1)"
//         // projects[i].style.flexGrow ="40"
//         // projects[i].style.flexShrink ="0"
//       }
//     }
// }
// }

// projectcontainer.onmouseout=function (tar){
// for ( var i=0 ; i<projects.length ; i++)
// {
//       if (projects[i]==tar.target || projectimage[i]==tar.target || projecttitle[i] == tar.target)
//       {
//         projectimage[i].style.transform ="scale(1)"
//         projecttitle[i].style.transform = "scale(1)"
//         // projects[i].style.flexGrow ="0"
//         // projects[i].style.flexShrink ="40"
//       }
// }
// }


// backbuttonexpand.addEventListener("click",backexpandfun);

// function backexpandfun ()
// {
//   console.log("kdnfnkdnf");

//         anime({
//           targets : ".projectsexpand",
//           opacity : 0,
//           scale : 0,
//           translateX :"-50%",
//           translateY : "-50%",
//           duration : 50
//         })
//               setTimeout(function(){
//                 projectcontainerexpand.style.transform ="scale(0)"
//         projectcontainerexpand.style.display = "none"
//         backcareer.style.opacity = "1";
//         backbutton.style.opacity = "1"
//         projectcontainerexpand.style.opacity = "0"
//       },500)

// }

// projectcontainerexpand.onclick=function (tar)
// {
//   console.log("fkwhf")
//   if(tar.target == tar.currentTarget)
//   {

//       anime({
//           targets : ".projectsexpand",
//           opacity : 0,
//           scale : 0,
//           translateX :"-50%",
//           translateY : "-50%",
//           duration : 50
//         })
//       setTimeout(function(){
//                 projectcontainerexpand.style.transform ="scale(0)"
//         projectcontainerexpand.style.display = "none"
//         backcareer.style.opacity = "1";
//         backbutton.style.opacity = "1"
//         projectcontainerexpand.style.opacity = "0"
//       },500)
//         // projectsexpand.style.zIndex = "1";

//   }
// }
activeprojects.addEventListener("click",displayprojects);
function displayprojects()
{

  window.scrollTo(0,0);
  backbutton.style.display = "flex"
  projectcontainer.style.display ="flex"
  // na.style.top = "-100%"
  body.classList.add("saavu2")
  secondmain.classList.add("saavu3")
  anime({
    targets :"#projectcontainer .projects",
    scale : ["0.6","1"],
    opacity : ["0","1"],
    duration:100,
    // easing : "linear",
    // delay : anime.stagger (100),
   })
}

projectcontainer.onclick = function(tar)

{
  if (tar.target == tar.currentTarget) 
  {
  anime({
    targets :"#projectcontainer .projects",
    scale : ["1","0.6"],
    opacity : ["1","0"],
    duration:50,
    // delay : anime.stagger (50),
   })
    body.classList.remove("saavu2")
    secondmain.classList.remove("saavu3")
  setTimeout(function(){
    projectcontainer.style.display ="none";
    na.style.top = "0%"
    backbutton.style.display = "none"
  },500)
}
}

backbutton.addEventListener("click",backnew)

function backnew(){
    anime({
    targets :"#projectcontainer .projects",
    scale : ["1","0.6"],
    opacity : ["1","0"],
    duration:50,
    // delay : anime.stagger (50),
   })
    body.classList.remove("saavu2")
    secondmain.classList.remove("saavu3")
      setTimeout(function(){
    projectcontainer.style.display ="none";
    na.style.top = "0%";
    backbutton.style.display = "none"
  },500)
}


totalprojects.addEventListener("click",()=>{
  location.href ="total.html"
})

// function overprojects()
// {
//   window.scrollTo(0,0);
//   backbutton1.style.display = "flex"
//   overprojectcontainer.style.display ="flex"
//   // na.style.top = "-100%"
//   body.classList.add("saavu2")
//   secondmain.classList.add("saavu3")
//   anime({
//     targets :"#overprojectcontainer .projects",
//     scale : ["0.6","1"],
//     opacity : ["0","1"],
//     duration:100,
//     // easing : "linear",
//     // delay : anime.stagger (100),
//    })
// }

// overprojectcontainer.onclick = function(tar)

// {
//   if (tar.target == tar.currentTarget) 
//   {

//   anime({
//     targets :"#overprojectcontainer .projects",
//     scale : ["1","0.6"],
//     opacity : ["1","0"],
//     duration:50,
//     // delay : anime.stagger (50),
//    })
//     body.classList.remove("saavu2")
//     secondmain.classList.remove("saavu3")
//   setTimeout(function(){
//     overprojectcontainer.style.display ="none";
//     na.style.top = "0%"
//     backbutton1.style.display = "none"
//   },500)
// }
// }


// backbutton1.addEventListener("click",backnew1)

// function backnew1()
// {

//   anime({
//     targets :"#overprojectcontainer .projects",
//     scale : ["1","0.6"],
//     opacity : ["1","0"],
//     duration:50,
//     // delay : anime.stagger (50),
//    })
//     body.classList.remove("saavu2")
//     secondmain.classList.remove("saavu3")
//   setTimeout(function(){
//     overprojectcontainer.style.display ="none";
//     na.style.top = "0%"
//     backbutton1.style.display = "none"
//   },500)
// }

//insert image on active projects

console.log(projectimage)
var imageurl
for (var g =0 ; g<projectimage.length ; g++)
{
  imageurl = "url('./background" + g + ".jpg')"
  console.log(imageurl)
  projectimage[g].style.backgroundImage = imageurl
}


// for(var h = 0 ; h<4 ; h++)
// {
//   imagec2.style.width = "50%";
//   imageurl = "url('./background" + h + ".jpg')"
//   imagec2.style.backgroundImage = imageurl

// }


//carousel
var i =1;
var imgurl = ["./india50000.png","./india50001.png","./india50002.png"] ;
imagec3.src = imgurl[0];
var para1 = ["Winner of INDIA 5000 Best MSME Awards for quality excellence with privilege this has been awarded to MASTEK ENGINEERING Pvt.ltd in 2018 for outstanding contribution in quality and excellence.","MASTEK ENGINEERING has been audited and confirmed to ISO 9001:2015 for the following activities Civil, Mechanical and Electrical Construction works for industries including Oil and Gas fields. This can verified by using Certificate number 733014.","National Small industries Corporation limited has certified MASTEK ENGINEERING to foster the growth of MSME businesses, which provides single point registration thus able to claim 25% minimum annual purchase made by central ministries."]
var award1= ["INDIA 5000","ISO Certified","NSIC Certified"]
award[0].innerHTML = award1[0];
para[0].innerHTML = para1[0]
para[0].style.display = "block"
award[0].style.display = "block"

loop = async() =>{
  for(;i<3;i++)
  {
  await new Promise(resolve => setTimeout(resolve,8000))
  // para[0].innerHTML = para1[i];
  award[0].innerHTML = award1[i];
  // para[0].innerHTML = para[0].textContent.replace(/\S/g,'<span class="letter">$&</span>');
  award[0].innerHTML = award[0].textContent.replace(/\S/g,'<span class="letter">$&</span>');
  removeAllChildNodes(para[0]);
  add1(i);
  removeimage(imagec3);
  add2(i);
  // imgurl = "./india5000"+i+".png";
  // imagec3.src = imgurl;
  var textanimate = anime.timeline({loop:false})
  textanimate.add({
    targets : imagec3,
    left : ["50%","0%"],
    opacity : [0,1],
    duration :500,
    easing : "linear"
  })
  textanimate.add({
  targets:'.para .letter,.award .letter',
  scale:[1.5,1],
  opacity:[0,1],
  translateZ:[1.5,0],
  duration:1000,
  easing:"easeOutExpo",
  delay:(elem, index) => index*20
    },"-=1000")
   textanimate.add({
    targets : imagec3,
    left : ["0%","50%"],
    opacity : [1,0],
    duration :500,
    easing : "linear"
  },"+=1800")
  if(i==2){i=-1}
   }
  removeimage(imagec3);
}

loop();

//check
function add1(k)
{
    var s ;
    s= para1[k].split(" ");
    for(var i=0 ; i<s.length ; i++)
    {
      var div = document.createElement("div")
      div.classList.add("word");
      div.innerHTML = s[i].replace(/\S/g,'<span class="letter">$&</span>');
      para[0].appendChild(div);
    }  
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

var localimg = []
var canvas = document.createElement("canvas");
var canvascontext = canvas.getContext("2d");
function add2(k)
{
  var imagec3 = document.createElement("img");
  imagec3.setAttribute("id","imagec3");
  if (localimg[k] == undefined) 
  {
    imagec3.src = imgurl[k];
    imagec3.addEventListener("load",function(){  
    canvascontext.clearRect(0,0,canvas.width,canvas.height);
    canvas.width = imagec3.width;
    canvas.height = imagec3.height;
    canvascontext.drawImage(imagec3,0,0,imagec3.width,imagec3.height);
    localimg[k] = JSON.stringify(canvas.toDataURL("image/png"));
    console.log("from server")
    localStorage.setItem("files"+k,localimg[k]);})
  }
  else
  {
    imagec3.src = JSON.parse(localStorage.getItem("files"+k));
    console.log("from storage")
  }
  imagec2.appendChild(imagec3);
}
function removeimage()
{
  imagec3.remove();
}

// local storage
// function storelocal(imagec3,k)
// {
//   console.log(imagec3.src,k)
//   canvascontext.clearRect(0,0,canvas.width,canvas.height);
//   canvas.width = imagec3.width;
//   canvas.height = imagec3.height;
//   canvascontext.drawImage(imagec3,0,0,imagec3.width,imagec3.height);
//   localimg[k] = canvas.toDataURL("image/png");
//   console.log(localimg[k])
//   localStorage.setItem("files"+k,localimg[k]);
// }