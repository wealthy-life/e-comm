let bar = document.getElementById("icon");
let menu = document.getElementById("menu");

bar.addEventListener("click", function () {
    if (bar.className === "fa fa-bars") {
        bar.className = "fa fa-times";
        menu.style.right = 0;
    } else {
        bar.className = "fa fa-bars";
        menu.style.right = "-1000px";
    }
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })


  var splide = new splide( '.splide', {
    perPage: 3,
    gap    : '2rem',
    breakpoints: {
      640: {
        perPage: 2,
        gap    : '.7rem',
        height : '6rem',
      },
      480: {
        perPage: 1,
        gap    : '.7rem',
        height : '6rem',
      },
    },
  } );
  
splide.mount();