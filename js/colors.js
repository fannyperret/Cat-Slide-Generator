// randomColor
var colors =
[
  '#fc5c65',
  '#fd9644',
  '#fed330',
  '#26de81',
  '#2bcbba',
  '#eb3b5a',
  '#fa8231',
  '#f7b731',
  '#20bf6b',
  '#0fb9b1',
  '#45aaf2',
  '#4b7bec',
  '#a55eea',
  '#ffffff',
  '#d1d8e0',
  '#778ca3',
  '#2d98da',
  '#3867d6',
  '#8854d0',
  '#a5b1c2',
  '#4b6584'
];

var index = 0;

$('.randomColor').click(function () {
  if (index < (colors.length - 1)) {
    index++;
  } else {
    index = 0;
  }
  $('#coloring').css('background-color', colors[index]);
  $('h1').css('color', colors[index]);
  console.log(colors[index]);
});

// randomColorTitle
var colorsTitles =
[
  '#fc5c65',
  '#fd9644',
  '#fed330',
  '#26de81',
  '#2bcbba',
  '#eb3b5a',
  '#fa8231',
  '#f7b731',
  '#20bf6b',
  '#0fb9b1',
  '#45aaf2',
  '#4b7bec',
  '#a55eea',
  '#ffffff',
  '#d1d8e0',
  '#778ca3',
  '#2d98da',
  '#3867d6',
  '#8854d0',
  '#a5b1c2',
  '#4b6584',
];

$('.randomColorTitle').click(function () {
  var random = Math.floor(Math.random() * colorsTitles.length);
  $('body').removeClass('.colouring');
  $('h1').css('color', colorsTitles[random]);
  console.log(colorsTitles[random]);
})

// randomColorTitle
var colorsP =
[
  '#fc5c65',
  '#fd9644',
  '#fed330',
  '#26de81',
  '#2bcbba',
  '#eb3b5a',
  '#fa8231',
  '#f7b731',
  '#20bf6b',
  '#0fb9b1',
  '#45aaf2',
  '#4b7bec',
  '#a55eea',
  '#ffffff',
  '#d1d8e0',
  '#778ca3',
  '#2d98da',
  '#3867d6',
  '#8854d0',
  '#a5b1c2',
  '#4b6584',
];

$('.randomColorP').click(function () {
  var random = Math.floor(Math.random() * colorsP.length);
  $('body').removeClass('.colouring');
  $('p').css('color', colorsP[random]);
  console.log(colorsP[random]);
})

// randomBackgroundTitle
var colorsBackground =
[
  '#fc5c65',
  '#fd9644',
  '#fed330',
  '#26de81',
  '#2bcbba',
  '#eb3b5a',
  '#fa8231',
  '#f7b731',
  '#20bf6b',
  '#0fb9b1',
  '#45aaf2',
  '#4b7bec',
  '#a55eea',
  '#ffffff',
  '#d1d8e0',
  '#778ca3',
  '#2d98da',
  '#3867d6',
  '#8854d0',
  '#a5b1c2',
  '#4b6584'
];

$('.randomBackgroundTitle').click(function () {
  var random = Math.floor(Math.random() * colorsBackground.length);
  $('.title').css('background-color', colorsBackground[random]);
  console.log(colorsBackground[random]);
})
