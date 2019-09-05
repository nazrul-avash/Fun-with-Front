
// function timeis(){
// 	var dt = new Date().toString();
// 	document.getElementById("one").innerHTML = dt;
	
// }
// window.onload = function() {
//   var context = new AudioContext();
// }
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome){
      $('#iframeAudio').remove()
    }
  else{
     $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background 
  }
function randomColor(){
	var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;
    var new_color = 'rgb(' + r + ','+ g + ',' + b +')';
    return new_color;
}
function changeColor(){
	// alert("af");
	
    // alert(new_color);
   	var list = document.getElementsByClassName("low");
    list[0].style.backgroundColor = randomColor();
    list[1].style.backgroundColor = randomColor();
    var list2 = document.getElementsByClassName("mid");
    list2[0].style.backgroundColor = randomColor();
    list2[1].style.backgroundColor = randomColor();
    var list3 = document.getElementsByClassName("high");
    list3[0].style.backgroundColor = randomColor();
    
    setTimeout(changeColor, 500);

}