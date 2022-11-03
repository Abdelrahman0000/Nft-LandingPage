



  var swiper = new Swiper(".box-co",  {
    
    loop:true,
    grabCursor:true,
    spaceBetween: 20,

breakpoints:{
  500: {
    slidesPerView: 1,
  
  },
  640: {
    slidesPerView: 2,
  
  },
  768: {
    slidesPerView: 3,

  },
  1024: {
    slidesPerView: 5,
   
  }
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
pagination: {
    el: ".swiper-pagination",
  },
        });


        var swiper = new Swiper(".box-co1",  {
    
          loop:true,
          grabCursor:true,
          spaceBetween: 3,
      
      breakpoints:{
        640: {
          slidesPerView: 1,
        
        },
        768: {
          slidesPerView: 2,
      
        },
        1024: {
          slidesPerView: 3,
         
        }
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        
      pagination: {
          el: ".swiper-pagination",
        },
              });
      
      



        // var swiper = new Swiper(".box-co", {
        //     slidesPerView: 3,
        //     centeredSlides: true,
        //     spaceBetween: 30,
        //     loop:true,
        //     pagination: {
        //       el: ".swiper-pagination",
        //       type: "fraction",
        //     },
        //     navigation: {
        //       nextEl: ".swiper-button-next",
        //       prevEl: ".swiper-button-prev",
        //     },
        //   });








