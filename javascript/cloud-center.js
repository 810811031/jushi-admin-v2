if (!window._config_.isMobile) {
    $('.box').mouseenter(function () {
        $('.box').css({ width: '20%' })
        $(this).css({ width: '40%' })
        $(this).find('.title').css({ fontSize: ' 1.771vw' })
        $(this).find('.description').css({ fontSize: '1.042vw' })
        $(this).find('img').css({ transform: 'translateX(-50%) scale(1.1, 1.1)' })
    })
    
    $('.box').mouseleave(function () {
        $('.box').css({ width: '25%' })
        $(this).find('.title').css({ fontSize: '1.25vw' })
        $(this).find('.description').css({ fontSize: '0.729vw' })
        $(this).find('img').css({ transform: 'translateX(-50%)' })
    })
}

