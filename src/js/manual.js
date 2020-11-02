


$(document).ready(function(){


        /////////// OTP Verification ////////////////

        $('#verify-otp').hide();
        $('#request-otp').on('click',function(){
          $('#sign-in').hide();
          $('#verify-otp').show();
        });
        $('.icon-material-outline-arrow-back').on('click',function(){
          $('#sign-in').show();
          $('#verify-otp').hide();
        });


        $(function() {
          'use strict';

          var body = $('body');

          function goToNextInput(e) {
            var key = e.which,
            t = $(e.target),
            sib = t.next('.nu');

            if (key != 9 && (key < 48 || key > 57)) {
              e.preventDefault();
              return false;
            }

            if (key === 9) {
              return true;
            }

            if (!sib || !sib.length) {
              sib = body.find('.nu').eq(0);
            }
            sib.select().focus();
          }

          function onKeyDown(e) {
            var key = e.which;

            if (key === 9 || (key >= 48 && key <= 57)) {
              return true;
            }

            e.preventDefault();
            return false;
          }
          
          function onFocus(e) {
            $(e.target).select();
          }

          body.on('keyup', '.nu', goToNextInput);
          body.on('keydown', '.nu', onKeyDown);
          body.on('click', '.nu', onFocus);

        })



        /*----------------------------------------------------*/
            /*  Slick Carousel
            /*----------------------------------------------------*/
            $('.bannerSlider').slick({
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
              adaptiveHeight: true,
              responsive: [
              {
                breakpoint: 1292,
                settings: {
                  dots: true,
                  arrows: false
                }
              },
              {
                breakpoint: 993,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false
                }
              },
              {
                breakpoint: 769,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                  arrows: false
                }
              }
              ]
            });


            $('.member-container').slick({
              dots: true,
              infinite: true,
              speed: 300,
              slidesToShow: 4,
              slidesToScroll: 1,
              responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false
                }
              }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
          });




        ////scroll//////


        // $(function() {

        //     if ($('.smart-scroll').length > 0) {
        //          var last_scroll_top = 0;
        //         $(window).on('scroll', function() {
        //             scroll_top = $(this).scrollTop();
        //             if(scroll_top < last_scroll_top) {
        //                 $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        //             }
        //             else {
        //                 $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        //             }
        //             last_scroll_top = scroll_top;
        //         });
        //     }



        // });

        // cta footer btn scroll to request service



        $('.cta-sticky').on('click', function(){
          $('html, body').animate({scrollTop:$("#contact-form").offset().top}, 1000);
          return false;
        });

        //  cta service page footer btn scroll

        $('#cta-sticky-service').on('click', function(){
          $('html, body').animate({scrollTop:$("#cost-distribution").offset().top}, 1000);
          return false;
        });

        
        
        
        
         //  Captcha Variables    
    let textCaptcha     = $("#txtCaptcha");
    let textCaptchaSpan = $('#txtCaptchaSpan');
    let textInput       = $('#txtInput');

    // Generates the Random number function 
    function randomNumber(){
         
        let a = Math.ceil(Math.random() * 9) + '',
            b = Math.ceil(Math.random() * 9) + '',
            c = Math.ceil(Math.random() * 9) + '',
            d = Math.ceil(Math.random() * 9) + '',
            e = Math.ceil(Math.random() * 9) + '',
            code = a + b + c + d + e;
   
        textCaptcha.val(code);
        textCaptchaSpan.html(code);
    }

    // Called random number function
    randomNumber();

    // Validate the Entered input aganist the generated security code function   
    function validateCaptcha() {
        let str1 = textCaptcha.val();
        let str2 = textInput.val();
        if (str1 == str2) {
            return true;
        } else {
            return false;
        }
    }

    // // Form Conttrol Captcha Validate
    // textInput.on("keyup", function() {
    //     if (validateCaptcha() == true) {
    //       $('.notification').addClass("success");
    //     }else {
    //       //$('.notification').removeAttr("class");
    //         $('.notification').addClass("error");
    //     }
    // });

        $('.close').on('click',function(){
          $('.notification').removeClass('success');
          $('.notification').removeClass('error');
          $('#contactBtn').html('Submit');
          $('#contactBtn').attr('disabled',false);
        });

        $('.notification').hide();
        $('#msg').html('');
        $('#contactForm').on('submit',function(e){
          if (validateCaptcha()  != true){
            $('.notification').addClass("error");
            $('.notification').show();
           if( $('.notification').css("display") == "block"){
            $('#msg').html("Please Enter the Vaild Captcha");
           }else{
             return false;
           }
          }else{
            $('#contactBtn').html('Please wait');
            $('#contactBtn').attr('disabled',true);
          $.ajax({
            url:'/../inc/call_back_conf.php',
            type:'post',
            data:$('#contactForm').serialize(),
            success:function(result){
              if(result == "success"){
                $('.notification').addClass("success");
                $('.notification').show();
                $('#msg').html("Form Submitted Sucessfully");
              $('#contactBtn').html('Submit');
              $('#contactBtn').attr('disabled',false);
              $('#contactForm')[0].reset();
              randomNumber();
              console.log(result);
              } else{   //if(result == "error")
                $('.notification').addClass("error");
                $('.notification').show();
                $('#msg').html("Error Occoured!! Please Try Again");
                $('#contactBtn').html('Submit');
                $('#contactBtn').attr('disabled',false);
                randomNumber();
                console.log(result);
              }
            }
            
          });
          e.preventDefault();
        }
        });



        $('#newsletter').on('submit',function(e){
          $('#news-msg').html('');
          var email = $('#newsletterEmail').val();
          $.ajax({
            url:'/../inc/newsletter_conf.php',
            type:'post',
            data:'email='+email,
            success:function(result){

              if(result=='yes'){
                $('#newsletter')[0].reset();
                $('#news-msg').addClass('success');
                $('#news-msg').html('Thankyou For Subscribing');  
              } else{
                $('#news-msg').addClass('error');
                $('#news-msg').html('Error !! Please Try again'); 
              }
            }
          });
          e.preventDefault();
         
        });
      
       
        $('#maincontactform').on('submit',function(e){
          $('#msg').html('');
          if (validateCaptcha()  != true){
            $('.notification').addClass("error");
            $('.notification').show();
           if( $('.notification').css("display") == "block"){
            $('#msg').html("Please Enter the Vaild Captcha");
           }else{
             return false;
           }
          }else{
          $('#maincontactBtn').html('Please wait');
          $('#maincontactBtn').attr('disabled',true);
          $.ajax({
            url:'../inc/main_contact_conf.php',
            type:'post',
            data:$('#maincontactform').serialize(),
            success:function(result){
              if(result=='yes'){
              $('.notification').addClass("success");
              $('.notification').show();
              $('#msg').html("Form Submitted Sucessfully");
              $('#maincontactBtn').html('Submit');
              $('#maincontactBtn').attr('disabled',false);
              $('#maincontactform')[0].reset();
              randomNumber();
              }else{
                $('.notification').addClass("error");
                $('.notification').show();
                $('#msg').html("Error Occoured!! Please Try Again");
                $('#maincontactBtn').html('Submit');
                $('#maincontactBtn').attr('disabled',false);
                $('#maincontactform')[0].reset();
                randomNumber();
              }
           }
          });
          e.preventDefault();
        }
        });
        


       
            
        $(function () {
          if($(window).width() <= 480){
          $(window).scroll(function(){
          var scroll = $(window).scrollTop();
          if (scroll <= 1400) {
          $('.cta').hide()
          }
          else{
          $('.cta').show();
          }
          });
          }
          });
              
                 /*  Init
            /*----------------------------------------------------*/
            $(document).ready(function() {
              $('.fun-fact h4').counterUp({
                  duration: 20
              });
  
            });

             //counter
          $(function () {
            $('.counter').counterUp({
              duration: 40,
              delay: 10,
              easing: 'swing',
                  step: function (now) {
                      $(this).text(Math.ceil(now));
                  }
          });
  
           });
          
            //// COUNTER UP FUNCTION
            (function( $ ){
              "use strict";

              $.fn.counterUp = function( options ) {

                // Defaults
                var settings = $.extend({
                    'time': 400,
                    'delay': 10
                }, options);

                return this.each(function(){

                    // Store the object
                    var $this = $(this);
                    var $settings = settings;

                    var counterUpper = function() {
                        var nums = [];
                        var divisions = $settings.time / $settings.delay;
                        var num = $this.text();
                        var isComma = /[0-9]+,[0-9]+/.test(num);
                        num = num.replace(/,/g, '');
                        var isInt = /^[0-9]+$/.test(num);
                        var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
                        var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;

                        // Generate list of incremental numbers to display
                        for (var i = divisions; i >= 1; i--) {

                            // Preserve as int if input was int
                            var newNum = parseInt(num / divisions * i);

                            // Preserve float if input was float
                            if (isFloat) {
                                newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                            }

                            // Preserve commas if input had commas
                            if (isComma) {
                                while (/(\d+)(\d{3})/.test(newNum.toString())) {
                                    newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
                                }
                            }

                            nums.unshift(newNum);
                        }

                        $this.data('counterup-nums', nums);
                        $this.text('0');

                        // Updates the number until we're done
                        var f = function() {
                            $this.text($this.data('counterup-nums').shift());
                            if ($this.data('counterup-nums').length) {
                                setTimeout($this.data('counterup-func'), $settings.delay);
                            } else {
                                delete $this.data('counterup-nums');
                                $this.data('counterup-nums', null);
                                $this.data('counterup-func', null);
                            }
                        };
                        $this.data('counterup-func', f);

                        // Start the count up
                        setTimeout($this.data('counterup-func'), $settings.delay);
                    };

                    // Perform counts when the element gets into view
                    $this.waypoint(counterUpper, { offset: '100%', triggerOnce: true });
                });

              };

            })( jQuery );      

           
  
              
  
        

      });



