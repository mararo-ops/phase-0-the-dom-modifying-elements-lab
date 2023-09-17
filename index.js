const mainElement = document.getElementById("main");
mainElement.parentNode.removeChild(mainElement);
const newHeader = document.createElement("h1");
newHeader.setAttribute("id","victory");
newHeader.textContent = 'james is the champion';