// @ebidel gist
// https://gist.github.com/ebidel/3723309

/*
(function () {
    function d(a, c) {
        background.webkitClipPath = "circle(" + a + "px, " + c + "px, " + b + "px)"
    }

    var b = 120;
    window.addEventListener("mousemove", function (a) {
        d(a.pageX, a.pageY)
    });
    window.addEventListener("mousewheel", function (a) {
        if (a.shiftKey) {
            a.preventDefault();
            var c = a.wheelDeltaY;
            b += -c;
            b = 0 < c ? Math.max(90, b) : Math.min(b, window.innerHeight / 2);
            d(a.pageX, a.pageY)
        }
    })
})
();
*/

// Or paste this in the console and mouse over the page.
// SHIFT+mousewheel scroll makes the circle bigger/smaller.

(function() {
    var background = document.getElementById("background"); //$("#background");

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
        move(e.pageX, e.pageY);
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

})();