

Number((document.querySelector('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(1)').value))

Number((document.querySelector('.credit-card>div:nth-of-type(1)>div:nth-of-type(2)>span:nth-of-type(1)').innerHTML))
var set;
var temp;
var a;

$(function () {
    $('.credit-card>div:nth-of-type(1)>div:nth-of-type(2)').mouseenter(function () {
        $('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(1)').css({ 'border': '1px solid #7171bf' })
    })

    $('.credit-card>div:nth-of-type(1)>div:nth-of-type(2)').mouseleave(function () {
        $('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(1)').css({ 'border': '1px solid #6c6a6ab8' })
    })

    $('.credit-card>div:nth-of-type(1)>div:nth-of-type(3)>div').click(function () {
        $('.credit-card>div:nth-of-type(1)>div:nth-of-type(2)').css({ 'border': 'none', 'border-radius': '0px' })
        $('.credit-card>div:nth-of-type(2)>form>input').css({ 'border': '1px solid #6c6a6ab8', 'box-shadow': 'none' })
        $('.credit-card>div:nth-of-type(1)>div:nth-of-type(3)>div').css({ 'border': 'none', 'border-radius': '0px' })
        $(this).css({ 'border': '2px solid white', 'border-radius': '5px' })


    })


    $('.credit-card>div:nth-of-type(1)>div:nth-of-type(2)').click(function () {
        $('.credit-card>div:nth-of-type(1)>div:nth-of-type(3)>div').css({ 'border': 'none', 'border-radius': '0px' })
        $('.credit-card>div:nth-of-type(2)>form>input').css({ 'border': '1px solid #6c6a6ab8', 'box-shadow': 'none' })

        $(this).css({ 'border': '2px solid white', 'border-radius': '5px' })
        $('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(1)').focus().css({ 'border': '1px solid #7171bf', 'box-shadow': '#837b7b73 1px 4px 12px 2px' })

        /* set = setInterval(_text, 200)*/



    })


    $('.credit-card>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(1)').click(function () {
        $('.credit-card>div:nth-of-type(1)>div:nth-of-type(3)>div').css({ 'border': 'none', 'border-radius': '0px' })
        $('.credit-card>div:nth-of-type(2)>form>input').css({ 'border': '1px solid #6c6a6ab8', 'box-shadow': 'none' })

        $(this).css({ 'border': '2px solid white', 'border-radius': '5px' })
        $('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(2)').focus().css({ 'border': '1px solid #7171bf', 'box-shadow': '#837b7b73 1px 4px 12px 2px' })
    })

    $('.credit-card>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)').click(function () {
        $('.credit-card>div:nth-of-type(1)>div:nth-of-type(3)>div').css({ 'border': 'none', 'border-radius': '0px' })
        $('.credit-card>div:nth-of-type(2)>form>input').css({ 'border': '1px solid #6c6a6ab8', 'box-shadow': 'none' })



        $(this).css({ 'border': '2px solid white', 'border-radius': '5px' })
        $('.credit-card>div:nth-of-type(2)>form>select:nth-of-type(1)').focus().css({ 'border': '1px solid #7171bf', 'box-shadow': '#837b7b73 1px 4px 12px 2px' })
    })

    $('.credit-card>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>span:nth-of-type(2)>span:nth-of-type(1)').click(function () {

        $('.credit-card>div:nth-of-type(2)>form>select:nth-of-type(1)').focus().css({ 'border': '1px solid #7171bf', 'box-shadow': '#837b7b73 1px 4px 12px 2px' })


    })

    $('.credit-card>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>span:nth-of-type(2)>span:nth-of-type(3)').click(function () {
        $('.credit-card>div:nth-of-type(2)>form>select').css({ 'border': '1px solid #6c6a6ab8', 'box-shadow': 'none' })

        $('.credit-card>div:nth-of-type(2)>form>select:nth-of-type(2)').focus().css({ 'border': '1px solid #7171bf', 'box-shadow': '#837b7b73 1px 4px 12px 2px' })


    })

    $('.credit-card>div:nth-of-type(2)>form>select:nth-of-type(1)').click(function () {

        a = ($('.credit-card>div:nth-of-type(2)>form>select:nth-of-type(1)').find(":selected").text())
        $('.credit-card>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>span:nth-of-type(2)>span:nth-of-type(1)').text(a)
    })

    $('.credit-card>div:nth-of-type(2)>form>select:nth-of-type(2)').click(function () {

        a = ($('.credit-card>div:nth-of-type(2)>form>select:nth-of-type(2)').find(":selected").text())
        $('.credit-card>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>span:nth-of-type(2)>span:nth-of-type(3)').text(a)
    })


    $('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(3)').click(function () {
        var i = 0

        $('.credit-card>div:nth-of-type(1)').css({ 'animation': 'card 1s linear forwards' }).children().css('display', 'none')
        $('.credit-card>div:nth-of-type(1)>div:nth-of-type(3)').after('<div>')
        $('.credit-card>div:nth-of-type(1)>div:nth-of-type(4)').after('<div>')
        $('.credit-card>div:nth-of-type(1)>div:nth-of-type(5)').append('<div>')

        

        $('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(3)').keyup(function () {

            
        if(($('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(3)').val().length) <= 4){

            $('.credit-card>div:nth-of-type(1)>div:nth-of-type(5)>div').text(($('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(3)').val().substring(0, i+1)))
            i++
       
        }else{
            $('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(3)').val( $('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(3)').val().substring(0, 4))
        }
            
        })

    })


    /*$('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(1)').click(function(){

        $('.credit-card>div:nth-of-type(1)').css({ 'animation': 'none' })
        $('.credit-card>div:nth-of-type(1)>div:nth-of-type(1)').css({ 'display': 'block' })
        $('.credit-card>div:nth-of-type(1)>div:nth-of-type(2)').css({ 'display': 'block' })
        $('.credit-card>div:nth-of-type(1)>div:nth-of-type(3)').css({ 'display': 'block' })

        $('.credit-card>div:nth-of-type(1)>div:nth-of-type(4)').css('display', 'none')
        $('.credit-card>div:nth-of-type(1)>div:nth-of-type(5)').css('display', 'none')

    })*/


})


function _text(event) {

    temp = (document.querySelector('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(1)').value.length)
    if (temp <= 19) {

        for (i = 0; i <= 3; i++) {
            document.querySelector('.credit-card>div:nth-of-type(1)>div:nth-of-type(2)>span:nth-of-type(1)').innerHTML = (document.querySelector('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(1)').value.substring(0, i + 1))

        }

        for (i = 14; i <= 18; i++) {
            document.querySelector('.credit-card>div:nth-of-type(1)>div:nth-of-type(2)>span:nth-of-type(4)').innerHTML = (document.querySelector('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(1)').value.substring(14, i + 1))
        }

    } else {
        document.querySelector('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(1)').value = document.querySelector('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(1)').value.substring(0, 19)
    }



    if (event.keyCode != 8) {
        if (temp == 4) {
            document.querySelector('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(1)').value = (document.querySelector('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(1)').value) + ' '
        } else if (temp == 9) {
            document.querySelector('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(1)').value = (document.querySelector('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(1)').value) + ' '
        } else if (temp == 14) {
            document.querySelector('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(1)').value = (document.querySelector('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(1)').value) + ' '
        }
    }




}


var p = 0;
function _text1(event) {

    document.querySelector('.credit-card>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(1)>span:nth-of-type(2)').innerHTML = (document.querySelector('.credit-card>div:nth-of-type(2)>form>input:nth-of-type(2)').value.substring(0, p + 1))
    p++
}