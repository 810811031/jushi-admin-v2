$('.row').click(function () {
    if ($(this).attr('class').indexOf('active') > -1) return
    $('.row').removeClass('active')
    $(this).addClass('active')
})