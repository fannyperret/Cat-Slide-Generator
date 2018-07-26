// randomFontSize
var fontSize =
[
  '1em',
  '1.1em',
  '1.2em',
  '1.3em',
  '1.4em',
  '1.5em',
  '1.6em',
  '1.7em',
  '1.8em',
  '1.9em',
  '2em',
  '2.1em',
  '2.2em',
  '2.3em',
  '2.4em',
  '2.5em',
  '2.6em',
  '2.7em',
  '2.8em',
  '2.9em',
  '3em',
  '3.1em',
  '3.2em',
  '3.3em',
  '3.4em',
  '3.5em'
];

var index = 0;

$('.randomFontSize').click(function () {
  for (i = 0; i < fontSize[index].length; i++)
  {
    $('h1').css('font-size', fontSize[index]);
  }
  // if (index < (fontSize.length-1)) {
  //   index++;
  // } else {
  //   index = 0;
  // }
  $('h1').css('font-size', fontSize[index]);
  console.log(fontSize[index]);
});
