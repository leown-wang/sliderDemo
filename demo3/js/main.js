$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')
$('.images > img:nth-child(3)').addClass('enter')
$('.images > img:nth-child(4)').addClass('enter')
$('.images > img:nth-child(5)').addClass('enter')
let n = 1
setInterval(()=>{
    $(`.images > img:nth-child(${f(n)})`).removeClass('current').addClass('leave')
        .one('transitionend',(e)=>{
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })
    $(`.images > img:nth-child(${f(n+1)})`).addClass('current').removeClass('enter')
    n++
},3000)

function f(n) {
    if (n>5) {
        n = n % 5
        if (n === 0 ){
            n = 5
        }
    }
    return n
}