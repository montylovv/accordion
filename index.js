document.addEventListener('DOMContentLoaded', () => {
    var el = document.getElementById('sprite');

    document.addEventListener('keydown', function(e) {
        el.style.animationPlayState = 'running';
        if (e.keyCode == 192) {
            el.style.animation = 'none';
            el.offsetHeight; /* trigger reflow to apply the change immediately */
            el.style.animation = null;
        }
    });

    document.addEventListener('keyup', function(e) {
        el.style.animationPlayState = 'paused';
    });
});