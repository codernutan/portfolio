function mymenufunction() {
    var menuBth = document.getElementById("mynavmenu");
    if (menuBth.className === "nav-menu"){
        menuBth.className += "responsive";
    }else{
        menuBth.className = "nav-menu";
    }
    
}


/*-----------dark mode---------------*/

const body = document.querySelector("body"),
   toggleswitch = document.getElementById("toggle-switch");

   toggleswitch.addEventListener("click", ()=> { 
    body.classList.toggle("dark");
   });
/*--------scroll animation---------*/


   const sr = ScrollReveal({
    origin: "top",
    Distance:"80px",
    duration:2000,
    reset: true,
   });

   sr.reveal(".featured-name", {delay: 100});
   sr.reveal(".text-info",{delay:200});
   sr.reveal(".text-btn",{delay:200});
   sr.reveal(".social-icons",{delay:200});
   sr.reveal(".featured-image",{delay:320});



   sr.reveal(".project-box",{interval:200});

   sr.reveal(".top-header",{});

   const srLeft = ScrollReveal({
    origin:"left",
    Distance:"80px",
    duration:2000,
    reset:true,
   })
   
   srLeft.reveal(".about-info",{delay:100});
   srLeft.reveal(".contact-info",{delay:100});


   const srRight = ScrollReveal({
    origin:"left",
    Distance:"80px",
    duration:2000,
    reset:true,
   })

   srRight.reveal(".skill",{delay:100});
   srRight.reveal(".skill-box",{delay:100});

   /*---------active link-----------*/

   const sections = document.querySelectorAll(".section[id]");

   function scrollActive(){
    const scrolly = window.scrollY;

    sections.forEach((current) => {

        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");


        if(scrolly > sectionTop && scrolly <= sectionTop + sectionHeight){
            document
             .querySelector(".nav-menu a[href*=" + sectionId + "]")
             .classList.add("active-link");
             
        } else{
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
             .classList.remove("active-link");
              
        }
    });
   }

   window.addEventListener("scroll", scrollActive);

   
   
   
