function colorChange(colorID) {
  var colorMe = document.getElementById(colorID).textContent;
  var letters = colorMe.split("");
  var fill = "";

  for (var i = 0; i < letters.length; i++){ 
    fill += "<span id='coloredHot" + i + "'>" + letters[i] + "</span>";
  }
  document.getElementById(colorID).innerHTML = fill;
  for (var i = 0; i < letters.length; i++){ 
    var holder = document.getElementById("coloredHot"+i);
    var dist = holder.offsetTop;
    var height = window.innerHeight
    var percent = dist/height;
    var color = Math.round(255*percent);
    holder.style.color = "rgb("+color+",0,0)";
  }
}
