window.onload = function () {
    $('.row:first').click()
    $('.row:first').find('.more').find('span:first').addClass('activeSon')
}

$('.row').click(function () {
    if ($(this).attr('class').indexOf('active') > -1) return _moblie_nav_($(this))
    $('.row').removeClass('active')
    $('.row .more').slideUp(150)
    $(this).addClass('active')
    $(this).find('.more').slideDown(150)
    if ($(this).find('.more').find('span:first')) {
        $(this).find('.more').find('span').removeClass('activeSon')
        $(this).find('.more').find('span:first').addClass('activeSon')
    }
    _moblie_nav_($(this))
})
    
$('.more span').click(function (event) {
    event.stopPropagation()
    $(this).parent().find('span').removeClass('activeSon')
    $(this).addClass('activeSon')
})

/**
 * 如果是移动端样式则运行下列代码
 */
var _moblie_nav_ = function (row) {
    if (!window._config_.isMoblie || !row) return
    if (row.find('.more').length == 1) {
        $('.product-content').removeClass('noMore')
    } else {
        $('.product-content').addClass('noMore')
    }
    
}
if (window._config_.isMoblie) {
    if (!window._config_.map._moblie_nav_) {
        window._config_.map._moblie_nav_ = _moblie_nav_
    }
}
