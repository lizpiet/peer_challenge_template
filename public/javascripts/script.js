$(document).ready(function(){

    $('#submit').on('click', function(e){
        e.preventDefault();
        //$('#submit').memes.data;
        var inputID = $(this).prev().attr('id');
        var inputVal = $(this).prev().val();
        $(this).prev().val('');
        //console.log($(this));

        // write jquery to get the id of the meme, and the sentence typed in the box
        var message = {
            id: inputID,
            sentence: inputVal
        };
        createMessage(message);

    });

});

function createMessage(message){
    var ajaxCall = $.ajax({
        type:'POST',
        dataType:'json',
        url: '/memes',
        data: message
    });

    ajaxCall.done(function (data){
        console.log("done");
    });

    ajaxCall.fail(function (jqXHR, testStatus, errorThrown){
        console.log("you fail");

    });

    ajaxCall.always(function(){
        console.log("Ajax Complete");
    });
}

