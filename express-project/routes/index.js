var express = require('express');
var router = express.Router();
var app = express();

const messages = [{ text: "hello there", user: "Landon", added: new Date() },
                  { text: "hello world!", user: "Britt", added: new Date() }]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function (req, res) {
  res.render('form', {title: "Create A Message"})
})

router.post('/new', function (req, res) {
  let newMessage = {
    text: req.body.myMessage,
    user: req.body.author,
    added: new Date(),
    
  }

  messages.push(newMessage)
  res.redirect('/')
})
module.exports = router;
