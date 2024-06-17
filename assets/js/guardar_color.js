let colorGlobal;

document.addEventListener('keydown', function(event) {
    const keyDiv = document.getElementById('key');

    switch(event.key) {
        case 'a':
            colorGlobal = 'pink';
            keyDiv.style.backgroundColor = colorGlobal;
            break;
        case 's':
            colorGlobal = 'orange';
            keyDiv.style.backgroundColor = colorGlobal;
            break;
        case 'd':
            colorGlobal = 'lightblue';
            keyDiv.style.backgroundColor = colorGlobal;
            break;
        case 'q':
            createNewDiv('purple');
            break;
        case 'w':
            createNewDiv('grey');
            break;
        case 'e':
            createNewDiv('brown');
            break;
    }
});

function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    newDiv.style.margin = '10px';
    document.body.appendChild(newDiv);
}
