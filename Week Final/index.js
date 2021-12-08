
function setActive(e){

document.getElementById("submit").addEventListener("click", setActiveButton);
function setActiveButton(e){
  document.getElementsByTagName('input')[0].value ="";
  document.getElementsByTagName('input')[1].value ="";
}
