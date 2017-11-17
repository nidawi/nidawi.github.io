let _mainWrapper
let _wrapper
let _focus
let _focusImg
let _focusTitle
let _imgSelector = []
let _imgs = []




function injectImages() {
_imgSelector = _wrapper.querySelectorAll('img')

    for (let i = 0; i < _imgSelector.length; i++) {
        let item = _imgSelector[i]
        item.setAttribute('title', 'Click to enlarge.')
        item.onclick = imgClick

        _imgs.push(item)
    }
}
function imgClick() {
    _focus.style.width = (_mainWrapper.clientWidth - 60) + 'px'
    
    _focusImg.setAttribute('src', this.getAttribute('src'))
    _focusImg.setAttribute('title', 'Click to close.')
    _focusImg.onclick = closeFocus

    _focusTitle.innerHTML = this.getAttribute('alt')

    _focus.style.display = 'block'
}
function closeFocus() {
    _focus.style.display = 'none'
}


window.onload = function setup() {
    _mainWrapper = document.querySelector('.post-text-box')
    _wrapper = document.querySelector('.gallery-wrapper')
    _focus = document.querySelector('.focusImg')
    _focusImg = _focus.querySelector('img')
    _focusTitle = _focus.querySelector('h1')
    injectImages()
}