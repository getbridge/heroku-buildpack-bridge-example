var Bridge = require('bridge-js');
var bridge = new Bridge({host: 'localhost', port: 8090, apiKey: 'lcnkhdnccgijfifa' });

var helloHandler = {
  hello: function(cb){
    cb('Hello World!');
  }
}

bridge.publishService('hello-world', helloHandler, function(){
  test();
});

function test(){
  bridge.getService('hello-world', function(helloService, name){
    helloService.hello(function(msg){
      console.log(msg);
    });
  });
}

bridge.connect();

// when run, this will connect to a Bridge server, publish a service 'hello-world' which exposes a function 'hello' 
// that takes a callback as a parameter. The callback takes one parameter, a message, 'hello world.' After the 
// service is publishing, the callback gets the service 'hello-world' and passes in a function as a callback that 
// prints out whatever parameter is supplied. This will print the message 'hello world' in the console.
