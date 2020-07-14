var backgroundColor = document.body.style.background = "orange";
addElement();


function addElement() {
    var newHeading = document.createElement('h1');

    var newContent = document.createTextNode("Hello World!");

    newHeading.appendChild(newContent);

    var originalHeading = document.getElementsByTagName('h1')[0];
    document.body.insertBefore(newHeading, originalHeading);
}
