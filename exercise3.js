


//im getting my noun which is the button and when clicked it will run my function
//which will toggle and get the class change to grey from my css using jquery.
//it will only turn every other row grey

$("#button").on("click",function(ev){
    $( "tr:even" ).toggleClass("changetogrey");
});