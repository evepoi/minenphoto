//포스터 텝메뉴
var movBtnp = $(".poster_title > ul > li");    
var movContp = $(".poster_chart > div");

movContp.hide().eq(0).show();

movBtnp.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();  
    movBtnp.removeClass("active");   
    target.addClass("active");    
    movContp.css("display","none");
    movContp.eq(index).css("display","block").stop();
});

//특강 텝메뉴
var movBtnc = $(".column_title > ul > li");    
var movContc = $(".column_chart > div");

movContc.hide().eq(0).show();

movBtnc.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();  
    movBtnc.removeClass("active");   
    target.addClass("active");    
    movContc.css("display","none");
    movContc.eq(index).css("display","block").stop();
});

//기록 텝메뉴
var movBtnh = $(".history_title > ul > li");    
var movConth = $(".history_chart > div");

movConth.hide().eq(0).show();

movBtnh.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();  
    movBtnh.removeClass("active");   
    target.addClass("active");    
    movConth.css("display","none");
    movConth.eq(index).css("display","block").stop();
});

//작품 텝메뉴
var movBtnA = $(".artlist_title > ul > li");    
var movContA = $(".artlist_chart > div");

movContA.hide().eq(0).show();

movBtnA.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();  
    movBtnA.removeClass("active");   
    target.addClass("active");    
    movContA.css("display","none");
    movContA.eq(index).css("display","block").stop();
});