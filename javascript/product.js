if (!window._config_.isMobile) {
    new Swiper('.swiper-container', {
        // effect : 'coverflow',
        // slidesPerView: 2,
        // centeredSlides: true,
        // initialSlide: 1,
        // coverflowEffect: {
        //     rotate: 0,
        //     stretch: 0,
        //     depth: 500,
        //     modifier: 1,
        //     slideShadows : false
        // },
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
    })
} else {

}