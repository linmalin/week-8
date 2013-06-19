jQuery(document).ready(function($) {

	$('#subscribe').click(function(event) {
		if( $('#subscribe:checked').val() )
		{
			$('#subscribe-email').slideDown('slow');

		}else{
			$('#subscribe-email').slideUp('slow');
		}
		
	});

	alert( $('#subscribe:checked') .val() );

	$('#submit').click(function(event){
		console.log("submit button was clicked");
	});
	$('#form').validate({
		errorClass : "inputError",

		errorPlacement : function (error, element){
			/*console.log(error);*/
			console.log(element);

		},

		rules : {
			username :{
				required: true,
				email : true
			},

			password : {
				required : true,
				minlength : 6,
				maxlength : 10
				
			}

		},

		messages : {
			username : {
				required : "hey now you",
				email : "what"
			},
	
			password : {
				required : "enter password",
				minlength : "more than {0}", /*takes number from values you've previously set*/
				maxlength : "less than {0}"
			}
		}

	});
	

});


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

