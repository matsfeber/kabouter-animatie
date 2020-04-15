window.onclick = function playIntro(){
    document.getElementById("intro").play();
    document.getElementById("achtergrondMuziek").play();
    document.getElementById("titel").classList.add("hidden");

    this.onclick=null;
}


document.getElementById("button1").onclick = function button1() {
 setVideo1();

  document.getElementById("video").pause();
  document.getElementById("video").classList.remove("hidden");
  
};

function setVideo1() {
  document.getElementById("video").src = "./img/anim1.mp4";
  setTimeout(playVideo, 1);
}

function playVideo() {
  document.getElementById("video").play();
}

document.getElementById("button2").onclick = function button2() {
  setVideo2();

  document.getElementById("video").pause();
  document.getElementById("video").classList.remove("hidden");
};

function setVideo2() {
  document.getElementById("video").src = "./img/anim2.mp4";
  setTimeout(playVideo, 1);
}



document.getElementById("button3").onclick = function button3() {
  setVideo3();
  document.getElementById("video").pause();

};

function setVideo3() {
  document.getElementById("video").src = "./img/anim3.mp4";
  setTimeout(playVideo, 1);
}
