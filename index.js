function printHTML(input){
  var iframe = document.createElement("iframe"); // create the element
  document.body.appendChild(iframe);  // insert the element to the DOM

  iframe.contentWindow.document.write(input); // write the HTML to be printed
  iframe.contentWindow.print();  // print it
  document.body.removeChild(iframe); // remove the iframe from the DOM
}







function firstThing() {


 /*var done = false;
  while (done == false) {
    var way =  window.prompt("Type 'left' or 'right': "); */
   if(document.getElementById('textbox').value == "1")
    {
     document.write('<center><br><font color="#0000FF" size=20></b>As you enter the dark and barely lit warehouse you see two doors, one to your left and one to your right.</b></font></br></center>');
      if(document.getElementById('textbox').value == "1")
      {
      document.write('<center><br><font color="#0000FF" size=20></b>As you walk closer to the door, you notice beastly scratch marks on the ground and hear what sounds like deep whimpering from the other side. Could this be the president’s daughter? </b></font></br></center>')
      }
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
