
function update(prop, name, value, suffix) {
  document.querySelector('.main-img').style.setProperty(prop , `${name}(${value+suffix})`);
}

function set(name, value, suffix) {
  document.querySelector('.main-img').style.setProperty(name , `${value+suffix}`);
}

function myFunction(id){
  var x = document.getElementById(id);
  var divId = ["grayscale-section","blur-section","brightness-section","contrast-section","invert-section",
               "opacity-section","saturate-section","resize-section"];
  for (var i = 0; i < divId.length; i++) {
    if (x != document.getElementById(divId[i])) {
      document.getElementById(divId[i]).style.display = "none";
    }
    x.style.display = "block";
    //x.querySelector(id + ' p').style.text-decoration = "underline";
  }
}
