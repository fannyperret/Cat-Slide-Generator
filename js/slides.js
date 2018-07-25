$(document).ready(function() {

  for( let i in db.images) {
    if(db.images[i].type == "image") {
      $('.slider').append($('<div class="item"><img class="img-fluid data-lazy" src="' + db.images[i].src + '" /></div>'));
    }
    else if(db.images[i].type == "text") {
      $('.slider').append($('<div class="item"><p class"text-alone">' + db.images[i].content + '</p></div>'));
    }
    else if(db.images[i].type == "textImage") {
      $('.slider').append($('<div class="item"><img class="img-fluid data-lazy" src="' + db.images[i].src + '" /><p class="with-img">' + db.images[i].content + '</p></div>'));
    }
  }

  $('.slider').slick( {
    lazyLoas: 'ondemand',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    fade: true
  });
})

// randomStyleBorder
var styleBorders =
[
  'dotted!important',
  'dashed!important',
  'solid!important',
  'groove!important',
  'ridge!important',
  'inset!important',
  'outset!important',
  'none!important',
  'hidden!important'
];

$('.randomStyleBorder').click(function () {
  var style = Math.floor(Math.random() * styleBorders.length);
  $('.img-fluid').css('border-style', styleBorders[style]);
  console.log(styleBorders[style]);
})

// randomBorder
var borders =
[
  '0%',
  '5%',
  '10%',
  '15%',
  '20%',
  '25%',
  '30%',
  '35%',
  '40%',
  '45%',
  '50%'
];

$('.randomBorder').click(function () {
  var style = Math.floor(Math.random() * borders.length);
  $('img').css('border-radius', borders[style]);
  console.log(borders[style]);
})

$('.btn').popover();

document.getElementById('text').value = valeur;
