// var a = document.getElementsByClassName('description');

// function scrollEffect() {
//     var h = window.innerHeight;
//     var t = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
//     var b = (h + t);

//     Array.prototype.forEach.call(a, function(el, i) {
//         // TODO: Fix this
//         var elh = outerHeight(el);
//         var elt = el.getBoundingClientRect().top;
//         var elb = (elt + elh);
//         if ((elb >= t) && (elt <= b)) {
//             el.style.marginTop = ((elt - b)/5) + 250;
//         }
//     });
// }

// window.addEventListener('scroll', scrollEffect);
// var event = document.createEvent('HTMLEvents');
// event.initEvent('scroll', true, false);
// window.dispatchEvent(event);


// function outerHeight(el) {
//   var height = el.offsetHeight;
//   var style = getComputedStyle(el);

//   height += parseInt(style.marginTop) + parseInt(style.marginBottom);
//   return height;
// }

//-----------------------


var $animation_elements = $('.description');
var $window = $(window);
function pullDescriptionUp() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
            $element.css("margin-top", (((element_top_position - window_bottom_position) / 5) + 250));
        }
    });
}

$window.on('scroll', pullDescriptionUp);
$window.trigger('scroll');



//-------------------------



// Array.prototype.forEach.call(a, function(el, i){
//     el.addEventListener('mouseenter', el.classList.add('section-active'));
//     el.addEventListener('mouseleave', el.classList.remove('section-active'));
// });

// var t = document.getElementsByClassName('toggle-links');

// Array.prototype.forEach.call(t, function(el, i){
//     el.addEventListener('click', function() {
//         var d = closest(el, 'description');
//         if (el.innerHTML == 'Press') {
//             el.innerHTML = 'Less';
//             d.classList.add('wide');
//             d.querySelectorAll('extra-links').style.display = 'inline-block';
//         } else {
//             el.innerHTML = 'Press';
//             d.classList.remove('wide');
//             d.querySelectorAll('extra-links').style.display = 'none';
//         }
//     })
// });

// function closest(el, selector) {
//   const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

//   while (el) {
//     if (matchesSelector.call(el, selector)) {
//       return el;
//     } else {
//       el = el.parentElement;
//     }
//   }
//   return null;
// }

//-----------------------

$(".description").on({
    mouseenter: function () {
        jQuery(this).parent('.section').addClass('section-active');
    },
    mouseleave: function () {
        jQuery(this).parent('.section').removeClass('section-active');
    }
});

$(".toggle-links").on ({
    click: function () {
        $link = $(this);
        $desc = $($link.closest(".description")[0]);
        if ($link.html() == "Press") {
            $link.html("Less");
            $desc.addClass("wide");
            $($desc.find(".extra-links")).css("display", "inline-block");
        } else{
            $link.html("Press");
            $desc.removeClass("wide");
            $($desc.find(".extra-links")).css("display", "none");
        }
    }
})

var titles = ['designer', 'videographer', 'photographer', 'creative']; 

function switchTitle() {
    var idx = 0;
    setInterval(function(){ 
        var t = document.querySelector(".titleSwitch");
        t.innerHTML = titles[idx];
        idx++;
        if (idx === titles.length) {
            idx = 0;
        }
    }, 1500);
}

$(document).ready(function() {
    switchTitle();
})