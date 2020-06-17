// MANAGING THE MOBILE MENU

$(".header__nav-toggle").click(function () {
    $(".header__navigation").addClass("active");
    $("body").addClass("no-scroll");
})

$(".header__nav-close").click(function () {
    $(".header__navigation").removeClass("active");
    $("body").removeClass("no-scroll");
})

if ($(window).width() <= 600) {
    animateMenuItems();
}

$(window).resize(function () {
    if ($(window).width() <= 600) {
        animateMenuItems();
    }

    else {
        $(".header__nav-link, .header__btn").css("animation", "none");
        $("body").removeClass("no-scroll");
    }
})

function animateMenuItems() {
    let delay = 0.2;

    $(".header__nav-link").each(function () {
        $(this).css("animation", "slideUp 0.5s " + delay + "s");
        delay = delay + 0.2;
    })

    $(".header__btn").css("animation", "slideUp 0.5s " + delay + "s");

    $(".header__nav-link, .header__btn").css("animation-fill-mode", "backwards");
}
