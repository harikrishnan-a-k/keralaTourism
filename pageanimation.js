
$(function(){
    $(document).scroll(function(){
        var $nav=$('#mainnavbar');
        $nav.toggleClass("scrolled",$(this).scrollTop()>$nav.height());

    })

})

$(".number").counterUp({delay:10,time:1000});

// form input animation
$('.textb input').on('focus',function(){
    $(this).addClass('focus');
    $(this).parent().addClass('borderColor');
    
    
})

$('.textb input').on('blur',function(){
    if($(this).val()===''){
        $(this).removeClass('focus');
        $(this).parent().removeClass('borderColor');
        
        
    }
    
})