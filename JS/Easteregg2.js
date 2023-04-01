var sequence = [];
var target = ['k', 'e', 'n', 'n', 'y'];

var modal = document.getElementById("myModal");
var closeBtn = document.getElementById("myModal-close");

document.addEventListener('keydown', function(event) {
  var key = event.key.toLowerCase();
  sequence.push(key);
  console.log(key)
  if (sequence.length >= target.length) {
    sequence = sequence.slice(sequence.length - target.length);
    if (sequence.toString() === target.toString()) {
      modal.style.display = "block";
      console.log("User triggered the alert")
      // alert("Yes this is Kennys website")
     
       sequence = [];
    }
  }
});

closeBtn.onclick=function(){
  modal.style.display = "none";
}