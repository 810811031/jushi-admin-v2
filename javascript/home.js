/**
 * init swiper
 */

var device_width = document.documentElement.clientWidth
if (device_width > 1100) {
    new Swiper('.swiper', {
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
} else {
    new Swiper('.swiper', {
        autoplay: true,
        mousewheel: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        on: {
            slideChangeTransitionEnd: function () {
                $('.arc').removeClass('active')
                $($('.arc')[this.activeIndex]).addClass('active')
            }
        }
    })
}






/**
 * 点击返回 home 页面
 */
$('.logo').click(function () {
    window.location.href = './home.html'
})