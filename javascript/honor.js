if (!window._config_.isMobile) {
    new Swiper('.swiper', {
        loop : true,
        autoplay: true,
        initialSlide: 4,
        effect : 'coverflow',
        slidesPerView: 5,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 10,
            depth: 60,
            modifier: 3,
            slideShadows : false
        },
        pagination: {
            el: '.swiper-pagination',
        },
    })
}