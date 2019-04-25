document.body.style.border = "15px solid skyblue"
// document.body.style.background = "red"

// let elements = document.getElementsByTagName('*');
//
// for (i = 0; i < elements.length; i++) {
//   let element = elements[i];
//   let oldText1 = /clarity/gi
//   // let oldText1 = "Procore";
//   // let oldText2 = /igloo/gi
//   for (j = 0; j < element.childNodes.length; j++) {
//     let node = element.childNodes[j];
//     if (node.nodeType === 3) {
//       let currentText = node.nodeValue;
//       let newText = currentText.replace(oldText1, 'BOATY MCBOATFACE');
//
//       if (newText !== currentText) {
//         element.replaceChild(document.createTextNode(newText), node);
//       }
//     }
//   }
// }

function replaceTextWithStuff(oldText, replacementText) {
  let elements = document.getElementsByTagName('*');

  for (i = 0; i < elements.length; i++) {
    let element = elements[i];
    // let oldText1 = /clarity/gi
    // let oldText2 = /igloo/gi
    for (j = 0; j < element.childNodes.length; j++) {
      let node = element.childNodes[j];
      if (node.nodeType === 3) {
        let currentText = node.nodeValue;
        let newText = currentText.replace(oldText, replacementText);

        if (newText !== currentText) {
          element.replaceChild(document.createTextNode(newText), node);
        }
      }
    }
  }
}


let searchBars = document.getElementsByName('search');

for (i = 0; i < searchBars.length; i++) {
  let searchNode = searchBars[i];
  searchNode.value=""
  searchNode.placeholder="Search Boaty McBoatface"
}

// replaceTextWithStuff(/focus/gi, 'Boaty McBoatface')
replaceTextWithStuff(/team/gi, 'Crew')
replaceTextWithStuff(/teams/gi, 'Crews')
replaceTextWithStuff(/intranet/gi, 'intranet, Boaty McBoatface ')
replaceTextWithStuff(/ procore/gi, ' Procore, the Grandest Company on the High Seven Seas ')
replaceTextWithStuff(/employee/gi, 'deckhand')
replaceTextWithStuff(/employees/gi, 'deckhands')

//employees
replaceTextWithStuff(/tooey courtemanche/gi, 'Grand Shipmaster Courtemanche')
replaceTextWithStuff(/steve zahm/gi, 'Grand Shipmaster Zahm')
replaceTextWithStuff(/procorian/gi, 'Shipmate')
replaceTextWithStuff(/procorians/gi, 'Shipmates')
replaceTextWithStuff(/senior vice president/gi, 'Vice Admiral')
replaceTextWithStuff(/vice president/gi, 'Vice Admiral')
replaceTextWithStuff(/svp/gi, 'Vice Admiral')
replaceTextWithStuff(/vp/gi, 'Vice Admiral')
