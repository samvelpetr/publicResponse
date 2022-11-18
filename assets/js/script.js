try {

    $(document).ready(function () {
        $('.wrapper-slider').slick({
            arrows: false,
            dots: true,
        });
    });
} catch (er) {

}
let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')
try {
    img1.addEventListener('mouseover', () => {
        // console.log(true);
        img1.src = 'assets/image/play_icon-hover.png'
    })
    img1.addEventListener('mousedown', () => {
        img1.src = 'assets/image/app_icon-active.png'
    })
    img1.addEventListener('mouseup', () => {
        img1.src = 'assets/image/play_icon-hover.png'
    })
    img1.addEventListener('mouseout', () => {
        // console.log(false)
        img1.src = 'assets/image/App_icon.png'
    })
    img2.addEventListener('mouseover', () => {
        // console.log(true);
        img2.src = 'assets/image/app_icon-hover.png'
    })
    img2.addEventListener('mousedown', () => {
        img2.src = 'assets/image/play_icon-active.png'
    })
    img2.addEventListener('mouseup', () => {
        img2.src = 'assets/image/app_icon-hover.png'
    })
    img2.addEventListener('mouseout', () => {
        // console.log(false)
        img2.src = 'assets/image/play_icon.png'
    })
} catch (err) {

}