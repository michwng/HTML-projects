/* transform.js
 *  Author:         Jack
 *  Date:           2021-02-14
 *  Last revised:   2021-02-14
 *  Description:    JS for transform.html
 */

/* Variables */
const div               = document.getElementById('transformDiv')
var scaleSlider         = document.getElementById('scale'),
    scaleLabel          = document.getElementById('scale__val'),
    opacitySlider       = document.getElementById('opacity'),
    opacityLabel        = document.getElementById('opacity__val'),
    skewXSlider         = document.getElementById('skewX'),
    skewXLabel          = document.getElementById('skewX__val'),
    skewYSlider         = document.getElementById('skewY'),
    skewYLabel          = document.getElementById('skewY__val'),
    rotateSlider        = document.getElementById('rotate'),
    rotateLabel         = document.getElementById('rotate__val'),
    translateXSlider    = document.getElementById('translateX'),
    translateXLabel     = document.getElementById('translateX__val'),
    translateYSlider    = document.getElementById('translateY'),
    translateYLabel     = document.getElementById('translateY__val'),
    ok                  = document.getElementById('ok');

/* Event listeners for each slider */
scaleSlider.addEventListener('input', function() {
    div.style.transform = 'scale(' + scaleSlider.value + ')';
    scaleLabel.innerHTML = scaleSlider.value;
    resetSliders(scaleSlider);
    div.style.opacity = '1';
});

opacitySlider.addEventListener('input', function() {
    div.style.transform = 'scale(1) skewX(0) skewY(0) rotate(0) translateX(0) translateY(0)';
    div.style.opacity = parseFloat(opacitySlider.value);
    opacityLabel.innerHTML = opacitySlider.value;
    resetSliders(opacitySlider);
});

skewXSlider.addEventListener('input', function() {
    div.style.transform = 'skewX(' + skewXSlider.value + 'deg)';
    skewXLabel.innerHTML = skewXSlider.value;
    resetSliders(skewXSlider);
    div.style.opacity = '1';
});

skewYSlider.addEventListener('input', function() {
    div.style.transform = 'skewY(' + skewYSlider.value + 'deg)';
    skewYLabel.innerHTML = skewYSlider.value;
    resetSliders(skewYSlider);
    div.style.opacity = '1';
});

rotateSlider.addEventListener('input', function() {
    div.style.transform = 'rotate(' + rotateSlider.value + 'deg)';
    rotateLabel.innerHTML = rotateSlider.value;
    resetSliders(rotateSlider);
    div.style.opacity = '1';
});

translateXSlider.addEventListener('input', function() {
    div.style.transform = 'translateX(' + translateX.value + 'px)';
    translateXLabel.innerHTML = translateXSlider.value;
    resetSliders(translateXSlider);
    div.style.opacity = '1';
});

translateYSlider.addEventListener('input', function() {
    div.style.transform = 'translateY(' + translateY.value + 'px)';
    translateYLabel.innerHTML = translateYSlider.value;
    resetSliders(translateYSlider);
    div.style.opacity = '1';
});

ok.addEventListener('click', function() {
    let x       = document.getElementById('x').value,
        y       = document.getElementById('y').value,
        xition;
    
    xition = 'translate(' + x + 'px, ' + y + 'px)';
    div.style.transform = xition;
    translateXSlider.value = 0;
    translateYSlider.value = 0;
    translateXLabel.innerHTML = '0';
    translateYLabel.innerHTML = '0';
});

/* reset sliders to default when another is chosen */
function resetSliders(c) {
    if (c !== scaleSlider) {
        scaleSlider.value = 1;
        scaleLabel.innerHTML = '1';
    }
    if (c !== opacitySlider) {
        opacitySlider.value = 1;
        opacityLabel.innerHTML = '1';
    }
    if (c !== skewXSlider) {
        skewXSlider.value = 0;
        skewXLabel.innerHTML = '0';
    }
    if (c !== skewYSlider) {
        skewYSlider.value = 0;
        skewYLabel.innerHTML = '0';
    }
    if (c !== rotateSlider){
        rotateSlider.value = 0;
        rotateLabel.innerHTML = '0';
    }
    if (c !== translateXSlider){
        translateXSlider.value = 0;
        translateXLabel.innerHTML = '0';
    }
    if (c !== translateYSlider){
        translateYSlider.value = 0;
        translateYLabel.innerHTML = '0';
    }
    document.getElementById('x').value = '';
    document.getElementById('y').value = '';
}









