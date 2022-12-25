// run `node index.js` in the terminal

// run `node index.js` in the terminal

for (let j = 1; j <= 100; j++) {
  if (j % 3 === 0 && j % 5 === 0) {
    console.log('amazon');
  } else if (j % 3 === 0) {
    console.log('google');
  } else if (j % 5 === 0) {
    console.log('facebook');
  } else {
    console.log(j);
  }
}
