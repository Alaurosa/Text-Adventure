function printHTML(input){
  var iframe = document.createElement("iframe"); // create the element
  document.body.appendChild(iframe);  // insert the element to the DOM

  iframe.contentWindow.document.write(input); // write the HTML to be printed
  iframe.contentWindow.print();  // print it
  document.body.removeChild(iframe); // remove the iframe from the DOM
}




function oneA() {
  document.getElementById("response1").innerHTML = `As you walk closer to the door, you notice beastly scratch marks on the ground and hear what sounds like deep whimpering from the other side. Could this be the president’s daughter?
  <h3>Do you want to 1. Open the door or 2. Turn around and go check the door on the right?</h3><button type="button" name="Theevilbutton" onClick="oneAA()">1</button><button type="button" name="Theevilbutton2" onClick="oneAB()">2</button>`;
}

function oneAA() {
  document.getElementById("response3").innerHTML = `You open the door and you realize it isn’t the sound of whimpering you’re hearing, but rather growling. You see two glaring red eyes look up to you and it pounces at you. YOU DIED.<h1 id="gameover">GAME OVER</h1>`;
}

function oneAB() {
  document.getElementById("response3").innerHTML = `You feel uneasy about the door. After some thought, you decide to go to the other door.<button type="button" name="Theevilbutton" onClick="reoneB()">1</button>`;
}

function oneB() {

  document.getElementById("response2").innerHTML = `You smell the faint smell of gasoline as you get closer to the door but other than that you hear no signs of movement from inside.
  <button type="button" name="Theevilbutton" onClick="oneBA()">1</button><button type="button" name="Theevilbutton2" onClick="oneBB()">2</button>`;
}

function reoneB() {
  document.getElementById("response4").innerHTML = `You smell the faint smell of gasoline as you get closer to the door but other than that you hear no signs of movement from inside.
  <button type="button" name="Theevilbutton2" onClick="two()">2</button>`;
}

function oneBA() {
  document.getElementById("response3").innerHTML = `The light bulb short circuits and creates a spark. The room goes up in flames and the fire quickly spreads throughout the warehouse. YOU DIED.h1 id="gameover">GAME OVER</h1>`;
}

function oneBB() {
  document.getElementById("response3").innerHTML = `You decide that walking through either of these doors is deadly and exit the warehouse and follow the second lead, the house where the serial killer was spotted two days ago.`;
  retwo();
}

function retwo() {
  document.getElementById("response4").innerHTML = `You break into the house and try to unlock all the doors. You see several doors, trying all of them. As you turn each of the doorknobs, you notice only two of the doors are unlocked.<button type="button" name="Theevilbutton" onClick="twoA()">1</button><button type="button" name="Theevilbutton2" onClick="twoB()">2</button>`;
}

function two() {
  document.getElementById("response1").innerHTML = `You break into the house and try to unlock all the doors. You see several doors, trying all of them. As you turn each of the doorknobs, you notice only two of the doors are unlocked.<button type="button" name="Theevilbutton" onClick="twoA()">1</button>`;
}

function twoA() {
  document.getElementbyId("response1").innerHTML = `You carefully walk through the halls to the first door. You hear a muffled, high-pitched sound, continuously repeating in short intervals. You can’t quite make out what the sound is. Do you want to 1. Walk in or 2. Walk away to the second door?
<button type="button" name="Theevilbutton" onClick="twoAA()">1</button><button type="button" name="Theevilbutton2" onClick="twoAB()">2</button>`;
}

function retwoA() {
  document.getElementbyId("response3").innerHTML = `You carefully walk through the halls to the first door. You hear a muffled, high-pitched sound, continuously repeating in short intervals. You can’t quite make out what the sound is. Do you want to 1. Walk in or 2. Walk away to the second door?
<button type="button" name="Theevilbutton" onClick="twoAA()">1</button><button type="button" name="Theevilbutton2" onClick="twoAB()">2</button>`;
}

function twoAA() {
  document.getElementbyId("response1").innerHTML = `Assuming that the sound is the girl whimpering with a gag on her mouth, you open the door and walk in.
<button type="button" name="Theevilbutton" onClick="twoAA()">1</button>`;
}

function twoAB() {
  document.getElementbyId("response2").innerHTML = `You feel uneasy about the door. After some thought, you decide to go to the other door.
<button type="button" name="Theevilbutton" onClick="twoAB()">2</button>`;
}

function twoB() {
  document.getElementbyId("response2").innerHTML = `You carefully walk through the halls to the second door. You hear the sound of a girl’s voice screaming for help.
<button type="button" name="Theevilbutton" onClick="twoB()">2</button>`;
}

function twoBA() {
  document.getElementbyId("response1").innerHTML = `You see a speaker sitting in the center of the room and realize that is where the sound is coming from. You turn around to leave the room when the serial killer jumps out from behind the door and shoots you. YOU DIED.
<button type="button" name="Theevilbutton" onClick="twoBA()">1</button>`;
}

function twoBB() {
  document.getElementbyId("response2").innerHTML = `You feel uneasy about the door. After some thought, you decide to go to the other door.
<button type="button" name="Theevilbutton" onClick="twoBB()">2</button>`;
}

function twoC() {
  document.getElementbyId("response3").innerHTML = ` You carefully walk through the halls to the third door. You notice a small patch of yellow silk clothing caught on the door, the color is still bright and not dulled by dust.
<button type="button" name="Theevilbutton" onClick="twoCA()">1</button>`;
}

function twoCA() {
  document.getElementbyId("response1").innerHTML = `You walk in to see Emma, the president’s daughter, on the ground with a gag on her mouth and her arms tied around a pole. You quickly untie her arms and take off her gag. You and Emma rush out of the house and notify your agency of your success. Congratulations, mission complete!
<button type="button" name="Theevilbutton" onClick="twoCA()">1</button>`;
}

function twoCB() {

  document.getElementbyId("response2").innerHTML = `You feel uneasy about the door. After some thought, you decide to go to the first door.`
  retwoA();
}
