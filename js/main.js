/****************header******** */
const sideWidth = $('.list').outerWidth()
// console.log(sideWidth)

let openWidth = $('.side').css({ left: `-${sideWidth}px` })


$('.open').on('click', function (e) {
    e.preventDefault()
    $('.side').animate({ left: `0` }, 500)
    $('.open').animate({ left: `0` }, 500)
})


$('.close').on('click', function (e) {
    e.preventDefault()
    $('.side').animate({ left: `-${sideWidth}px` }, 500)
    $('.open').animate({ left: `-${sideWidth}px` }, 500)
})


var home=$('#home').offset().top
var dur=$('#duration').offset().top
var det=$('#details').offset().top
// console.log(det)
var cont=$('#contact').offset().top
// console.log(cont)

    $('#l1').on('click',function(e){
        e.preventDefault()
        $('html').animate({scrollTop:`${home}`},1000)
    })

    $('#l2').on('click',function(e){
        e.preventDefault()
        $('html').animate({scrollTop:`${dur}`},1000)

    })

    $('#l3').on('click',function(e){
        e.preventDefault()
        $('html').animate({scrollTop:`${det}`},1000)
    })

    $('#l4').on('click',function(e){
        e.preventDefault()
        $('html').animate({scrollTop:`${cont}`},1000)
    })

/*************End Header******************** */


/***********section2****** */

let slide = false;
$('.inner').hide()

function singers(innerText) {
    if (slide == true) {
        $('.' + innerText).slideUp()
        slide = false

    } else {
        $('.inner').slideUp()
        $('.' + innerText).slideDown(500)
        slide = true
    }
}

$('.singer1').on('click', function (e) {
    singers('innerText1')
})


$('.singer2').on('click', function () {
    singers('innerText2')
})


$('.singer3').on('click', function () {
    singers('innerText3')
})


$('.singer4').on('click', function () {
    singers('innerText4')
})

/*********end section2 */

/******sec3****** */

var time = ''
for (var i = 0; i < 4; i++) {
    time += `
     <div class="col pt-4">
                    <div class="duration border-white px-5 py-5 fs-2 z-3 text-white" id='time${i}'>
                    </div> 
    </div>

    `

} document.getElementById('countDown').innerHTML = time;


let arrivalDate = new Date('may 12, 2030 15:37:25').getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = arrivalDate - now
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('time0').innerHTML = '-' + days + ' d';
    document.getElementById('time1').innerHTML = hours + ' h';
    document.getElementById('time2').innerHTML = minutes + ' m';
    document.getElementById('time3').innerHTML = seconds + ' s';

    if (distance < 0) {
        clearInterval(x);
    }
}, 1000)

/********end secion3 *****/
/********start section4 */

$('#textarea').on('keyup', function () {
    var maxChar = 100;
    var numOfChar = $('#textarea').val().length;
    var remainChar = maxChar - numOfChar;

    if (remainChar <= 0) {
        $('#msg').text('you have finished the num of characters')
    } else {
        $('#num').text(remainChar)
    }

})
