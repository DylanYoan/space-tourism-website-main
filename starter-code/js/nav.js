// Active

$(document).ready(function(){
    $('li').on('click', function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
})

$(document).ready(function(){
    $('button').on('click', function(){
        $(this).siblings().removeClass('active2');
        $(this).addClass('active2');
    })
})
