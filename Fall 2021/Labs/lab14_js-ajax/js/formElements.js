/**
 *  formElements.js
 *      Author:         Michael Ng
 *      Date:           2021-11-28
 *      Last Revised:   2021-11-28
 *      Description:    Definitions of elements that will be used
 *                      by the forms when they're built.
 */

const modal         = document.getElementById('modal'),
    modalInner      = document.createElement("div"),

    //user ID
    textId          = document.createElement("input"),
    textIdLabel     = document.createElement("label"),
    textIdLabelText = document.createTextNode("User ID"),

    //password
    textPw          = document.createElement("input"),
    pwLabel         = document.createElement("label"),
    pwLabelText     = document.createTextNode("Password"),

    //confirm password
    textPwConf      = document.createElement("input"),
    pwLabelConf     = document.createElement("label"),
    pwLabelConfText = document.createTextNode("Confirm Password"),

    //first name
    textFirstName   = document.createElement("input"),
    fnLabel         = document.createElement("label"),
    fnLabelText     = document.createTextNode("First Name"),

    //last name
    textLastName    = document.createElement("input"),
    lnLabel         = document.createElement("label"),
    lnLabelText     = document.createTextNode("Last Name"),

    //email
    textEmail       = document.createElement("input"),
    emailLabel      = document.createElement("label"),
    emailLabelText  = document.createTextNode("Email"),

    //submit button
    submitBtn        = document.createElement("button"),
    submitBtnContent = document.createTextNode("Submit"),

    //ok button
    okBtn           = document.createElement("button"),
    okBtnContent    = document.createTextNode("OK"),

    //signin ok button
    signinOkBtn         = document.createElement("button"),
    signinOkBtnContent  = document.createTextNode("OK"),

    //admin ok button
    adminOkBtn        = document.createElement("button"),
    adminOkBtnContent = document.createTextNode("OK"),

    //auth ok button
    authOkBtn         = document.createElement("button"),
    authOkBtnContent  = document.createTextNode("OK"),

    //cancel button
    cancelBtn           = document.createElement("button"),
    cancelBtnContent    = document.createTextNode("Cancel");


    //Initialize the modal.
    //(Delete the form values so they don't appear
    //if the modal is reloaded.)
    function initModal() {
        // reset each element (doesn't delete
        // the element, just empties it out.)
        resetEl(textId);
        resetEl(textPw);
        resetEl(textPwConf);
        resetEl(textFirstName);
        resetEl(textLastName);
        resetEl(textEmail);
        resetEl(modalInner);
        resetEl(modal);

        // reset the modal and inner-modal's
        // ids and remove their HTML content.
        modal.setAttribute("id", "modal");
        modalInner.setAttribute("id", "modal-inner");
        modalInner.innerHTML = "";
        modal.innerHTML = "";
        return;
    }

    // Means "Reset Element".
    // Empties the specified element.
    function resetEl(el) {
        //remove all of the element's attributes.
        while(el.attributes.length > 0) {
            el.removeAttribute(el.attributes[0].name);
        }

        //reset the element's value, if it has one.
        el.value = "";
        // reset the element's HTML content.
        el.innerHTML = "";
    }
