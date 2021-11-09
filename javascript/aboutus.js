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
        var id = $(this).data('id')
        $('.contentwrap').fadeOut()
        $('.contentwrap' + id).fadeIn()
    })

    $('.contentwrap1').fadeIn()

} else {
    $('.box').click(function () {
        $('.box').removeClass('active')
        $(this).addClass('active')
        var id = $(this).data('id')
        $('.contentwrap').hide()
        $('.contentwrap' + id).show()
    })
    $('.contentwrap1').show()
}