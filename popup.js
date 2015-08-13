document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

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
       evt.initTextEvent ("textInput", true, true, window, message + count , 0, "en-US");  // initTextEvent(eventType, true ,true , window , Your TEXT ,0 , "en-US" )
       document.querySelector(".input-container .input").focus();             //target.focus()
       document.querySelector(".input-container .input").dispatchEvent(evt);          //target.dispatch(event)
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


  }, false);
}, false);