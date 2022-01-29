function alertdemo(){
	alert("hi sunil")
}

function setVisible(pagetype) {
	$('.flex-login').addClass('hide');
	$('#'+pagetype+'form').removeClass('hide');
}

function login(){
	console.log("login")
}

function register(){
	console.log("register")
}