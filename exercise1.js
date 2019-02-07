

//i made a class and used jquery to add the class from the css page without having to put it on my html
$(".red").addClass("changered");
//its getting all the divs with the class red and changing it to red with the class i made



$("#myElement").addClass("changeblue");
//grabbing the id with my element and changing the parent to blue using the class

//used the .on to make a function where it would send an alert when th parent element with the myelement id was clicked
$("#myElement").on("click" , function(ev){
    alert("MY ELEMENT WAS CLICKED");
});


$("#myElement div:nth-child(1)").addClass("textwhite");
//for the first child i assigned it the text white class

$("#myElement div:nth-child(2)").addClass("textpink");
//for the second child i assigned it the text pink class