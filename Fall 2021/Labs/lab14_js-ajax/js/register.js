/**
 *  register.js
 *      Author:         Michael Ng
 *      Date:           2021-11-28
 *      Last Revised:   2021-11-28
 *      Description:    Dynamic form generation.
 */

/*******************************************************************
* So we're going to start with an empty element and populate it
* with the elements needed to generate a sign in form dynamically.
* If we're feeling real froggy, we'll create a second form for
* user registration. Maybe, we'll also add some AJAX calls to
* register / authenticate users when the form is submitted.
******************************************************************/

//Event Listener attached to 'Register' link.
document.getElementById("registerLink").addEventListener('click', 
function() {
    initModal();

    //build the form elements:
    //modalInner
    modalInner.setAttribute("id", "modal-inner");
    modalInner.classList.add("modal-inner");
    modalInner.style.height = "530px";

    //id
    textIdLabel.appendChild(textIdLabelText);
    textId.setAttribute("type", "text");
    textId.setAttribute("name", "uid");
    textId.setAttribute("id", "uid");

    //pw
    pwLabel.appendChild(pwLabelText);
    textPw.setAttribute("type", "password");

    //pw confirmation
    pwLabelConf.appendChild(pwLabelConfText);
    textPwConf.setAttribute("type", "password");

    //first name
    fnLabel.appendChild(fnLabelText);
    textFirstName.setAttribute("type", "text");

    //last name
    lnLabel.appendChild(lnLabelText);
    textLastName.setAttribute("type", "text");

    //email
    emailLabel.appendChild(emailLabelText);
    textEmail.setAttribute("type", "text");

    //submit button
    submitBtn.appendChild(submitBtnContent);
    submitBtn.setAttribute("id", "regSubmit");
    submitBtn.style.bottom = "10px";
    submitBtn.style.transform = "translateX(-160px)";

    //cancel button
    cancelBtn.appendChild(cancelBtnContent);
    cancelBtn.setAttribute("id", "regCancel");
    cancelBtn.style.bottom = "10px";
    cancelBtn.style.transform = "translateX(10px)";

    //add everything to the modal (modal-inner)
    modalInner.appendChild(textIdLabel);
    modalInner.appendChild(textId);
    modalInner.appendChild(pwLabel);
    modalInner.appendChild(textPw);
    modalInner.appendChild(pwLabelConf);
    modalInner.appendChild(textPwConf);
    modalInner.appendChild(fnLabel);
    modalInner.appendChild(textFirstName);
    modalInner.appendChild(lnLabel);
    modalInner.appendChild(textLastName);
    modalInner.appendChild(emailLabel);
    modalInner.appendChild(textEmail);

    //add modal-inner to modal.
    modal.appendChild(modalInner);
    modal.appendChild(submitBtn);
    modal.appendChild(cancelBtn);

    //hide overflow and show the modal.
    modal.parentNode.style.overflow = "hidden";
    modal.classList.remove("hideModal");
    modal.classList.add("showModal");

    //This fixes the autofocus attribute.
    textId.focus();



}); //end of registerLink event listener


//Event Listener for the submit button.
document.addEventListener("click", function(e) {
    
    const el = e.target;

    if(el.id == "regSubmit") {

        //If not all form fields are filled out.
        if(!checkForm(modalInner)) {
            //TODO: A custom alert can be made here.
            alert("All form fields must be completed");
        } else {
            //all form fields are filled out.
            //removes and clears modal and sends data.
            let response = sendData();
            modal.classList.remove("showModal");
            modal.classList.add("hideModal");

            initModal();
            //TODO: Collapse into function.
        }

    }
});


//Event Listener for the cancel button.
// closes the modal and resets it.
cancelBtn.addEventListener("click", function() {
    //Note: see line #113.
    modal.classList.remove("showModal");
    modal.classList.add("hideModal");
})


// check form before butmitting it to 
// make sure all fields are filled out.

//'f' is the 'form', passed from calling the 
// method. Neccessary because elements were
// added dynamically.
function checkForm(f) {
    //get all fields and convert them to an array.
    let fields = Array.from(f.querySelectorAll("input"));

    //check each field. If empty, return false.
    for(var i = 0; i < fields.length; i++) {
        if (fields[i].value == "") {
            return false;
        }
        //if all fields are completed,
        return true;
    }
}


//XHR request (add record to database)
function sendData() {
    //variables for packing data to send.
    //to register.php.
    let     urlEncodedData = "",
            urlEncodedDataPairs = [];
    const XHR = new XMLHttpRequest(), //Cross-site request object.
          data = { //This is a JS object
            //information from the form.
            uid:        textId.value, //User ID
            //Password (use an external library to encrypt the password)
            pw:         CryptoJS.AES.encrypt("textPw.value", "AppSalt"),
            
            firstName:      textFirstName.value,
            lastName:       textLastName.value,
            email:          textEmail.value
          }

          //turn the data object into an array of URL-encoded key/value pairs.
          //'d' becomes the key;
          //'data[d]' is its value.
          for(d in data) {
              urlEncodedDataPairs.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
          }

          //combine the pairs into a single string and
          //replace all %-encoded spaces to the '+' character; 
          //matches the behavior of browser form submission.
          urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );


          XHR.addEventListener('load', function(event) {
              //TODO: Add success alert
          })

          XHR.addEventListener('error', function(event) {
              //TODO: Add error alert
          });

          //setup the request.
          XHR.open('POST', 'php/register.php');

          //add the required HTTP header for form data POST requests.
          XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

          //send our data
          XHR.send(urlEncodedData);
} //End of sendData() function












