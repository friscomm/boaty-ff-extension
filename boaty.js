let logo = document.getElementById('logo');
let banner = logo.childNodes[0];
let newHeader1 = document.createTextNode('BOATY MCBOATNET');
let imageUrl = browser.runtime.getURL('images/boat.jpg');
let newImg = document.createElement('IMG');
let newAnchor = document.createElement('A');
let newFooter = document.createTextNode('BOATY');
let footer = document.getElementById('poweredby');

function replaceFooter(){
  footer.innerHTML = '';
  footer.innerText = 'BOATY';
  footer.style.fontSize = '30px';
  footer.removeAttribute('id');
}

function replaceHeader(){
  newAnchor.append(newHeader1);
  newAnchor.append(newImg);
  logo.parentNode.replaceChild(newAnchor, logo);
}

function styleImg(){
  newImg.setAttribute('src', imageUrl)
  newImg.style.height = '60px';
}

function styleAnchor(){
  newAnchor.setAttribute('href', '/')
  newAnchor.style.fontSize='34px'
}

function replaceTextWithStuff(oldText, replacementText) {
  let elements = document.getElementsByTagName('*');
  for (i = 0; i < elements.length; i++) {
    let element = elements[i];
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

function replaceSearchText() {
  let searchBars = document.getElementsByName('search');

  for (i = 0; i < searchBars.length; i++) {
    let searchNode = searchBars[i];
    searchNode.value=""
    searchNode.placeholder="Search Boaty McBoatNet"
  }
}

styleImg();
styleAnchor();
replaceHeader();
replaceFooter();

replaceSearchText();
replaceTextWithStuff(/team members/gi, 'Crewmates');
replaceTextWithStuff(/teams/gi, 'Crews');
replaceTextWithStuff(/team/gi, 'Crew');
replaceTextWithStuff(/intranet/gi, 'intranet, Boaty McBoatNet');
replaceTextWithStuff(/ procore/gi, ' Procore, the Grandest Company on the Seven Seas');
replaceTextWithStuff(/employees/gi, 'Deckhands');
replaceTextWithStuff(/employee/gi, 'Deckhand');
replaceTextWithStuff(/procorians/gi, 'Shipmates');
replaceTextWithStuff(/procorian/gi, 'Shipmate');
replaceTextWithStuff(/search for a person/gi, 'Search for a Crewmate');

//admirals
replaceTextWithStuff(/tooey courtemanche/gi, 'Grand Shipmaster Courtemanche');
replaceTextWithStuff(/steve zahm/gi, 'Grand Shipmaster Zahm');
replaceTextWithStuff(/senior vice president/gi, 'Vice Admiral');
replaceTextWithStuff(/vice president/gi, 'Vice Admiral');
replaceTextWithStuff(/evp/gi, 'Vice Admiral');
replaceTextWithStuff(/svp/gi, 'Vice Admiral');
replaceTextWithStuff(/vp/gi, 'Vice Admiral');
replaceTextWithStuff(/michelle greer/gi, 'Vice Admiral Michelle Greer');
replaceTextWithStuff(/rusty reed/gi, 'Vice Admiral Rusty Reed');
replaceTextWithStuff(/paul lyandres/gi, 'Vice Admiral Paul Lyandres');
replaceTextWithStuff(/gabe miller-smith/gi, 'Vice Admiral Gabe Miller-Smith');
replaceTextWithStuff(/guzel lumpkin/gi, 'Vice Admiral Guzel Lumpkin');
replaceTextWithStuff(/Bill Fleming/gi, 'Vice Admiral Bill Fleming');
replaceTextWithStuff(/Michael Hanson/gi, 'Vice Admiral Michael Hanson');
replaceTextWithStuff(/jim sinai/gi, 'Vice Admiral Jim Sinai');
replaceTextWithStuff(/brandon terry/gi, 'Vice Admiral Brandon Terry');
replaceTextWithStuff(/gregor moulton/gi, 'Vice Admiral Gregor Moulton');
replaceTextWithStuff(/betsy zikakis/gi, 'Vice Admiral Betsy Zikakis');
replaceTextWithStuff(/dennis lyandres/gi, 'Vice Admiral Dennis Lyandres');
replaceTextWithStuff(/sam crigman/gi, 'Vice Admiral Sam Crigman');
