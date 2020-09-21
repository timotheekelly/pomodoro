window.onload = function () {
  
  var seconds = 00; 
  var mins = 00; 
  var appendMins = document.getElementById("mins")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;

  buttonStart.onclick = function() {

    if (mins === 0 && seconds === 0) {
        clearInterval(Interval);
        mins = "24";
        seconds = "59";
      appendMins.innerHTML = mins;
        appendSeconds.innerHTML = seconds;
    }
    
     clearInterval(Interval);
     Interval = setInterval(startTimer, 1000);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    mins = "25";
  	seconds = "00";
    appendMins.innerHTML = mins;
      appendSeconds.innerHTML = seconds;
  }
  
   
  
  function startTimer () {
    seconds--; 
    
    if(seconds < 9){
      appendSeconds.innerHTML = "0" + seconds;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
      
    } 
    
    if (seconds < 0 ) {
      console.log("seconds");
      mins--;
      appendMins.innerHTML = mins;
      seconds = 60;
      appendSeconds.innerHTML = "0" + 0;
    }
    
    if (mins < 9){
      appendMins.innerHTML = "0" + mins;
    }

    if (mins === 0 && seconds === 0) {
        clearInterval(Interval);
    }
  
  }
  

}