const container = document.getElementById('container');

function sizeAdjust(a) {
    container.style.gridTemplateColumns = `repeat(${a}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${a}, 1fr)`;
}

function initialize(a) {
    if (parseInt(a) > 100) {
        alert('Max size is 100');
        return;
    }
    if (parseInt(a) == 'NaN') {
        alert('Invalid entry');
        return;
    }
    emptyContainer();
    sizeAdjust(a);
    for (let i = 0; i < (a * a); i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        //pixel.style.border = '1px solid black';
        pixel.addEventListener('mouseover', function() {
            pixel.style.backgroundColor = 'black';
        });
        container.appendChild(pixel);
    }
}

function emptyContainer() {
    while (container.firstChild)
        container.removeChild(container.firstChild);
}

function hoverListeners() {
    const pixels = document.querySelectorAll('.pixel');
}

initialize(32);