//=====> 1.DARK MODE
//=====> 2.SLIDER
//=====> 3.GALLERY TABE
//=====> 4.NUMBER COUNTER
//=====> 5.COOMING SOON TIMER 

//====== 1.DARK MODE ===== 
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}

let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

let themeToggleDarkLogo = document.getElementsByClassName('light_logo');
let themeToggleLightLogo = document.getElementsByClassName('dark_logo');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');

    // Loop through logos
    for (let logo of themeToggleLightLogo) {
        logo.classList.remove('hidden');
    }

} else {
    themeToggleDarkIcon.classList.remove('hidden');

    // Loop through logos
    for (let logo of themeToggleDarkLogo) {
        logo.classList.remove('hidden');
    }
}

let themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // toggle logos
    for (let logo of themeToggleDarkLogo) {
        logo.classList.toggle('hidden');
    }

    for (let logo of themeToggleLightLogo) {
        logo.classList.toggle('hidden');
    }

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});

//====== 2.SLIDER ===== 
$(document).ready(function () {
    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1500,
        draggable: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});
$(document).ready(function () {
    $('.gallery_slider').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1500,
        draggable: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});

//====== 3.GALLERY TABE ===== 
$('.tab-btn').click(function () {

    $(this).addClass('active').siblings().removeClass('active');

    let filter = $(this).attr('data-filter')

    if (filter == 'all') {
        $('.tab_img').show(400);
    } else {
        $('.tab_img').not('.' + filter).hide(200);
        $('.tab_img').filter('.' + filter).show(400);
    }
});

//=====> 4.NUMBER COUNTER
$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now) + '+');
        }
    });
});

//=====> 5.COOMING SOON TIMER 
function makeTimer() {

    let endTime = new Date("29 April 2025 9:56:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    let now = new Date();
    now = (Date.parse(now) / 1000);

    let timeLeft = endTime - now;

    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days);
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);

}

setInterval(function () { makeTimer(); }, 1000);