

// console.log (document.getElementsByClassName("options") );
// console.log (document.getElementsByClassName("options")[0].innerHTML);

const images = ["pizza.png", "spaghetti.jpeg", "sushi.jpeg"];
const title = ["pizza", "spaghetti", "sushi"];

for(i=0;i<document.getElementsByClassName("options").length;i++){
  document.getElementsByClassName('label')[i].innerHTML = title[i];

  // console.log(document.getElementsByClassName("options")[i].innerHTML);

  document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/' + images[i] + ' "> ';
  //set the id of each section
  document.getElementsByClassName("options")[i].setAttribute("id", title[i]);
  //call changeColor with the Id of the section when clicked
  document.getElementsByClassName("options")[i].addEventListener("click", function(){alert("You clicked a div")});
}

function changeColor(sectionID){
  console.log(sectionID);
  document.getElementByID(sectionID).classList.toggle("blue");
}


// THIS IS A COMMENT
