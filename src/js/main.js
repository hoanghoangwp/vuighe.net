function init_clickSeasonsList() {
    $('.season__dropdown').on('click', '.season__dropdown-link', function () {
        $('.episodes__content').scroll();
        $('.episodes__content').animate({
            scrollTop: 0
        }, 500);
        $('.season__dropdown > li').each(function () {
            $(this).removeClass('active');
        });
    });
}

function init_clickSearchBar() {
    $('.search__form').on('submit', function (e) {
        if ($('.search__input').val() === '') {
            e.preventDefault();
            $('.search__input').addClass('search__input--active');
            $('.search__space').addClass('search__space--active');
            $('.search__button').addClass('search__button--border-right');
        }
    });

    $(document).on('click', function (e) {
        const className = e.target.className;
        if (className.indexOf('search__input') < 0 && className.indexOf('search__button') < 0 && className.indexOf('search__form') < 0 && className.indexOf('search__button__icon') < 0) {
            $('.search__input').removeClass('search__input--active');
            $('.search__space').removeClass('search__space--active');
            $('.search__button').removeClass('search__button--border-right');
        }
    });
}

function init_closeSignUpModal() {
    $('.signin').on('click', function () {
        $('#myModal1').modal('hide');
    });
}

function init_toggleMenu() {
    $('.navbar-toggle').on('click', function () {
        $('.navbar--collapse').slideToggle(200);
        $('.navbar--collapse2').slideUp(200);
    });

    $('.login__icon').on('click', function (e) {
        $('.navbar--collapse2').slideToggle(200);
        if ($(window).width() + 10 < 640)
            $('.navbar--collapse').slideUp(200);
    });
}

function init_clickTabs() {
    $(document).on('click', function (e) {
        console.log(e.target.closest('.signed-in__user > .active'));
        if ((!e.target.closest('.tab-pane') && !e.target.closest('.navbar__tab'))) {
            $('.signed-in__notification > div').removeClass('active in');
            $('.signed-in__user > li').removeClass('active');
        }
    });
}

$(document).ready(function () {
    init_clickSearchBar();
    init_toggleMenu();
    init_clickSeasonsList();
    init_closeSignUpModal();
    init_clickTabs();
});