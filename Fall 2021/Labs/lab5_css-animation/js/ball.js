/* ball.js
 *  Author:         Jack
 *  Date:           2021-02-14
 *  Last revised:   2021-02-15
 *  Description:    JS for index.html (ball animation)
 */

var ball = document.getElementById('ball');

setInterval(function() {
    /* Variables (choose random values, 30-255 for color channels */
    let red   = Math.floor(Math.random() * 200) + Math.floor(Math.random() * 55),
        green = Math.floor(Math.random() * 200) + Math.floor(Math.random() * 55),
        blue  = Math.floor(Math.random() * 200) + Math.floor(Math.random() * 55),
        alpha = '1';
        bg    = '';
    
    console.log(red, green, blue);
    
    bg = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
    ball.style.transition = '5s';
    ball.style.background = bg;
}, 5000);