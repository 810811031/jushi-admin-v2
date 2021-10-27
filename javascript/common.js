
$('.menu').click(function () {
    $('.mask').fadeIn(150)
    $('.nav-outside').animate({ right: 0 }, 300)
})

$('.mask').click(function () {
    $(this).fadeOut(150)
    $('.nav-outside').animate({ right: '-60%' }, 300)
})