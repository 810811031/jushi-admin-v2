if (!window._config_.isMobile) {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
    })

    $('.left').click(function () {
        swiper.slidePrev()
    })
    $('.right').click(function () {
        swiper.slideNext()
    })
    $('.btn').click(function (event) {
        event.stopPropagation()
        $('.shop').fadeIn()
    })
    $('body').click(function () {
        $('.shop').fadeOut()
        $('.detail-shop').fadeOut()
    })
    $('.detail').click(function () {
        $('.mask').fadeIn()
        $('.product-detail').animate({ right: 0 })
    })

    $('.shop-btn').click(function (event) {
        event.stopPropagation()
        $('.detail-shop').fadeIn()
    })

    $('.product-detail .back').click(function () {
        $('.mask').fadeOut()
        $('.product-detail').animate({ right: '-100%' })
    })

} else {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,
        loop: true
    })

    $('.detail').click(function () {
        $('.mask-dark').fadeIn()
        $('.product-detail').fadeIn()
    })

    $('.mask-dark').click(function () {
        $(this).fadeOut()
        $('.product-detail').fadeOut(100)
    })
    $('.mobile-close').click(function() {
        $('.mask-dark').fadeOut()
        $('.product-detail').fadeOut(100)
    })
}