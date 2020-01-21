function hide() {
  var buttonId = ['intropic', 'intro', 'oldtree', 'appleseedtree', 'sprouttree', 'saplingtree', 'smalltree', 'seedtree', 'helloword', 'byeword', 'sayword', 'roarword', 'mildword', 'roastword'];
  for (var i = 0; i < buttonId.length; i++) {
    document.getElementById(buttonId[i]).style.display = 'none';
  }
}

function toggleElement(elementId) {
  var x = document.getElementById(elementId);
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function seed() {
  toggleElement('seedtree');
}

function sapling() {
  var x = document.getElementById('saplingtree');
  if (x.style.display === 'none') {
    x.style.display = 'block';

  } else {
    x.style.display = 'none';
  }
}

function sprout() {
  var x = document.getElementById('sprouttree');
  if (x.style.display === 'none') {
    x.style.display = 'block';

  } else {
    x.style.display = 'none';
  }
}

function smalltree() {

  var x = document.getElementById('smalltree');
  if (x.style.display === 'none') {
    x.style.display = 'block';

  } else {
    x.style.display = 'none';
  }
}

function maturetree() {

  var x = document.getElementById('oldtree');
  if (x.style.display === 'none') {
    x.style.display = 'block';

  } else {
    x.style.display = 'none';
  }
}

function fruitseed() {

  var x = document.getElementById('appleseedtree');
  if (x.style.display === 'none') {
    x.style.display = 'block';

  } else {
    x.style.display = 'none';
  }
}

function hello() {
  var text = document.getElementById('helloword');
  text.style.display = 'block';
}

function bye() {
  var text = document.getElementById('byeword');
  if (text.style.display === 'none') {
    text.style.display = 'block';
  } else {
    text.style.display = 'none';
  }
}

function say() {
  var text = document.getElementById('sayword');
  if (text.style.display === 'none') {
    text.style.display = 'block';
  } else {
    text.style.display = 'none';
  }
}

function roar() {
  var text = document.getElementById('roarword');
  if (text.style.display === 'none') {
    text.style.display = 'block';
  } else {
    text.style.display = 'none';
  }
}

function mild() {
  var text = document.getElementById('mildword');
  if (text.style.display === 'none') {
    text.style.display = 'block';
  } else {
    text.style.display = 'none';
  }
}

function roast() {
  var text = document.getElementById('roastword');
  if (text.style.display === 'none') {
    text.style.display = 'block';
  } else {
    text.style.display = 'none';
  }
}
