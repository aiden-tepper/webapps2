var xPlanes = {
  "X-1":"description",
  "X-3":"description",
  "X-15":"description",
  "X-29":"description",
  "X-31":"description",
  "X-37":"description",
  "X-45":"description"
};

var e = document.getElementById("planes-list");

for(var i=0; i<xPlanes.length; i++) {
  var xPlane = xPlanes[i];
  e.innerHTML += "<li>" + xPlane + "</li>";
}
