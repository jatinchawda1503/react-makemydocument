
/* -------------------------------------------------------------------
 [Table of contents]
 * 01.Contact Form
*/
// (function($) {
//     "use strict";

   
//     callback_contactForm();

// })(window.jQuery);



(function($) {
	// Email Validation
	$.fn.conformyEmailValidate     = function () {
		var emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return emailRegexp.test(String($(this).val()));
	}
	// Phone Validation
	$.fn.conformyPhoneValidate     = function () {
		//var phoneRegexp = /^[0-9]+$/;
		var phoneRegexp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
			return phoneRegexp.test($(this).val());
	}
	$.fn.modalClose = function(){
		let thisModalTarget  = $(this).attr('id'),
			$this            = $(this);
		 
		$(window).on('click', function(event){
			if(event.target.id == thisModalTarget){
				$this.removeClass("active");
			}
		});
	}    
})(jQuery);


/* ------------------------------------------------------------------- */
/* 02.Contact Form
/* ------------------------------------------------------------------- */
 function callback_contactForm() {
    "use-strict";
    //  Validate Input Variables
    var contactName    = $("#contactName");
    var contactEmail    = $("#contactEmail");
    var contactPhone    = $("#contactPhone");
    var formControl     = $('.contact-form-group .form-control');
    var contactService    = $("#contactService");
    var contactCity    = $("#contactCity");
    
    
    // Added AutoComplete Attribute Turned Off
    formControl.attr("autocomplete","on");

    // Email Validation
    contactEmail.on("keyup", function() {
        var emailInputValue  = $(this).val().trim();
        
        if (emailInputValue.length > 0) {
            let validate = $(this).conformyEmailValidate();

            if (!validate === true) {
                $(this).parent().find("span").removeClass("success").addClass("error");
            } else {
                $(this).parent().find("span").removeClass("error").addClass("success");
            }
        }else{
            $(this).parent().find("span").removeAttr("class");  
        }
        
    });
    alert(emailInputValue);

    // Phone Validation
    contactPhone.on("keyup", function() {
        var phoneInputValue  = $(this).val().trim();


        if (phoneInputValue.length > 0) {
            let validate = $(this).conformyPhoneValidate();

            if (!validate === true) {
                $(this).parent().find("span").removeClass("success").addClass("error");
            } else {
                $(this).parent().find("span").removeClass("error").addClass("success");
            }
        }else{
            $(this).parent().find("span").removeAttr("class");
            $(this).parent().find("span").addClass("error");  
        }

       
    });
    alert(phoneInputValue);
    

    if (isNotEmpty(contactName) && isNotEmpty(contactEmail) && isNotEmpty(contactService) && isNotEmpty(contactPhone) && isNotEmpty(contactCity) ){
        console.log("Not Empty Value");
        }
    
        alert("connect 1");

    // Contact Form Submit
    //$("#contactForm").on("submit", function(event) {
        
       
    
    
       // if (isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(service) && isNotEmpty(phone) && isNotEmpty(city) )
    //      else {
    //         $this.find(':submit').append('<span class="icon-line-awesome-spinner"></span>');
    //         $this.find(':submit').attr('disabled','true');
    //         $.ajax({
    //             url: "./vendor/send_mail.php?mail=request",
    //             data: {
    //                 contact_name: name,
    //                 contact_email: email,
    //                 contact_phone: phone,
    //                 contact_service: service,
    //                 contact_city: city
    //             },
    //             method: "POST",
    //             success: function(response) {
    //                 $(".form-control").parent().find("span").removeAttr("class");
    //                 $("#contactForm")[0].reset();
    //                 $(".select-selected").html(selectedNull);
                    
    //                 if (response == true) {
    //                     $this.find(':submit').removeAttr('disabled');
    //                     $this.find(':submit').find("span").fadeOut();
    //                     $("#formSuccessModal").modal("show");
                       
    //                 } else {
    //                     $this.find(':submit').removeAttr('disabled');
    //                     $this.find(':submit').find("span").fadeOut();
    //                     $("#formDangerModal").modal("show");
    //                     $("#formDangerModal #error_message").html(response);
                       
                       
    //                 }
    //             }
    //         });
    //     }
    //     event.preventDefault();
    // });
}

// function isNotEmpty(validate){

// let $this         = validate;
// let name          = $("#contactName").val().trim();
// let email         = $("#contactEmail").val().trim();
// let phone         = $("#contactPhone").val().trim();
// let service       = $("#contactService").val().trim();
// let city          = $("#contactCity").val().trim();
// let validateEmail = $("#contactEmail").conformyEmailValidate();
// let validatePhone = $("#contactPhone").conformyPhoneValidate();
// let selectedNull  = $('#contactService').find("option").eq(0).val();
    
// alert(name);

// if (name =='' || email =='' || phone == '' || city == '') {
//     $(this).parent().find("span").addClass("error");
//     if($('.empty-form').css("display") == "none"){
//         $('.empty-form').stop().slideDown().delay(3000).slideUp();
//     }else {
//         return false;
        
//     }
// } else if (service == selectedNull) {
//     if($('.service-alert').css("display") == "none"){
//         $('.service-alert').stop().slideDown().delay(3000).slideUp();
//     }else {
//         return false;
//     }
// } else if (!validatePhone === true) {
//     $("#contactPhone").parent().find("span").removeClass("success").addClass("error");
//     if($('.phone-invalid').css("display") == "none"){
//         $('.phone-invalid').stop().slideDown().delay(3000).slideUp();
//     }else {
//         return false;
//     }
// } else if (!validateEmail === true) {
//     $("#contactEmail").parent().find("span").removeClass("success").addClass("error");
//     if($('.email-invalid').css("display") == "none"){
//         $('.email-invalid').stop().slideDown().delay(3000).slideUp();
//     }else {
//         return false;
//     }
// }  else {
        
//         alert("gotit....");
// }

//}