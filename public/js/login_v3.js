$(document).ready(function() {		
	$('#login_toggle').click(function(){
		$('.block_login').show();
		$('.block_register').hide();
	})
	$('#register_toggle').click(function(){
		$('.block_login').hide();
		$('.block_register').show();
	})
	
	$(".lazy").lazyload({
      effect : "fadeIn"
   });
	
	$('#login-form').validate({

                focusInvalid: false, 
                ignore: "",
                rules: {
                    txtusername: {
                        minlength: 2,
                        required: true
                    },
                    txtpassword: {
                        required: true
                    }
                },

                invalidHandler: function (event, validator) {
					//display error alert on form submit    
                },

                errorPlacement: function (label, element) { // render error placement for each input type   
					$('<span class="error"></span>').insertAfter(element).append(label)
                    var parent = $(element).parent('.input-with-icon');
                    parent.removeClass('success-control').addClass('error-control');  
                },

                highlight: function (element) { // hightlight error inputs
					var parent = $(element).parent();
                    parent.removeClass('success-control').addClass('error-control');
                },

                unhighlight: function (element) { // revert the change done by hightlight

                },

                success: function (label, element) {
					var parent = $(element).parent('.input-with-icon');
					parent.removeClass('error-control').addClass('success-control');
                },

			    submitHandler: function(form) {
//						form.submit();
				}
            });	


    var my_date = new Date();
    my_date.setFullYear(my_date.getFullYear() - 18, my_date.getMonth(), my_date.getDay()-1)


    a=moment(my_date).format('L');
    console.log(a)

    $('#reg_dob').datepicker({
        format: "dd/mm/yyyy",
        startView: 2,
//        daysOfWeekDisabled: "3,4",
        autoclose: true,
//			todayHighlight: true,
        endDate: a
    });

});