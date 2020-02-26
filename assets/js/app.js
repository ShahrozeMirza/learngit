/* Function to Fix Navbar */
document.addEventListener('scroll', function () {
    var scrollPos = window.pageYOffset;
    console.log(scrollPos);
    var secondSectionPos = document.getElementById("second-section").offsetTop;
    console.log(secondSectionPos)
    if (scrollPos >= secondSectionPos) {
        document.getElementById("main-menu").classList.add("sticky-top");
    }
    else{
        document.getElementById("main-menu").classList.remove("sticky-top");
    }
   

});


$(document).ready(function () {
    $('.second-button').on('click', function () {
      $('.animated-icon2').toggleClass('open');
    //   $('#main-menu').toggleClass('switch-color');
    if($('.animated-icon2').hasClass('open')){
        $('#main-menu').addClass('switch-color');
    }
    else{
       setTimeout(function(){
        $('#main-menu').removeClass('switch-color');
       },300)
    }
    });
  });



/* Function to Scroll to Donation Section */
function donationScroll() {
    var donationSectionTop = document.getElementById('donation-scroll').offsetTop;
    var mainMenuHeight = document.getElementById('main-menu').offsetHeight;
    var donationSectionTopFinal = donationSectionTop - mainMenuHeight;
    console.log(donationSectionTopFinal);
    window.scrollTo(0, donationSectionTopFinal);
  
    
};


/* photoswipe
        * ----------------------------------------------------- */
       var clPhotoswipe = function () {
        var items = [],
            $pswp = $('.pswp')[0],
            $folioItems = $('.item-folio');

        // get items
        $folioItems.each(function (i) {

            var $folio = $(this),
                $thumbLink = $folio.find('.thumb-link'),
                $title = $folio.find('.item-folio__title'),
                $caption = $folio.find('.item-folio__caption'),
                $titleText = '<h4>' + $.trim($title.html()) + '</h4>',
                $captionText = $.trim($caption.html()),
                $href = $thumbLink.attr('href'),
                $size = $thumbLink.data('size').split('x'),
                $width = $size[0],
                $height = $size[1];

            var item = {
                src: $href,
                w: $width,
                h: $height
            }

            if ($caption.length > 0) {
                item.title = $.trim($titleText + $captionText);
            }

            items.push(item);
        });

        // bind click event
        $folioItems.each(function (i) {

            $(this).on('click', function (e) {
                e.preventDefault();
                var options = {
                    index: i,
                    showHideOpacity: true
                }

                // initialize PhotoSwipe
                var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
                lightBox.init();
            });

        });
    };
$(document).ready(function () {

    $('#topCarousel .owl-carousel').owlCarousel({
        loop: true,
        autoplay: 1000,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        navText: ["<i class='fas fa-arrow-left f-s-50'></i>", "<i class='fas fa-arrow-right f-s-50'></i>"],
    });

    clPhotoswipe();
   
});








