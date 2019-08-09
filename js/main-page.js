      $(document).ready(function() {
       
        $("#owl-example").owlCarousel({
            loop: true,
            navigation : true,
            items:1, 
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem: true,
            pagination: false,
            rewindSpeed: 500,
            loop:true,
            margin:0,
            responsiveClass:true,
            lazyLoad: true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:false
                }
            },
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true
        });
        
$('.dropdown-toggle').dropdown()

        $(".brand-logo-slider").owlCarousel({
            loop: false,
            navigation : true,
            items:6, 
            slideSpeed : 300,
            paginationSpeed : 400,
            rewindSpeed: 500,
            margin:10,
            responsiveClass:true,
            lazyLoad: true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            slidewidth: 175
        });


        $(".product-slider-main-page").owlCarousel({
            loop: true,
             slidewidth: 277,
            navigation : true,
            items:1, 
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem: true,
            pagination: false,
            rewindSpeed: 500,
            loop:true,
            margin:0,
            responsiveClass:true,
            lazyLoad: true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:true,
                    loop:false
                }
            },
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true
        });


       
      }); 