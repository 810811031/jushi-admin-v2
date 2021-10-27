/**
 * init swiper
 */
var swiper = new Swiper('.swiper', {
    direction: 'vertical', 
    autoplay: true,
    mousewheel: true,
    on: {
        slideChangeTransitionEnd: function () {
            $('.arc').removeClass('active')
            $($('.arc')[this.activeIndex]).addClass('active')
        }
    }
})


/**
 * 点击返回 home 页面
 */
$('.logo').click(function () {
    window.location.href = './home.html'
})