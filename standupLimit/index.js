var light = require('@amperka/led').connect(P1);
var trigger = require('@amperka/button').connect(P2);
var buzzer = require('@amperka/buzzer').connect(P5).frequency(1000);
var timerId;

trigger.on('click', function () {
timerId = setTimeout(function(){
    light.blink(2);
    buzzer.beep(2);
  }, 2 * 60000);

});

trigger.on('hold', function() {
   light.turnOff();
  clearTimeout(timerId);
});
