$((function(){$(".regular").slick({dots:!1,infinite:!0,slidesToShow:2,slidesToScroll:1,arrows:!0}),$(window).scroll((function(){var a=$(this).scrollTop(),n=$(".mainImage > img").height()/2,t=$(".text_content2 > div").offset().top/2,o=$(".project_function").offset().top-500;a>=n&&$(".mainImage").addClass("animate__zoomIn"),a>=t&&$(".text_content2 > div").addClass("animate__fadeIn"),a>=o&&($(".project_function > h1").addClass("animate__fadeInUp"),$(".project_function p").addClass("animate__fadeInUp"),$(".project_function figcaption").addClass("animate__fadeInUp"))}))}));