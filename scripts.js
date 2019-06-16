let image_1 = 'https://static1.squarespace.com/static/5c81365bd7819e6e2a01e6de/5cef457f57cef30001f47dbc/5cf3195b36475c0001606448/1559435665000/0N0A0241+copy.jpg'
let image_2 = 'https://static1.squarespace.com/static/5c81365bd7819e6e2a01e6de/5cef457f57cef30001f47dbc/5cf3195ce8f5e20001f7f889/1559435687711/0N0A2029+copy.jpg'
let image_3 = 'https://static1.squarespace.com/static/5c81365bd7819e6e2a01e6de/5cef457f57cef30001f47dbc/5cf3198a1f2ed90001a923e4/1559435727607/0N0A2368+2+copy.jpg'
let image_4 = 'https://static1.squarespace.com/static/5c81365bd7819e6e2a01e6de/5cef457f57cef30001f47dbc/5cf319a134c6660001cbcf40/1559435754603/0N0A2530+copy.jpg'
let image_5 = 'https://static1.squarespace.com/static/5c81365bd7819e6e2a01e6de/5cef457f57cef30001f47dbc/5cf319c9a8d33b000123bf49/1559435801707/0N0A2673+copy.jpg'
let image_6 = 'https://static1.squarespace.com/static/5c81365bd7819e6e2a01e6de/5cef457f57cef30001f47dbc/5cf319e57db3c3000107c5d3/1559435817028/0N0A2749+copy.jpg'
let image_7 = 'https://static1.squarespace.com/static/5c81365bd7819e6e2a01e6de/5cef457f57cef30001f47dbc/5cf31a136d01070001f0c578/1559435864863/0N0A2979+copy.jpg'
let image_8 = 'https://static1.squarespace.com/static/5c81365bd7819e6e2a01e6de/5cef457f57cef30001f47dbc/5cf31a224e623d0001a98108/1559487251551/0N0A4840+copy.jpg'
let image_9 = 'https://static1.squarespace.com/static/5c81365bd7819e6e2a01e6de/5cef457f57cef30001f47dbc/5cf31a5281528700010e529e/1559487252059/0N0A5379+copy.jpg'
let image_10 = 'https://static1.squarespace.com/static/5c81365bd7819e6e2a01e6de/5cef457f57cef30001f47dbc/5cf31a5c4cd2b60001724357/1559487251646/0N0A5559+copy.jpg'
let image_11 = 'https://static1.squarespace.com/static/5c81365bd7819e6e2a01e6de/5cef457f57cef30001f47dbc/5cf31a87964760000176c868/1559487251697/0N0A5661+copy.jpg'

let images = [
  image_1,
  image_2,
  image_3,
  image_4,
  image_5,
  image_6,
  image_7,
  image_8,
  image_9,
  image_10,
  image_11,
]



$(document).ready(function(){

  for (var image in images) {
    jQuery('<div/>', {
     id:'image' + image,
     class: 'my-card'
    }).appendTo('.card-carousel');

    let image_source = images[image]
    $('#image' + image).prepend($('<img>',{class: 'wedding_image', id: 'image' + image, src:image_source}))
  }

  $('.my-card:nth-child(' + 3 + ')').nextAll().hide();
  $('.my-card:nth-child(' + 2 + ')').addClass('active');
  $('.my-card').next().addClass('next');


  $('.my-card').click(function() {
    if ($(this).hasClass('active')) {
      console.log('THIS IS ACTIVE');
    }
    else {
      let last_image_div = $('.my-card:last-child')
      let first_image_div = $('.my-card:first-child')
      console.log(first_image_div, 'this is line 54');
      $slide = 0

        if ($(this).hasClass('next')) {
          $('.my-card:last-child').after(first_image_div);
          first_image_div.hide()
        }else {
          $('.my-card:nth-child(' + 1 + ')').before(last_image_div);
        }

        $(this).removeClass('prev next');
        $(this).siblings().removeClass('prev active next');
        $(this).addClass('active');

        $(this).prevAll().addClass('prev');
        $(this).nextAll().addClass('next');

        if ($(this).next().is(":hidden")) {
          $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
            $(this).removeClass('prev next');
            $(this).siblings().removeClass('prev active next');
            $(this).prev().addClass('prev');
            $(this).next().addClass('next');
            $(this).next().show();
            $('.my-card').prevAll().not('.prev, .active, .next').hide();
        }

        if ($(this).prev().is(":hidden")){
          $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
            $(this).removeClass('prev next');
            $(this).siblings().removeClass('prev active next');
            $(this).prev().addClass('prev');
            $(this).next().addClass('next');
            $(this).prev().show();
            $('.my-card').nextAll().not('.prev, .active, .next').hide();
        }
      }
  })
})
