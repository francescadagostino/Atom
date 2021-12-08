let ads = ["Home", "Cat and Jack", "The New Yorker", "Calphalon"];
let pread;

for(i=0; i<document.getElementsByClassName("ad").length; i++){
  console.log(ads[i]);
    document.getElementsByClassName("ad")[i].innerHTML = "<h2>" + ads[i] + "</h2>";
    document.getElementsByClassName("ad")[i].id = ads[i];
    document.getElementsByClassName("ad")[i].addEventListener('click', setActive, false);

}

document.getElementById('Home').classList.toggle('active');


function setActive(e){


  pread = document.getElementsByClassName("active")[0].id;
  console.log("pread " +pread);
  if(pread != undefined){
  document.getElementById(pread).classList.toggle("active");
  document.getElementById(pread +"ad").style.display = "none";
  }

  if(e.target.tagName =="H2"){

    e.target.parentNode.classList.toggle("active");
  }else{

    e.target.classList.toggle("active");
  }

  ad = document.getElementsByClassName('active')[0].id;
  console.log("ad " +ad);
  document.getElementById(ad +"ad").style.display = "block";

  }



document.getElementById("submit").addEventListener("click", setActiveButton);
function setActiveButton(e){
  document.getElementsByTagName('input')[0].value ="";
  document.getElementsByTagName('input')[1].value ="";
}
