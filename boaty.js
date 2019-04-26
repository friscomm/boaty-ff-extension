let logo = document.getElementById('logo');
let banner = logo.childNodes[0];
let new_header1 = document.createTextNode('BOATY MCBOATNET');
let image_url = browser.extension.getURL('images/boat.jpg');
let new_img = document.createElement('IMG');
let real_anchor = document.createElement('A');

new_img.setAttribute('src', image_url) //= 'icons/border-48.png'
new_img.style.height = '60px';
real_anchor.setAttribute('href', '/')
real_anchor.style.fontSize='34px'
real_anchor.append(new_header1)
real_anchor.append(new_img)

logo.parentNode.replaceChild(real_anchor, logo)


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

function replaceSearchBars() {
  let searchBars = document.getElementsByName('search');

  for (i = 0; i < searchBars.length; i++) {
    let searchNode = searchBars[i];
    searchNode.value=""
    searchNode.placeholder="Search Boaty McBoatNet"
  }
}


replaceSearchBars()
// replaceTextWithStuff(/focus/gi, 'Boaty McBoatNet')
replaceTextWithStuff(/team members/gi, 'Crewmates')
replaceTextWithStuff(/teams/gi, 'Crews')
replaceTextWithStuff(/team/gi, 'Crew')

replaceTextWithStuff(/intranet/gi, 'intranet, Boaty McBoatNet')
replaceTextWithStuff(/ procore/gi, ' Procore, the Grandest Company on the Seven Seas')
replaceTextWithStuff(/employees/gi, 'Deckhands')
replaceTextWithStuff(/employee/gi, 'Deckhand')
replaceTextWithStuff(/search for a person/gi, 'Search for a Crewmate')

//employees
replaceTextWithStuff(/tooey courtemanche/gi, 'Grand Shipmaster Courtemanche')
replaceTextWithStuff(/steve zahm/gi, 'Grand Shipmaster Zahm')
replaceTextWithStuff(/procorians/gi, 'Shipmates')
replaceTextWithStuff(/procorian/gi, 'Shipmate')
replaceTextWithStuff(/senior vice president/gi, 'Vice Admiral')
replaceTextWithStuff(/vice president/gi, 'Vice Admiral')
replaceTextWithStuff(/evp/gi, 'Vice Admiral')
replaceTextWithStuff(/svp/gi, 'Vice Admiral')
replaceTextWithStuff(/vp/gi, 'Vice Admiral')



replaceTextWithStuff(/michelle greer/gi, 'Vice Admiral Michelle Greer')
replaceTextWithStuff(/rusty reed/gi, 'Vice Admiral Rusty Reed')
replaceTextWithStuff(/paul lyandres/gi, 'Vice Admiral Paul Lyandres')
replaceTextWithStuff(/gabe miller-smith/gi, 'Vice Admiral Gabe Miller-Smith')
replaceTextWithStuff(/guzel lumpkin/gi, 'Vice Admiral Guzel Lumpkin')
replaceTextWithStuff(/Bill Fleming/gi, 'Vice Admiral Bill Fleming')
replaceTextWithStuff(/Michael Hanson/gi, 'Vice Admiral Michael Hanson')
replaceTextWithStuff(/jim sinai/gi, 'Vice Admiral Jim Sinai')
replaceTextWithStuff(/brandon terry/gi, 'Vice Admiral Brandon Terry')
replaceTextWithStuff(/gregor moulton/gi, 'Vice Admiral Gregor Moulton')
replaceTextWithStuff(/betsy zikakis/gi, 'Vice Admiral Betsy Zikakis')
replaceTextWithStuff(/dennis lyandres/gi, 'Vice Admiral Dennis Lyandres')
replaceTextWithStuff(/sam crigman/gi, 'Vice Admiral Sam Crigman')
