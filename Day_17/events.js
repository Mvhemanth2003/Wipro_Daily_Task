//Events modules
const EventEmitter = require('events'); // here Eventemitter is a class

const emitter = new EventEmitter();

//Register a listner
emitter.on('messageLogged',function(){
    console.log("message passed");
})

//raise an event
emitter.emit('messageLogged');