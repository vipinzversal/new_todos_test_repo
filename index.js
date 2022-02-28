var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none"; // with the help of this function the X delete the text in the  todo list
  }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {// with the help of this function if you click on any todo they give you a tick sign
    ev.target.classList.toggle('checked');
  }
}, false);
function newElement() {
     var li = document.createElement("li");
     var inputValue = document.getElementById("myInput").value;
     var t = document.createTextNode(inputValue);//in this function it will give you an error or alert if you not write any thing and still  you click add button
     li.appendChild(t);
     if (inputValue === '') {
      alert("You must write something!");
     } else {
       document.getElementById("myUL").appendChild(li);
     }
     document.getElementById("myInput").value = "";
  
 var span = document.createElement("SPAN");
 var txt = document.createTextNode("X");
 span.className = "close";
 span.appendChild(txt);
 li.appendChild(span);
 for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
       div.style.display = "none";
     }
   }
   }