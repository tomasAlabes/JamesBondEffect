// @ebidel gist
// https://gist.github.com/ebidel/3723309

(function() {
    "use strict";

    var background = document.getElementById("background"),
        titleHeight = 40,
        effectMinX = 1109,
        effectMinY = 339,
        effectMaxX = 1254,
        effectMaxY = 470;

    var radius = 120; // px

    function move(x, y) {
        // CSS clip path - http://dvcs.w3.org/hg/FXTF/raw-file/tip/masking/index.html#the-clip-path
        background.style.webkitClipPath = 'circle(' + x + 'px, ' + y + 'px, ' + radius + 'px)';
        background.style.mozClipPath = 'circle(' + x + 'px, ' + y + 'px, ' + radius + 'px)';
        background.style.msClipPath = 'circle(' + x + 'px, ' + y + 'px, ' + radius + 'px)';
        background.style.oClipPath = 'circle(' + x + 'px, ' + y + 'px, ' + radius + 'px)';
        background.style.clipPath = 'circle(' + x + 'px, ' + y + 'px, ' + radius + 'px)';
    }

    window.addEventListener('mousemove', function(e) {
        move(e.pageX, e.pageY - titleHeight);
    });

    // Holding down SHIFT and scrolling grows/shrinks the circle.
    window.addEventListener('mousewheel', function(e) {
        if (!e.shiftKey) {
            return;
        }

        e.preventDefault(); // Prevent scrolling.

        var deltaY = e.wheelDeltaY;
        radius += -deltaY;
        if (deltaY > 0) { // up / shrink
            radius = Math.max(90, radius);
        } else {
            radius = Math.min(radius, window.innerHeight / 2);
        }
        move(e.pageX, e.pageY);
    });

    background.onclick = function(evt){
        var x = evt.pageX,
            y = evt.pageY - 40;

        if(x > effectMinX && y > effectMinY && x < effectMaxX && y < effectMaxY){
            console.log("Effect");
        }

    };

})();