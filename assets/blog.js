var dummy;
var imgArray

function init () {
    dummy = document.getElementById('tester')
    imgArray = [dummy.innerHTML.split(' ')]
    dummy.innerHTML = ''
    for (let i = 0; i < imgArray.length; i++) {
        dummy.innerHTML += '<a href=\'' + imgArray[i] + '\'></a>'
    }
}

window.onload = init