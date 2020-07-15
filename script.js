$(document).ready(function(){
   //variables
    $surface = $('.surface');
    $bus = $('.bus');
    $img = $('.bus img');
    let flag = true;
    const buses = ['assets/bus.png','assets/light_bus.png']
    //keypress event
    $(document).on('keypress',function(e){
        console.log(e.which)
        if(e.which == 13){
            $($surface).toggleClass('moveRight');
            $($bus).toggleClass('suspension');
        }
    });

    //keypress event
    $(document).on('keypress',function(e){
        if(e.which == 32){
            if(flag){
                flag = false;
                $img.attr('src',buses[0]);    
            }
            else{
                flag = true;
                $img.attr('src',buses[1]);
            }
        }
    });

});