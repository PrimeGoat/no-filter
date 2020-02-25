/******************
 * YOUR CODE HERE *
 ******************/

function onlyOdds(array) {
  const odds = [];
  for(let i = 0; i < array.length; i++) {
    if(Math.abs(array[i]) % 2 !== 0) {
      odds.push(array[i]);
    }
  }

  return odds;
}

function onlyEvens(array) {
  const evens = [];
  for(let i = 0; i < array.length; i++) {
    if(Math.abs(array[i]) % 2 === 0) {
      evens.push(array[i]);
    }
  }

  return evens;
}

function shortNamesOnly(array) {
  const out = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i].length < 7) {
      out.push(array[i]);
    }
  }

  return out;
}

function dNames(array) {
  const out = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i][0].toLowerCase() === 'd') {
      out.push(array[i]);
    }
  }

  return out;
}

function k(array) {
  const out = [];
  for(let i = 0; i < array.length; i++) {
    if(0) {
      out.push(array[i]);
    }
  }

  return out;
}

function l(array) {
  const out = [];
  for(let i = 0; i < array.length; i++) {
    if(0) {
      out.push(array[i]);
    }
  }

  return out;
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
