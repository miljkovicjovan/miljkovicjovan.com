/*function myFunction() {
    var element = document.body;
    element.classList.toggle("darkFooter");
}*/

function myFunction(chk) {
    var bass = document.getElementById("bbc");
    bass.style.color = chk.checked ? "red" : "black"
}