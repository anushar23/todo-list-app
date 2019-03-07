//check off todo on clicking
$("ul").on("click","li",function(){
	//using "on" "ul" so that any new item "li" added to ul will also be included by eventlister when clicked
	//by using just click wout "on" doesnt include the new todos that we add later to be trigered 
	$(this).toggleClass("completed");
});


//click on X to delete todo
$("ul").on("click","span",function(event){
	//$(this) gives the particular span and parent() gives the li which is what we wana remove along with the span
 $(this).parent().fadeOut(500,function(){
		$(this).remove();
		});
 //clicking on span triggers the event listeners of all it other parent elemnts so to prevent the triggering of bubbling of event listeners use below
		event.stopPropagation();
	
 });

//adding new todos:
$("input[type='text']").keypress(function(event){
	//when we press enter which has code 13
if(event.which===13){
//grab the entered text
	var todoText=$(this).val();
	//reset the input to empty
	$(this).val("");
	//insert this new todo as anoter li in the ul
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>");
}


});

$(".fa-plus").click(function(){

$("input[type='text']").fadeToggle();

});