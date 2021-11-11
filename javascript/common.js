window._config_ = {
    isMobile: false,
    map: {}
}
var _timer
// 如果设备的宽度少于 1100 则初始化
function setRem() {
    var device_width = document.documentElement.clientWidth
    if (device_width <= 1100) {
        var ratio =  device_width / 750 * 100
        $('html').css({ fontSize: ratio + 'px' })
        window._config_.isMobile = true
    }
    if (_timer) clearTimeout(_timer)
    _timer = setTimeout(function () {
        runListFn()
    }, 500)
}

/**
 * config list 的函数在改变窗口时重置
 */

function runListFn () {
    Object.keys(window._config_.map).forEach(function (key) {
        if (typeof window._config_.map[key] !== 'function') return
        window._config_.map[key]()
    })
}

setRem()
window.onresize = function () {
    setRem()
}

/**
 * 点击菜单出现遮罩层和菜单详情
 */
$('.menu').click(function () {
    $('.mask').fadeIn(150)
    $('.nav-outside').animate({ right: 0 }, 300)
})

/**
 * 点击遮罩层隐藏菜单和滋生
 */
$('.mask').click(function () {
    $(this).fadeOut(150)
    $('.product-detail').animate({ right: '-100%' })
    window._config_.isMobile ?    
        $('.mobile-nav').animate({ left: '-3.72rem' }, 300) :
        $('.nav-outside').animate({ right: '-60%' }, 300)
})

/**
 * 点击关闭按钮隐藏菜单栏
 */
$('.close').click(function () {
    $('.mask').fadeOut(150)
    $('.nav-outside').animate({ right: '-60%' }, 300)
})

/**
 * 鼠标移入的灰色动画
 */
$('.nav-outside-block .row').mouseenter(function () {
    $($(this).find('.grey')).animate({ width: '100%' }, 200)
})

/**
 * 鼠标移出的灰色动画
 */
$('.nav-outside-block .row').mouseleave(function () {
    $($(this).find('.grey')).animate({ width: '0' }, 200)
})

/**
 * 移动端点击菜单栏
 */
$('.mobile-nav-btn').click(function () {
    $('.mask').fadeIn(150)
    $('.mobile-nav').animate({ left: '0' }, 300)
})

/**
 * 点击 × 关闭菜单
 */
$('.mobile-close').click(function () {
    $('.mask').fadeOut(150)
    $('.mobile-nav').animate({ left: '-3.72rem' }, 300)
})