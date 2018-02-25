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
$(document).ready(function() {
      $("form#form-num").submit(function(event) {
        event.preventDefault();
        $("li.res").empty();
        var num = parseInt($("#number-input").val());
        var derivedArray = pingPong(num) + '';
        var splitArray = derivedArray.split(",").join("<br>");
      });