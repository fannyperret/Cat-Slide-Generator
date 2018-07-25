// random Phrases
var catPhrases =
[
  "I want to destroy you Human!",
  "MEOWWWWWWWWW!!!!",
  "Feed me stupid Human!",
  "I destroyed your sofa...",
  "I'm preparing the Revolution Cat!",
  "Are you stupid?",
  "Stopped click!"
]

// randomBorder
var grayscales =
[
  'grayscale(0%)',
  'grayscale(10%)',
  'grayscale(20%)',
  'grayscale(30%)',
  'grayscale(40%)',
  'grayscale(50%)',
  'grayscale(60%)',
  'grayscale(70%)',
  'grayscale(80%)',
  'grayscale(90%)',
  'grayscale(100%)'
];

function changeStyleImg () {

  var randomPhrases = Math.floor(Math.random() * (catPhrases.length));
  document.getElementById("cat-phrase").innerHTML = catPhrases[randomPhrases];
  console.log(randomPhrases);
  console.log(catPhrases[randomPhrases]);

  var randomGrays = Math.floor(Math.random() * (grayscales.length));
  document.getElementById('imgClickAndChange').style.filter = grayscales[randomGrays];
  console.log(randomGrays);
  console.log(grayscales[randomGrays]);
}

// randomBlur
var blur =
[
  'blur(0px)',
  'blur(1px)',
  'blur(2px)',
  'blur(3px)',
  'blur(4px)',
  'blur(5px)'
]

$('.randomBlur').click(function () {
  var style = Math.floor(Math.random() * blur.length);
  $('.grumpy-cat').css('filter', blur[style]);
  console.log(blur[style]);
})

// randomBrightness
var brightness =
[
  'brightness(0)',
  'brightness(0.10)',
  'brightness(0.20)',
  'brightness(0.30)',
  'brightness(0.40)',
  'brightness(0.50)',
  'brightness(0.60)',
  'brightness(0.70)',
  'brightness(0.80)',
  'brightness(0.90)',
  'brightness(1)',
];

$('.randomBrightness').click(function () {
  var style = Math.floor(Math.random() * brightness.length);
  $('.grumpy-cat').css('filter', brightness[style]);
  console.log(brightness[style]);
})

// randomContrast
var contrast =
[
  'contrast(0%)',
  'contrast(10%)',
  'contrast(20%)',
  'contrast(30%)',
  'contrast(40%)',
  'contrast(50%)',
  'contrast(60%)',
  'contrast(70%)',
  'contrast(80%)',
  'contrast(90%)',
  'contrast(100%)',
  'contrast(110%)',
  'contrast(120%)',
  'contrast(130%)',
  'contrast(140%)',
  'contrast(150%)',
  'contrast(160%)',
  'contrast(170%)',
  'contrast(180%)',
  'contrast(190%)',
  'contrast(200%)'
];

$('.randomContrast').click(function () {
  var style = Math.floor(Math.random() * contrast.length);
  $('.grumpy-cat').css('filter', contrast[style]);
  console.log(contrast[style]);
})

// randomHueRotate
var hueRotate =
[
  'hue-rotate(180deg)',
  'hue-rotate(160deg)',
  'hue-rotate(140deg)',
  'hue-rotate(120deg)',
  'hue-rotate(100deg)',
  'hue-rotate(80deg)',
  'hue-rotate(60deg)',
  'hue-rotate(40deg)',
  'hue-rotate(20deg)',
  'hue-rotate(0deg)',
];

$('.randomHueRotate').click(function () {
  var style = Math.floor(Math.random() * hueRotate.length);
  $('.grumpy-cat').css('filter', hueRotate[style]);
  console.log(hueRotate[style]);
})

// randomInvert
var invert =
[
  'invert(0%)',
  'invert(10%)',
  'invert(20%)',
  'invert(30%)',
  'invert(40%)',
  'invert(50%)',
  'invert(60%)',
  'invert(70%)',
  'invert(80%)',
  'invert(90%)',
  'invert(100%)'
];

$('.randomInvert').click(function () {
  var style = Math.floor(Math.random() * invert.length);
  $('.grumpy-cat').css('filter', invert[style]);
  console.log(invert[style]);
})

// randomOpacity
var opacity =
[
  'opacity(0%)',
  'opacity(10%)',
  'opacity(20%)',
  'opacity(30%)',
  'opacity(40%)',
  'opacity(50%)',
  'opacity(60%)',
  'opacity(70%)',
  'opacity(80%)',
  'opacity(90%)',
  'opacity(100%)'
];

$('.randomOpacity').click(function () {
  var style = Math.floor(Math.random() * opacity.length);
  $('.grumpy-cat').css('filter', opacity[style]);
  console.log(opacity[style]);
})

// randomSaturate
var saturate =
[
  'saturate(0)',
  'saturate(1)',
  'saturate(2)',
  'saturate(3)',
  'saturate(4)',
  'saturate(5)',
  'saturate(6)',
  'saturate(7)',
  'saturate(8)',
  'saturate(9)',
  'saturate(10)'
];

$('.randomSaturate').click(function () {
  var style = Math.floor(Math.random() * saturate.length);
  $('.grumpy-cat').css('filter', saturate[style]);
  console.log(saturate[style]);
})

// randomSepia
var sepia =
[
  'sepia(0%)',
  'sepia(10%)',
  'sepia(20%)',
  'sepia(30%)',
  'sepia(40%)',
  'sepia(50%)',
  'sepia(60%)',
  'sepia(70%)',
  'sepia(80%)',
  'sepia(90%)'
];

$('.randomSepia').click(function () {
  var style = Math.floor(Math.random() * sepia.length);
  $('.grumpy-cat').css('filter', sepia[style]);
  console.log(sepia[style]);
})

// randomDropShadow
var dropShadow =
[
  'drop-shadow(8px 8px 10px white)',
  'drop-shadow(8px 8px 10px black)',
  'drop-shadow(8px 8px 10px blue)',
  'drop-shadow(8px 8px 10px red)',
  'drop-shadow(8px 8px 10px green)',
  'drop-shadow(8px 8px 10px yellow)',
  'drop-shadow(8px 8px 10px grey)',
  'drop-shadow(8px 8px 10px pink)'
];

$('.randomDropShadow').click(function () {
  var style = Math.floor(Math.random() * dropShadow.length);
  $('.grumpy-cat').css('filter', dropShadow[style]);
  console.log(dropShadow[style]);
})
