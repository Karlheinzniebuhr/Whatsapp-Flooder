document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('bomb');
  checkPageButton.addEventListener('click', function() {

  	bomb();

  }, false);
}, false);



// add that damn button
var btn = document.createElement("BUTTON");
var text = document.createTextNode("BOMB");

btn.appendChild(text);

btn.style.backgroundColor = 'red';
btn.style.padding = "5px 3px 5px 3px";

btn.onclick = function() {bomb()};


// Check every sencond if there is a button
/*
var interv = setInterval(function(){ 
	elem = document.getElementsByClassName('menu-item')[2];
	if(elem){
		elem.appendChild(btn);
		clearInterval(interv);
	}
}, 1000);
*/

function setbutton(){
	setTimeout( function(){
	elem = document.getElementsByClassName('menu-item')[2];
	

	if(elem){
		elem.appendChild(btn);
	}
},500)
};


function test(){alert('funciona')};

function load(){
chats = document.getElementsByClassName('chat');
 for(var i=0;i<chats.length;i++){
        chats[i].addEventListener('click', setbutton);
	}
}


//check chat windows in interval
setInterval( function(){ load() },1000);




function bomb() {
// control + shift + j to open console and paste
var count = 10; //number of times to send
var message = "spam message nr "; //spam message
var i = 0;

    var nr = prompt("How many messages do you want to send?", "10");
    if (nr != null) {
        count = nr;
}

    var msg = prompt("Enter your message: ", "spam count: ");
    if (msg != null) {
        message = msg;
}

var timer = setInterval( function(){
   var evt = document.createEvent("TextEvent");    
   evt.initTextEvent ("textInput", true, true, window, message + i , 0, "en-US");  // initTextEvent(eventType, true ,true , window , Your TEXT ,0 , "en-US" )
   document.querySelector(".input-container .input").focus();							//target.focus()
   document.querySelector(".input-container .input").dispatchEvent(evt);					//target.dispatch(event)
     i++;
     if( i == count )
     	clearInterval(timer);
   
     	console.log(i + " messages sent");
     	
     var event = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });
  document.querySelector(".icon.btn-icon.icon-send").dispatchEvent(event);
},10);
}