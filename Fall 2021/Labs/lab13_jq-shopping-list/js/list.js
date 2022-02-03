/* list.js
 *   Author:            Michael Ng
 *   Date:              2021-11-24
 *   Last revised:      2021-11-24
 *   Description:       jQuery for shopping list project.
 */  

$(document).ready(function () {
    /*****
     * Function that Handles Entries.
     * Checks to ensure that the user enters something.
     * Throws an alert if the field is empty.
     * Executes a Callback function (keyPressHandler)
     * if 'keyup' event is detected.
     *****/
    function keyPressHandler(e){
        //Define & initialize a variable to keep track of user's entry.
        let userEntry = $('#item').val();

        //Modifies the string to capitalize the first letter.
        //Capitalizes the first letter, then appends letters after the first.
        userEntry = userEntry.charAt(0).toUpperCase() + 
                    userEntry.slice(1);
        
        //check keyCode == 'Enter' (13)
        //&& non-empty string is input.
        //Add the item to list if not empty.
        if (e.keyCode == 13 && userEntry != ''){
            
            //add the item to the list.
            $('#shoppingList').append(
                '<li class="listItem">' + userEntry + '</li>'
            );

            //scroll to the bottom of the page.
            $(document).scrollTop($(document).height());

            //reset the value of the input field to empty.
            $('#item').val('');
        } 
        else if(e.keyCode == 13 && userEntry == ''){
            /* if user presses Enter without inputting into the field,
             * alert the user with an error message. */
            alert('Please Add an Item!');
        } //End of 'Enter' if-else statement.

    } //end of keyPressHandler function


    /*** Event Listener for keyup event.  ***/
    $(document).on('keyup', function(e) {
        //Utilizes the keyPressHandler function.
        keyPressHandler(e);

        //Added to satisfy Step 20 of Lab 13. Used for testing and has been commented out.
        //If the value of Item is not Empty, Log user input.
        //if($('#item').val() != '') {
        //    //Log the item as the user types.
        //    console.log($('#item').val());
        //}
    });


    /*** Clear the List (Event Listener) ***/
    $('#clearList').on('click', function() {
        //When the user clicks the "Clear" Button (utilizes the #clearList ID),
        //Erase all shopping list items.
        $('#shoppingList').empty();

        //Another way to clear the list.
        //$('#shoppingList').html('');
    });


    /*** Print the List. (Event Listener) ***/
    $('#printList').on('click', function() {
        //Opens the printing window when the "Print" button is clicked.
        window.print();
    });


    /*** Highlight List Items (Event Listeners) ***/
    //Mouse hovers over the element. List item is affected.
    $('#shoppingList').on('mouseenter', 'li', function() {
        //Add effects when the mouse hovers over the element.
        $(this).css({
            'transition': '.3s',
            'color': 'red'
        });
    });

    //Mouse leaves the element. List item is affected.
    //Has a dependency on the 'mouseenter' (above) Event Listener.
    $('#shoppingList').on('mouseleave', 'li', function() {
        //Reverts to normal when the mouse leaves the element.
        $(this).css({
            'transition': '.3s',
            'color': 'black'
        })
    });

    /*** Delete List Items (Event Listeners) ***/
    //Removes the list item when the user clicks on it.
    //Has a dependency on the 'Highlight - mouseenter' Event Listener.
    $('#shoppingList').on('click', 'li', function() {
        $(this).remove();
    });


}); //End of $(document).ready(function() { }) function.












