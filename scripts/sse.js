const x = document.getElementById("horaServidor");
if(typeof(EventSource) !== "undefined") {
  var source = new EventSource("//www.w3schools.com/html/demo_sse.php");
  source.onmessage = function(event) {
    x.innerHTML += event.data + "<br>";
  };
} else {
  x.innerHTML = "Sorry, no support for server-sent events.";
}