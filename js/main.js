
//-------------Nav menu-------------------
const toggle = document.querySelector(".toggle-container")
const navToggle = document.querySelector(".nav-toggle")
const nav = document.querySelector(".nav")


navToggle.addEventListener("click", function() {
    
   // console.log(toggle)
  if( toggle.style.display = "none"){
    toggle.style.display = "block"
    toggle.style.opacity = `${100}%`


  }
 
  
} )

const closBtn = document.querySelector(".close-toggle")

closBtn.addEventListener("click", function() {
    toggle.style.display = "none"
 
})



window.addEventListener("scroll", function() {
    const scrollNav =  window.pageYOffset
    const navHeight = nav.getBoundingClientRect().height

    if (scrollNav >= navHeight) {
        nav.classList.add("fixed-nav")
    }
    else{
        nav.classList.remove("fixed-nav")
    }

   
})


//----X----------Nav-Menu-----------------------X----

// ---scroll intolink ----------------

// function smotthscroll(target, duration) {
//     var target = document.querySelector(target)
//     var targetPosition = target.getBoundingClientRect().top
//     var startPosition = window.pageYOffset
//     var distance = targetPosition - startPosition
//     var startTime = null
   

//     function animation(currentTime) {
//         if (startTime === null) {
//             startTime = currentItem
//             var timeElapse = currentItem - startTime
//             var run = easeInOutCubic(timeElapse, startPosition, distance, duration)
//             window.scrollTo(0, run)
//             if (timeelapse < duration) {
//                 requestAnimationFrame(animation)
//             }
//         }       

//     }
//     function easeInOutCubic  (t, b, c, d) {
//         t /= d/2;
//         if (t < 1) return c/2*t*t*t + b;
//         t -= 2;
//         return c/2*(t*t*t + 2) + b;
//     };

//     requestAnimationFrame(animation)

// }

//smotthscroll('section1', 1000);

//------------------About Function BTN-----------------

const aboutMe = document.querySelectorAll(".aboutme-info")

aboutMe.forEach(function(about) {
    plusBtn = about.querySelector(".this-btn")

    plusBtn.addEventListener("click", function() {
        
        aboutMe.forEach(function(item) {
            if (item !== about) {
                item.classList.remove("show-text")
            }
        })

        about.classList.toggle("show-text")

    })

})

//-------X-----------About Function BTN----------X-------

//------------------my Porfolio----btn slider------------
let counter = 0

const trendContainer = document.querySelector(".trending-container")

function next(t) {
    //console.log(t.parentElement.parentElement.children[0])
    const elem = t.parentElement.parentElement.children[0]
    const item = elem.getElementsByClassName("trending-box")
    //elem.append(item[0])

    counter++

    console.log(t.parentElement.parentElement.children[0])
    let container = t.parentElement.parentElement
    let roll = container.querySelector(".slider")

    roll.scrollBy(300,0)

}

function prev(t) {
    const elem = t.parentElement.parentElement.children[0]
    const item = elem.getElementsByClassName("trending-box")
   // elem.prepend(item[item.length-1])

    
    let container = t.parentElement.parentElement
    let roll = container.querySelector(".slider")

    roll.scrollBy(-300,0)

}

//----------X---------sliderBTN----X--------------------



//-------------------Array item-------------

const webdesign = [
   
    {
        id: 1,
        title: "Ecommerce",
        category: "Web design",
        img: "./images/eccomerce2.png",
        desc: `I design differnet kind of website that every client needs`,
        like: 25,
     },
     {
        id: 2,
        title: "Beauty Product",
        category: "Graphic layout",
        img: "./images/ecomerce.png",
        desc: `I design differnet kind of website that every client needs`,
        like: 10,
     },
     {
        id: 3,
        title: "Blogger Site",
        category: "Video editing",
        img: "./images/webdesign2.png",
        desc: `I design differnet kind of website that every client needs`,
        like: 5,
     },
     {
        id: 4,
        title: "Company Website",
        category: "Webdesign",
        img: "./images/videoediting.png",
        desc: `I design differnet kind of website that every client needs`,
        like: 50,
     },
     {
        id: 5,
        title: "Mobile app",
        category: "Mobile developement / Web design",
        img: "./images/webdesign.png",
        desc: `I design differnet kind of website that every client needs`,
        like: 7,
     },
     {
        id: 6,
        title: "Company Website",
        category: "Photo editing",
        img: "./images/model8.png",
        desc: `I design differnet kind of website that every client needs`,
        like: 70,
     },
    
     {
        id: 7,
        title: "Company Website",
        category: "Graphic Design",
        img: "./images/model9.png",
        desc: `I design differnet kind of website that every client needs`,
        like: 70,
     },
    
    
    ]
    

//----X---------------Array item-----------X--

const slideContainer = document.querySelector(".trending-container")
const modalContainer = document.querySelector(".modal-container")

let currentItem = 0

window.addEventListener("DOMContentLoaded", function() {
    
displaySlide(webdesign)
showModal(webdesign)

})

function displaySlide(arr) {
    
    let showslide = arr.map(function (item) {
        
        return`  <article class="trending-box" style="background-image: url(${item.img});">
        <div class="card-title">
           <h2>${item.title}</h2>
        </div>

        <div class="button-slide">
        <button class="my-btn" data-id= ${item.id}>more info</button>
        </div>
    </article>`

    })
    showslide = showslide.join('')
    slideContainer.innerHTML = showslide

    const showBtn = document.querySelectorAll(".my-btn")

    showBtn.forEach(function(btn) {
    
        btn.addEventListener("click", function(e) {
       // console.log(e.currentTarget.dataset.id)
        
        const itemId = e.currentTarget.dataset.id

        currentItem = `${itemId}`-1

        modalContainer.classList.add("show-modal")
        console.log (currentItem)

        showModal(webdesign)

    })
})


}


function showModal(mod) {
  
    let displaModal = mod.map(function(items) {

        items = mod[currentItem]

        return`<div class="modal-box">
        <div class="modal-close">
            <img src="./images/xbox-brands.svg" width="18" alt="">
        </div>
        <div class="img-modal" style="background-image:url(${items.img}) ;"></div>    
        <div class="modal-info">
            <h2>${items.title}</h2>
            
            <p>${items.desc}</p>
        </div>
        </div>`

    })
    displaModal = displaModal.join('')
    modalContainer.innerHTML = displaModal


    const modalClose = document.querySelectorAll(".modal-close")

    modalClose.forEach(function(close) {
        
        close.addEventListener("click", function() {

            modalContainer.classList.remove("show-modal")
        })

    })

}

//-------------------Email function--------

function sendEmail(e){
  preventdefault()

    Email.send({
       
        Host : "smtp.gmail.com",
        port: 587,
        Username : "tribecaster1@gmail.com",
        Password : "nmvsagqknczshaig",
        To : 'tribecaster1@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "Name:" + document.getElementById("name").value
        + "<br> Email:" + document.getElementById("email").value
        + "<br> Phone No.:" + document.getElementById("phone").value
        + "<br> Message:" + document.getElementById("message").value
    }).then(
      message => alert("Message Send")
    );

}



//----------------------copyright date----------
const date = document.getElementById("date")

date.innerHTML = new Date().getFullYear()

//----X------------------copyright date---------X-

//------  nmvsagqknczshaig