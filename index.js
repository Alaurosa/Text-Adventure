function firstThing() {

    if(document.getElementById('textbox').value == "left")
    {
     document.write('<center><br><font color="#0000FF" size=20></b>You see a squid coming towards you, you have retrieved the food and flare but it is clearly slowing you down. To survive you either need to ditch the food or the flare. Pick wisely, your life depends on it.</b></font></br></center>');
     document.write('<br><br><center><form><input type="button" style="height: 100px; width: 100px" value="Back" onClick="history.go(-1);return true;"></form></center></br></br>');
    }
  }

/*  if (way == "left") {
      document.print("You see a squid coming towards you, you have retrieved the food and flare but it is clearly slowing you down. To survive you either need to ditch the food or the flare. Pick wisely, your life depends on it."); }
        leftOption = window.prompt("Type 'food' or 'flare': ");
        if (leftOption == "food") {
            var food = document.write("You open the box, finding only one meal left. You try to ration but it only lasts three days, you die.");
        } else if (leftOption == "flare") {
            var flare = document.write("You see an aproaching coast guard and try to launch the signal flare. However you end up hitting the boat. Not only killing the people aboard but also destroying any chance of survival you had.")
          }
        done = True

  }
  done = true;
}

 document.onkeydown = function(e) {
  switch(e.keyCode) {
    case 37:
      alert('left');
      break;
    case 38:
      alert('right');
      break;
    case 39:
      alert('left');
      break;

    case 37:
      alert('left');
      break;
  }
} */
