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