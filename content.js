

var elementsInsideBody = [...document.body.getElementsByTagName('*')];


//Function to review DOM elements
function findAndReplace(aqaSpanish){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child, aqaSpanish);
        console.log('replaced');
      }
    });
  });
}

const aqaSpanish = {
  "week": " semana",
  "weekend": "fin de semana",
  "and": 'y',
  "month": "mes",
  "sun": "sol",
  "death": "muerte",
  "deaths": "muertes"
}

function replaceText (node, aqaSpanish) {
  let value = node.nodeValue;
  let aqaSpanishArray = Object.entries(aqaSpanish);

    //For Loop Iterating over Array of Spanish-English Pairs
    var i;
    for (i = 0; i < aqaSpanishArray.length; i++) {
      //Add a space either side of word so no unwanted overly aggressive matches
      let space = " "
      let englishWord = aqaSpanishArray[i][0];
      let spacedEnglishWord = space.concat(englishWord, " ");
      let spanishWord = aqaSpanishArray[i][0];
      let spacedSpanishWord = space.concat(spanishWord, " ");

      //Regex passing in a variable instead of String
      var change = "regex"
      var regexFunction = new RegExp(change, "gi")

          //If statement - If value matches spacedEnglishWord
          //Wasn't working so added value definition locally to try
          if (value == spacedEnglishWord) {
          let value = node.nodeValue;
          value = value.replace(regexFunction, spacedSpanishWord);
          node.nodeValue = value;
          }
        }
}

window.onload = findAndReplace(aqaSpanish);

/*

// Needs space before & after both values or replaces parts of words
// Need to sort out case sensitivity...
function replaceText (node) {
  let value = node.nodeValue;
  let vocab = aqaSpanish[0]
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
*/