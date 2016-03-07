$(document).ready(function () {
    var currentPosition = 0;
   /* var slideWidth = window.screen.availWidth;*/
    var slideWidth = document.documentElement.clientWidth;
    var slides = $(".slider");
    var numberOfSlides = slides.length;
    var timer;
    var points = document.getElementsByClassName("point");
    slides.wrapAll("<div id='slideInner'></div>").css({"float": "left", "width": slideWidth});
    $("#slideInner").css("width", slideWidth * numberOfSlides);
    manageControls(currentPosition);

    timer = setInterval(slide, 5000);

    $(".arrows").bind('click', function () {
        currentPosition = ($(this).attr('id') === 'right_arrow') ? currentPosition + 1 : currentPosition - 1;
        manageControls(currentPosition);
        $("#slideInner").animate({marginLeft: slideWidth * (-currentPosition)});//.data('current', currentPosition);
        clearInterval(timer);
    });
    
    function slide() {
        if (currentPosition === numberOfSlides) {
            $("#slideInner").animate({marginLeft: 0});
            $("#left_arrow").hide();
            $("#right_arrow").hide();
            $("#right_arrow").show();
            currentPosition = 0;
        } else if (currentPosition === 0) {
            $("#right_arrow").show();
            $("#slideInner").animate({marginLeft: -slideWidth}, 1500);
            $("#left_arrow").show();
            currentPosition++;
        } else if (currentPosition === numberOfSlides - 1) {
            $("#slideInner").animate({marginLeft: slideWidth * (-currentPosition)}, 1500);
            $("#right_arrow").hide();
            currentPosition++;
        } else {
            $("#slideInner").animate({marginLeft: slideWidth * (-currentPosition)}, 1500);
            currentPosition++;
        }
        if (document.documentElement.clientWidth < 768) {
            $("#right_arrow").hide();
            $("#left_arrow").hide();
        }
    }
    function manageControls(position) {
        if (position === 0) {
            $("#left_arrow").hide();
            
        } else {
            $("#left_arrow").show();
        }
        if (position === numberOfSlides - 1) {
            $("#right_arrow").hide();
        } else {
            $("#right_arrow").show();
        }
        if (position === 0) {
            points[1].className = "point";
            points[2].className = "point";
            points[0].className = "point point_active";
        }
        else if(position === 1){
            points[0].className = "point";
            points[2].className = "point";
            points[1].className = "point point_active";
        }
        else{
            points[1].className = "point";
            points[0].className = "point";
            points[2].className = "point point_active";
        }
    }
});
