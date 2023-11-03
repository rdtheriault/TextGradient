function colorChange(inputId) {
    var colorMe = document.getElementById(inputId).value;
    var letters = colorMe.split("");
    var fill = "";
  
    for (var i = 0; i < letters.length; i++){ 
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      fill += '<span style="color:#' + randomColor + ';">' + letters[i] + '</span>';
    }
    //document.getElementById("color").textContent = fill;
    //console.log(fill);
    return fill
}
