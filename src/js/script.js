$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/leftarrow.png" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/rightarrow.png" alt="arrow"></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: true, 
              arrows: false
            }
          }
        ]
          
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    
    function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
      });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
  });
// var name = "Ivan";  
// let age = 21;  
// const pi = 12.7;
// let obj = {
//     name: "apple",
//     color: "green",
//     weight: 200 
// }
// // alert(123)
// // console.log("Hello wrold") на консолье надпис Привет Мир 
// // confirm("Вам есть 18?") спрашивает у пользователья есть ли унего 18 
// // let answer = confirm("Вам есть 18?"); спрашивает у пользователья есть ли унего 18 
// // console.log(answer); Если ответ да то на консолье показывает true а если нет то false 
// // console.log(4+4);
// // if (2*5 == 8*1){
// //     console.log("Верно")
// // }else {
// //     console.log("Ошибка")
// // }
// // let answer = confirm("Вам есть 18?"); 
// // if (answer) {
// //     console.log("Проходите")
// // } else {
// //     console.log("Уходите")
// // }
// // for (let i = 1; i < 8; i++){
// //     console.log(i);
// // }
// function logging(a, b) {
//     console.log(a+b)
// }
// logging(10, 20)
// logging(2,13)
