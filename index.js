let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let videos = ["https://www.youtube.com/embed/nSDgHBxUbVQ", "https://www.youtube.com/embed/TUVcZfQe-Kw", "https://www.youtube.com/embed/gNi_6U5Pm_o", "https://www.youtube.com/embed/gPDcwjJ8pLg", "https://www.youtube.com/embed/gl1aHhXnN1k", "https://www.youtube.com/embed/P3cffdsEXXw", "https://www.youtube.com/embed/NG2zyeVRcbs"];
let preday;

for(i=0; i<document.getElementsByClassName("day").length; i++){
  console.log(days[i]);
    document.getElementsByClassName("day")[i].innerHTML = "<h2>" + days[i] + "</h2>";
    document.getElementsByClassName("day")[i].id = days[i];
    document.getElementsByClassName("day")[i].addEventListener('click', setActive, false);

}

document.getElementById('sunday').classList.toggle('active');


function setActive(e){


  preday = document.getElementsByClassName("active")[0].id;
  console.log("preday " +preday);
  if(preday != undefined){
  document.getElementById(preday).classList.toggle("active");
  document.getElementById(preday +"day").style.display = "none";
  }

  if(e.target.tagName =="H2"){

    e.target.parentNode.classList.toggle("active");
  }else{


    e.target.classList.toggle("active");
  }

  day = document.getElementsByClassName('active')[0].id;
  console.log("day " +day);
  document.getElementById(day +"day").style.display = "block";

  var videoId = document.getElementById('video');
  if (day =="sunday"){
    videoId.src= videos[0];
  }

  var videoId = document.getElementById('video');
  if (day =="monday"){
    videoId.src= videos[1];
  }

  var videoId = document.getElementById('video');
  if (day =="tuesday"){
    videoId.src= videos[2];
  }

  var videoId = document.getElementById('video');
  if (day =="wednesday"){
    videoId.src= videos[3];
  }

  var videoId = document.getElementById('video');
  if (day =="thursday"){
    videoId.src= videos[4];
  }

  var videoId = document.getElementById('video');
  if (day =="friday"){
    videoId.src= videos[5];
  }

  var videoId = document.getElementById('video');
  if (day =="saturday"){
    videoId.src= videos[6];
  }

}
