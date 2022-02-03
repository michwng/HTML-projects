/**     animation.js
 *      Name:           Michael Ng
 *      Class:          CSCI 1720 940
 *      Date:           2021-11-09
 *      Last Revision:  2021-11-09
 *      Description:    jQuery for Lab 11 (animation)
 */


$(document).ready(function () {
    $('li.fields').filter(':nth-child(n+4)').addClass('hide');

    $('ul').on('click', 'li.title', function() {
        $(this).next()
            .slideDown(500)
            .siblings('li.fields')
            .slideUp(500);
        checkArrows($(this));
    });
});

function checkArrows(t) {
    t.find('i').removeClass('fa-plus');
    t.find('i').addClass('fa-chevron-down');
    t.siblings('li').find('i').removeClass('fa-chevron-down');
    t.siblings('li').find('i').addClass('fa-plus');
}























