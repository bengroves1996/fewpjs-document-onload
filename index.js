// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    changeMessage()
  }); 

  function changeMessage () {
    let newMessage = document.getElementById('text');
    newMessage.innerHTML = "This is really cool!";
    }