/* lab6.js
 *      Author:         Jack
 *      Date:           2021-02-12
 *      Last revised:   2021-02-12
 *      Description:    JavaScript for Lab 6
 */

let a = document.getElementById('a'),
    b = document.getElementById('b'),
    displayCode     = document.getElementById('displayCode'),
    visibilityCode  = document.getElementById('visibilityCode'),
    aBtn            = document.getElementById('displayNone'),
    bBtn            = document.getElementById('hideMe'),
    reLoad          = document.getElementById('reLoad');

console.log(reLoad);

aBtn.addEventListener('click', function() {
    if (a.style.display == 'none') {
        a.style.display = 'block';
        displayCode.innerHTML = '<span class="displayCodeBlue">display</span>: <span class="displayCodeOrange">block</span>;';
        aBtn.innerHTML = "Remove Me";
        aBtn.style.transition = '2s';
        aBtn.style.background = '#ff5050';
        displayCode.style.top = '50px';
    } else {
        a.style.display = 'none';
        displayCode.innerHTML = '<span class="displayCodeBlue">display</span>: <span class="displayCodeOrange">none</span>;';
        aBtn.innerHTML = "Show Me";
        aBtn.style.transition = '2s';
        aBtn.style.background = '#5050ff';
        displayCode.style.top = '390px';
    }
});

bBtn.addEventListener('click', function() {
    if (b.style.visibility == 'hidden') {
        b.style.visibility = 'visible';
        visibilityCode.innerHTML = '<span class="displayCodeBlue">visibility</span>: <span class="displayCodeOrange">visible</span>;';
        bBtn.innerHTML = "Hide Me";
        bBtn.style.transition = '2s';
        bBtn.style.background = '#ff5050';
    } else {
        b.style.visibility = 'hidden';
        visibilityCode.innerHTML = '<span class="displayCodeBlue">visibility</span>: <span class="displayCodeOrange">hidden</span>;';
        bBtn.innerHTML = "Show Me";
        bBtn.style.transition = '2s';
        bBtn.style.background = '#5050ff';
    }

});   

reLoad.addEventListener('click', function(){
    location.reload();
})
    
