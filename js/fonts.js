// randomFontFamily
var fonts =
[
  '"Delius Unicase", cursive',
  '"Chela One", cursive',
  '"Noto Sans", sans-serif',
  '"Roboto", sans-serif',
  '"Source Sans Pro", sans-serif',
  '"Gaegu", cursive',
  '"Merienda", cursive',
  '"Indie Flower", cursive',
  '"Oswald", sans-serif',
  '"Titillium Web", sans-serif',
  '"Poor Story", cursive'
];

$('.randomFont').click(function () {
  var style = Math.floor(Math.random() * fonts.length);
  $('p').css('font-family', fonts[style]);
  $('h1').css('font-family', fonts[style]);
  document.getElemenById("#fonts").innerHTML = fonts.join();
  console.log(fonts[style]);
})
