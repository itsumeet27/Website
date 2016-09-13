$(document).ready(function(){$("ul.sf-menu").superfish({autoArrows:false,delay:400,animation:{opacity:'show',height:'show'},speed:'fast',autoArrows:false,dropShadows:false});$('.topnav ul').children('li').each(function(){$(this).children('a').html('<span>'+$(this).children('a').text()+'</span>');});$('#nav1 ul').children('li').each(function(){$(this).children('a').html('<span>'+$(this).children('a').text()+'</span>');});$('#slideshow').cycle({fx:'fade',speed:'slow',timeout:5000,pager:'#slider_nav',pagerAnchorBuilder:function(idx,slide){return'#slider_nav li:eq('+(idx)+') a';}});$('.social-links span').css({"border-radius":"3px","-moz-border-radius":"3px","-webkit-border-radius":"3px"});$('.wp-pagenavi a, .wp-pagenavi .current').css({"border-radius":"3px","-moz-border-radius":"3px","-webkit-border-radius":"3px"});});
$(function() {
    // Stick the #nav to the top of the window
    var nav = $('#nav');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});

