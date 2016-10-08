$(document).ready(function (){
	$('#button1').click(function(event){
		console.log('hello!!');
		//event.preventDefault();
		$('#button1toggle').toggleClass('hidetoggle');
	});
});

$(document).ready(function (){
	$('#button2').click(function(event){
		console.log('bye!');
		//event.preventDefault();
		$('#button2toggle').toggleClass('hidetoggle');
	});
});

$(document).ready(function (){
	$('#button3').click(function(event){
		console.log('bye!');
		//event.preventDefault();
		$('#button3toggle').toggleClass('hidetoggle');
	});
});

