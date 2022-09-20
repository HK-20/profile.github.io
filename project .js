new snowflakeCursor({ element: document.querySelector("#snowflake") })
 
//////////////////////////////////
//// nav bar sticky //
/**/
const pubg = document.querySelector('.head');
const obs = new IntersectionObserver(function(entries){
    const ent = entries[0];
    //console.log(ent);
    if(!ent.isIntersecting ){
       
        document.querySelector(".navbar").classList.add("sticky");    
    }
    if(ent.isIntersecting === true){
       
        document.querySelector(".navbar").classList.remove("sticky");    
    }
},
{
    // in the viweport only
    root:null,
    threshold:0,
    rootMargin:"-50px"
});

obs.observe(pubg);
/////////////////////////////
// nav-menu butten

const navbut = document.querySelector(".menu-butt");
const navdel = document.querySelector("#dele");
const navadd = document.querySelector(".navbar");
// to add mob menu 
navbut.addEventListener("click", function(){
    navadd.classList.toggle("unhide");
})
// to remove mob menu
navdel.addEventListener("click", function(){
    navadd.classList.remove("unhide");
})

/*
navdel.addEventListener("click", function(){
    navadd.classList.toggle("unhide");
})
*/

/////////////////
// smooth scrolling 
const alllinks = document.querySelectorAll(".main-li a");
console.log(alllinks);


///testing scrolling smooth 
//const navbarToggler = document.querySelector(".navbar li");
const navbarToggler = document.querySelector(".head li");

////const navbarLinks = document.querySelectorAll(".navbar a");
const navbarLinks = document.querySelectorAll(".head a");


navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  //navbarMenu.classList.toggle("open");
}

// navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

for(let i=0; i<navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navbarLinkClick);
}

function navbarLinkClick(event) {

  smoothScroll(event); // Call the "smoothScroll" function

//   if(navbarMenu.classList.contains("open")) { // Close navbarMenu in smaller screens
//     navbarToggler.click();
//   }

}

// Smooth-Scrolling
// APPROACH #1 - window.scrollTo() (window.scroll())
 function smoothScroll(event) {
   event.preventDefault();
   const targetId = event.currentTarget.getAttribute("href");
   window.scrollTo({
     top: targetId==="#" ? 0 : document.querySelector(targetId).offsetTop,
     behavior: "smooth"
   });
}


//////////////////////////////////
//console.log(alllinks);

alllinks.forEach(function(link) {
    link.addEventListener("click", function (h) {
        console.log(h);
        h.preventDefault();
        const href = link.getAttribute("href");
        console.log(href);

        //scroll back to top
        if (href ==="#")
            window.scrollTo({
                top:0,
                behavior: 'smooth',
            });
          

        if (href !== "#" && href.startsWith("#")) {
            const sectione = document.querySelector(href);
            sectione.scrollIntoView({ behavior: "smooth"});
            
        }

        // close mob navbar
        /*
        if (link.classList.contains("main-li")){
            navadd.classList.remove("unhide");
            console.log(navadd);
        }
        */
        if(href.startsWith("#pa") || href.startsWith("#home") ){
            navadd.classList.remove("unhide");
            //console.log(navadd); 
        }
        
    });
});

