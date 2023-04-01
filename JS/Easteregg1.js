const btn = document.getElementById('btnColor');

let intervalId;
let colors = ['white','red', 'blue', 'green', 'purple', 'orange'];
let currentIndex = 0;

btn.addEventListener('click', function() {
  
  if (!intervalId) {
    console.log('User trigged the disco function')
    alert("WARNING! If you have epilepsy you should not look directly at the screen close the site if you are not comfortable with flashing lights, click button again to make it stop ")
    intervalId = setInterval(function() {
      document.body.style.backgroundColor = colors[currentIndex];
      currentIndex = (currentIndex + 1) % colors.length;
    }, 100);
    
  } else {
    console.log('User stop the disco function')
    clearInterval(intervalId);
    intervalId = null;
    document.body.style.backgroundColor = {currentIndex};
   
    
  }
});