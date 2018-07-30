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

var index = 0;

$('.randomFont').click(function () {
  if (index < (fonts.length-1)) {
    index++;
  } else {
    index = 0;
  }
  $('p').css('font-family', fonts[index]);
  $('h1').css('font-family', fonts[index]);
  console.log(fonts[index]);
});
