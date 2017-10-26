/*NEED TO FIX PEN COLOURS ON NEW GRID SIZE */

//starting grid
var grid = $('.grid');
var dGrid = 16;

for (var i = 0; i < dGrid * dGrid; i++) {
  grid.append('<div class="box"></div>');
}
var box = $('.box');

box.width(600 / dGrid).height(600 / dGrid);

box.on('mouseenter', function() { //the pen
  $(this).addClass('filler');
});

// new grid

// the function to prompt, clear and add a new grid
var gridSize = function() {

  var boxAmount = prompt('Please enter a new grid dimension between 1 - 80!');
  if (isNaN(boxAmount) || boxAmount > 80 || boxAmount < 1) {
    var boxAmount = prompt('Please pick a number between 1-80!');
  }

  $('.grid').empty(); //need to clear old grid before adding new boxes
  for (i = 0; i < boxAmount * boxAmount; i++) {
    grid.append('<div class="box"></div>');
  }
  var newBoxes = $('.box') // needs to be after the function
  newBoxes.width(600 / boxAmount).height(600 / boxAmount);
  newBoxes.on('mouseenter', function() { //need to re-add filler
    $(this).addClass('filler');
  });

  $('.greenpen').click(function() {
    newBoxes.on('mouseenter', function() { //the pen
      $(this).addClass('greenfiller');
      $(this).removeClass('filler');
      $(this).removeClass('redfiller');
      $(this).removeClass('bluefiller');
      $(this).removeClass('leeloofiller');
    });
  });

  $('.blackpen').click(function() {
    newBoxes.on('mouseenter', function() { //the pen
      $(this).addClass('filler');
      $(this).removeClass('greenfiller');
      $(this).removeClass('redfiller');
      $(this).removeClass('bluefiller');
      $(this).removeClass('leeloofiller');
    });
  });

  $('.redpen').click(function() {
    newBoxes.on('mouseenter', function() { //the pen
      $(this).addClass('redfiller');
      $(this).removeClass('filler');
      $(this).removeClass('greenfiller');
      $(this).removeClass('bluefiller');
      $(this).removeClass('leeloofiller');
    });
  });

  $('.bluepen').click(function() {
    newBoxes.on('mouseenter', function() { //the pen
      $(this).addClass('bluefiller');
      $(this).removeClass('filler');
      $(this).removeClass('redfiller');
      $(this).removeClass('greenfiller');
      $(this).removeClass('leeloofiller');
    });
  });

  $('.leeloopen').click(function() {
    newBoxes.on('mouseenter', function() { //the pen
      $(this).addClass('leeloofiller');
      $(this).removeClass('filler');
      $(this).removeClass('redfiller');
      $(this).removeClass('greenfiller');
      $(this).removeClass('bluefiller');
    });
  });

}

$('.gridsize').click(gridSize);

//clear button

var clear = function() {
  $('.box').removeClass('filler');
  $('.box').removeClass('greenfiller');
  $('.box').removeClass('redfiller');
  $('.box').removeClass('bluefiller');
  $('.box').removeClass('leeloofiller');
}

$('.clear').click(clear);

$('.greenpen').click(function() {
  box.on('mouseenter', function() { //the pen
    $(this).addClass('greenfiller');
    $(this).removeClass('filler');
    $(this).removeClass('redfiller');
    $(this).removeClass('bluefiller');
    $(this).removeClass('leeloofiller');
  });
});

$('.blackpen').click(function() {
  box.on('mouseenter', function() { //the pen
    $(this).addClass('filler');
    $(this).removeClass('greenfiller');
    $(this).removeClass('redfiller');
    $(this).removeClass('bluefiller');
    $(this).removeClass('leeloofiller');
  });
});

$('.redpen').click(function() {
  box.on('mouseenter', function() { //the pen
    $(this).addClass('redfiller');
    $(this).removeClass('filler');
    $(this).removeClass('greenfiller');
    $(this).removeClass('bluefiller');
    $(this).removeClass('leeloofiller');
  });
});

$('.bluepen').click(function() {
  box.on('mouseenter', function() { //the pen
    $(this).addClass('bluefiller');
    $(this).removeClass('filler');
    $(this).removeClass('redfiller');
    $(this).removeClass('greenfiller');
    $(this).removeClass('leeloofiller');
  });
});

$('.leeloopen').click(function() {
  box.on('mouseenter', function() { //the pen
    $(this).addClass('leeloofiller');
    $(this).removeClass('filler');
    $(this).removeClass('redfiller');
    $(this).removeClass('greenfiller');
    $(this).removeClass('bluefiller');
  });
});