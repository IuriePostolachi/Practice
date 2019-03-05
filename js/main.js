var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
var send = document.querySelector('#send');
 
button.addEventListener('click', function(){
  modal.classList.add('modal_active');
});

close.addEventListener('click', function() {
  modal.classList.remove('modal_active');
  location.reload();
});

send.addEventListener('click', function() {
  modal.classList.remove('modal_active');
  location.reload();
});


