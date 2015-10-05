var xPlanes = [
  "X-1",
  "X-3",
  "X-15",
  "X-29",
  "X-31",
  "X-37",
  "X-45"
];

var e = document.getElementById("planes-list");

for(var i=0; i<xPlanes.length; i++) {
  var xPlane = xPlanes[i];
  e.innerHTML += "<li>" + xPlane + "</li>";
}
