function pingPong(num) {
  var myArray = [];
  for (var a = 1; a <= num; a++) {
    if (a % 15 === 0) {
      myArray.push("PING PONG");
    } else if (a % 5 === 0) {
      myArray.push("PONG");
    } else if (a % 3 === 0) {
      myArray.push("PING");
    } else {
      myArray.push(a);
    }
  };
  return myArray;
};
$(document).ready(function() {});