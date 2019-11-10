function printHTML(input){
  var iframe = document.createElement("iframe"); // create the element
  document.body.appendChild(iframe);  // insert the element to the DOM

  iframe.contentWindow.document.write(input); // write the HTML to be printed
  iframe.contentWindow.print();  // print it
  document.body.removeChild(iframe); // remove the iframe from the DOM
}



function firstThing() {
  document.getElementById("response1").innerHTML = `As you enter the dark and barely lit warehouse you see two doors, one to your left and one to your right.   <h3>Do you want to 1. Go through the door on the left in the warehouse or 2. Go through the door on the right? </h3><button type="button" name="Theevilbutton" onClick="firstAThing()">1</button>`;
}

function firstAThing() {
  document.getElementById("response1").innerHTML = `As you walk closer to the door, you notice beastly scratch marks on the ground and hear what sounds like deep whimpering from the other side. Could this be the president’s daughter?
  <h3>Do you want to 1. Open the door or 2. Turn around and go check the door on the right?</h3><button type="button" name="Theevilbutton" onClick="firstAAThing()">1</button>`;
}


function firstAAThing() {
  document.getElementById("reponse1").innerHTML = `You open the door and you realize it isn’t the sound of whimpering you’re hearing, but rather growling. You see two glaring red eyes look up to you and it pounces at you. YOU DIED.<h1 id="gameover">GAME OVER</h1>`;
}

function firstABThing() {
  document.getElementbyId("response2").innerHTML = `You feel uneasy about the door. After some thought, you decide to go to the other door.<button type="button" name="Theevilbutton" onClick="firstBThing()">1</button>`;
}

function firstBThing() {
  document.getElementbyId("response2").innerHTML = `You smell the faint smell of gasoline as you get closer to the door but other than that you hear no signs of movement from inside.
  <button type="button" name="Theevilbutton" onClick="secondThing()">1</button>`;
}
function secondThing() {
  document.getElementbyId("response2").innerHTML = `You break into the house and try to unlock all the doors. You see several doors, trying all of them. As you turn each of the doorknobs, you notice only two of the doors are unlocked.<button type="button" name="Theevilbutton" onClick="secondThing()">1</button>`;
}

function secondAThing() {
  document.getElementbyId("response1").innerHTML = `You carefully walk through the halls to the first door. You hear a muffled, high-pitched sound, continuously repeating in short intervals. You can’t quite make out what the sound is.
<button type="button" name="Theevilbutton" onClick="secondAThing()">1</button>`;
}

function secondAAThing() {
  document.getElementbyId("response1").innerHTML = `Assuming that the sound is the girl whimpering with a gag on her mouth, you open the door and walk in.
<button type="button" name="Theevilbutton" onClick="secondAAThing()">1</button>`;
}

function secondABThing() {
  document.getElementbyId("response2").innerHTML = `You feel uneasy about the door. After some thought, you decide to go to the other door.
<button type="button" name="Theevilbutton" onClick="secondABThing()">2</button>`;
}

function secondBThing() {
  document.getElementbyId("response2").innerHTML = `You carefully walk through the halls to the second door. You hear the sound of a girl’s voice screaming for help.
<button type="button" name="Theevilbutton" onClick="secondBThing()">2</button>`;
}

function secondBAThing() {
  document.getElementbyId("response1").innerHTML = `You see a speaker sitting in the center of the room and realize that is where the sound is coming from. You turn around to leave the room when the serial killer jumps out from behind the door and shoots you. YOU DIED.
<button type="button" name="Theevilbutton" onClick="secondBAThing()">1</button>`;
}

function secondBBThing() {
  document.getElementbyId("response2").innerHTML = `You feel uneasy about the door. After some thought, you decide to go to the other door.
<button type="button" name="Theevilbutton" onClick="secondBBThing()">2</button>`;
}

function secondCThing() {
  document.getElementbyId("response3").innerHTML = ` You carefully walk through the halls to the third door. You notice a small patch of yellow silk clothing caught on the door, the color is still bright and not dulled by dust.
<button type="button" name="Theevilbutton" onClick="secondCThing()">3</button>`;
}

function secondCAThing() {
  document.getElementbyId("response1").innerHTML = `You walk in to see Emma, the president’s daughter, on the ground with a gag on her mouth and her arms tied around a pole. You quickly untie her arms and take off her gag. You and Emma rush out of the house and notify your agency of your success. Congratulations, mission complete!
<button type="button" name="Theevilbutton" onClick="secondCAThing()">1</button>`;
}

function secondCBThing() {
  document.getElementbyId("response2").innerHTML = `You feel uneasy about the door. After some thought, you decide to go to the other door.  
<button type="button" name="Theevilbutton" onClick="secondCBThing()">2</button>`;
}




 /*var done = false;
  while (done == false) {
    var way =  window.prompt("Type 'left' or 'right': ");
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
