var elementsInsideBody = [...document.body.getElementsByTagName('*')];


//Function to review DOM elements
function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
        console.log('replaced');
      }
    });

  });
}

// Needs space before & after both values or replaces parts of words
// Need to sort out case sensitivity...
function replaceText (node) {
  let value = node.nodeValue;
  value = value.replace(/ Week /gi, ' Semana ');
  value = value.replace(/ week /gi, ' semana ');
  value = value.replace(/ Weekend /gi, ' Fin de semana ');
  value = value.replace(/ weekend /gi, ' fin de semana ');
  value = value.replace(/ And /gi, ' y ');
  value = value.replace(/ and /gi, ' y ');
  value = value.replace(/ Month /gi, ' mes ');
  value = value.replace(/ month /gi, ' mes ');
  value = value.replace(/ Sun /gi, ' Sol ');
  value = value.replace(/ sun /gi, 'sol');
  value = value.replace(/ Death /gi, ' Muerte ');
  value = value.replace(/ death /gi, 'muerte');
  value = value.replace(/ Deaths /gi, ' Muertes ');
  value = value.replace(/ deaths /gi, 'muertes ');
  node.nodeValue = value;
}

window.onload = findAndReplace();
