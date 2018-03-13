$(function () {
    var docHeight=$(document).outerHeight();
    var docWidth=$(document).outerWidth();
    $('.main-box').css({height:docHeight,width:docWidth});
    $(window).on('resize',function (ev) {
        var docHeight=$(document).outerHeight();
        var docWidth=$(document).outerWidth();
        $('.main-box').css({height:docHeight,width:docWidth});
    });


    var $content=$('.content');
    var conWidth=docWidth/5*2;
    var conHeight=docHeight/5*2;
    $content.css({width:conWidth,height:conHeight,marginLeft:-conWidth/2,marginTop:-conHeight/2});

});