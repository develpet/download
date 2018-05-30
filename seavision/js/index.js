 $("#login-button").click(function(event){
		 event.preventDefault();
	 
	 var pwd = document.getElementById('inpwd').value;
	 var hash = pwd.hashCode();
	 
	 if (hash == '1216985755')
	 {
		 $("#welcome-form").fadeOut(500);
		 
		 $('.wrapper').addClass('form-success');
		 
		  $("#protected").delay(500).fadeIn(500);
		 
		 //MyFadeFunction();
	 }

});

String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

var opacity = 0;

function MyFadeFunction() {
   if (opacity<1) {
      opacity += .1;
      setTimeout(function(){MyFadeFunction()},100);
   }
   document.getElementById('download-button').style.opacity = opacity;
}