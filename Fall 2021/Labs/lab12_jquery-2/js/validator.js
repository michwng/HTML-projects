/* validator.js
 *  Author:         Michael Ng
 *  Date:           2021-11-17
 *  Last revised:   2021-11-17
 *  Description:    CSS for email validation lab 12
 */

$(document).ready(function() {
    //when user submits form.
    $('#submit').on('click', function(){
        //get form information
        let name    = $('#name').val().trim(),
            email   = $('#email').val().trim();

        //check for empty name value.
        if(!name){
            displayError('Please enter a name');
            return false;
        }

        //check for empty email value
        if(!email){
            displayError('Please enter an email address');
            return false;
        }

        //check for valid email address
        if(isEmail(email) == false){
            displayError('You entered an invalid email address');
            return false;
        }

        //If everything is correct, fade the form out.
        $('#contactForm').fadeOut();

        //build the modal
        $('#modal').html('You entered valid information');
        $('#modal').append('<button id="ok">OK</button>');

        //display the modal
        $('#modal').fadeIn('slow');

        //reset the form values
        $('#email').val('');
        $('#name').val('');

    }); //end of submit event listener

    //called by the submit event listener to display an eror modal.
    // 'm' is the error message.
    function displayError(m) {
        $('#contactForm').fadeOut('slow');
        $('#modal').html(m);
        $('#modal').append('<button id="ok">OK</button>')
        $('#modal').fadeIn('slow');
    }

    //fade the modal out and the form back in.
    //avoids an error where the page looks for an "ok" element
    //by making the "ok" element a second parameter.
    $(document).on('click', '#ok', () => {
        $('#modal').fadeOut('slow');
        $('#contactForm').fadeIn('slow');
    });

    //use regex to validate the entered email format
    //called by the submit event listener
    function isEmail(email){
        let id      = '^([a-zA-Z0-9_\\.\\-\\+])+',
            domain  = '(([a-zA-Z0-9\\-])+\\.)+',
            tld     = '([a-zA-Z0-9]{2,10})$',
            regex   = new RegExp(id + '\\@' + domain + tld);
    //combined: /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})$/
    //              id                  @   domain              tld
    // ^ signifies the beginning of the string.
    // $ signifies the end of the string.

        //if the entered email address doesn't match the pattern
        if(!regex.test(email)){
            //debug line
            //console.log("false");
            return false;
        }
        else //the email address matches the pattern.
        {
            //debug line
            //console.log("true");
            return true;
        }
    }
});