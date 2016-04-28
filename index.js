var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Render Index page
app.get('/', function(request, response) {
  response.render('pages/index');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



// Slack API addition
var Slack = require('slack-node');
apiToken = 'xoxp-2547967933-4874820077-38376684243-7e19bdbd9a';

slack = new Slack(apiToken);

slack.api('users.list', function(err, response) {
	console.log('response: ', response);
})

// slack.api('chat.postMessage', {
// 	text: 'hello from Scott McConnell (bot)',
// 	channel: '#fedlyf'
// }, function(err, response) {
// 	console.log('response: ', response);
// })