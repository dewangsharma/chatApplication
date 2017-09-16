// change testbranch2

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // var err = new Error('Not Found');
  // err.status = 404;
  next();
});

// error handlers

//Routing 
var router = express.Router();
app.use('/api', router);

// Routes for users 
var userApi = require('./public/modules/users/routesUser');

//Routes for chat
var chatApi = require('./public/modules/chat/routesChat');
router.route('/chats').get(getMessage).post(emitMessage);

function getMessage(req,res,next){
  myPrint('get chat received');
  res.send('Message');
}

function emitMessage(req,res,next){
  myPrint('Chat Post event');
  io.emit('chat', req.body);
  res.send('done');
}

/* Send File*/
app.get('*', function(req, res, next) {
    res.sendfile('./public/views/index.html');
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



// socket.io
// var server = app.listen(3333);
var io = require('socket.io')(server);
var userCount = 0;
io.on('connection', function(socket) {
    userCount++;
    myPrint('a user connected' + userCount);

    socket.on('disconnect', function() {
        userCount--;
        myPrint('user disconnected');
    });
});
// io.emit('system', 'busy');


myPrint('******** Test Application started at: localhost:3333' );

function myPrint(msg){
  console.log(msg);
}
// module.exports = app;
server.listen(3333);
