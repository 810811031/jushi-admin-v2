if (!window._config_.isMobile) {
    var length = $('.box').length
    if (length < 6) {
        $('.navs .btn').hide()
    } else {
        $('.navs .btn').show()
    }

    $('.box').click(function () {
        $('.box').removeClass('active')
        $(this).addClass('active')
    })


} else {
    $('.box').click(function () {
        $('.box').removeClass('active')
        $(this).addClass('active')
    })
}