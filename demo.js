$('.btn').click(function() {
    var math = (Math.random() * 10000) + 50;
    var data = 'rotate(' + math + 'deg)'
    $('.c').css('transform', data); 
})