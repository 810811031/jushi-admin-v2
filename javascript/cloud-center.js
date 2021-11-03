$('.box').mouseenter(function () {
    $('.box').css({ width: '20%' })
    $(this).css({ width: '40%' })
    $(this).find('img').css({ transform: 'translateX(-50%) scale(1.1, 1.1)' })
})

$('.box').mouseleave(function () {
    $('.box').css({ width: '25%' })
    $(this).find('img').css({ transform: 'translateX(-50%)' })
})

