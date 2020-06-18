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


// MANAGING THE CARDS

$(".card__button").click(function () {
    $(this).parent().toggleClass("active");
})


// MANAGING THE FORM

$(".form").on("submit", function () {
    event.preventDefault();

    const nameValid = validateInput($("#name"));
    const emailValid = validateEmail($("#email"));
    const messageValid = validateInput($("#message"));

    const formValid = nameValid && emailValid && messageValid;

    if (formValid) {
        $(".form__input").val("");
    }
})


// CHECKING IF INPUT IS EMPTY

function validateInput(input) {
    const value = input.val();

    if (value === "") {
        input.parent().addClass("error");
        return false;
    }
    else {
        input.parent().removeClass("error");
        return true;
    }
}


// VALIDATING EMAIL 

function validateEmail(input) {
    const email = input.val();

    if (email === "") {
        $("#email-container").addClass("error").removeClass("invalid");
        return false;
    }
    else {
        if (!isEmail(email)) {
            $("#email-container").addClass("error").addClass("invalid");
            return false;
        }
        else {
            $("#email-container").removeClass("error").removeClass("invalid");
            return true;
        }
    }
}

function isEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}