function printHTML(input){
  var iframe = document.createElement("iframe"); // create the element
  document.body.appendChild(iframe);  // insert the element to the DOM

  iframe.contentWindow.document.write(input); // write the HTML to be printed
  iframe.contentWindow.print();  // print it
  document.body.removeChild(iframe); // remove the iframe from the DOM
}

function firstThing() {
  document.getElementById("response1").innerHTML = `As you enter the dark and barely lit warehouse you see two doors, one to your left and one to your right.   <h3>Do you want to 1. Go through the door on the left in the warehouse or 2. Go through the door on the right? </h3><button type="button" name="Theevilbutton" onClick="firstAThing()">1</button><button type="button" name="Theevilbutton2" onClick="firstBThing()">2</button>';
}
