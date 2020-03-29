function readURL(inputtag){
    if( inputtag.files && inputtag.files[0]){
        var reader = new FileReader();
        reader.onload = function(e){
            // console.log('The e is '+e);
            // console.log(e);
            $('#image').attr('src',e.target.result);
                var div = $("#image");
                div.animate({height: '80%', opacity: '0.4'}, "slow");
                div.animate({width: '80%', opacity: '0.8'}, "slow");
        }
        // console.log(inputtag.files);
        // console.log(inputtag.files[0]);
        
        reader.readAsDataURL(inputtag.files[0]);
    }
}

$(document).ready(function () {
    $('#img').change(function () { 
        readURL(this);
        // console.log(this);
    });
    
    $('button').click(function(){
        
        $('form').replaceWith( function(){
            return '<h2 style=" color: rgb(112, 79, 9);"> Congratualations!! <br> The product is Added </h2>' ;
        });
        
    });
    
    $('select').change(function (e) { 
        var newval = $('select').val();
        $('.clothes').hide();
        $('.electronics').hide();
        $('.furniture').hide();
        
        switch(newval)
        {
            case 'electronics':
            $('.electronics').slideToggle(1000);
            break;
            case 'furniture':
            $('.furniture').slideToggle(1000);
            break;
            case 'clothes':
            $('.clothes').slideToggle(1000);
            break;    
        } 
    });

    $('input , select, button').mouseover(function () { 
        $(this).css('box-shadow', '0 8px 16px 0 rgba(0,0,0,0.2)');
    });

    $('input').mouseout(function () { 
        $(this).css('box-shadow', 'none');
    });
                
 
    $("input").focus(function(){
        $("span").css("display", "inline");
      });

});
