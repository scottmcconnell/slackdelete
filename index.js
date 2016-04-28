require('node-monkey').start({host: "127.0.0.1", port:"50500"});

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

var imageID;

slack.api('files.list', function(err, response) {

	response.files.forEach(function(file) {
		console.log('file: ', file);
		if (file.created === 1461808958) {
			imageID = file.id;
		}
	});

	if (typeof imageID !== 'undefined' && imageID.length > 0) {
		slack.api('files.delete', {
			file: imageID
		}, function(err, response) {
			console.log('file.delte: ', response);
		});
	}

	// response.members.forEach(function(member) {
	// 	if (member.is_admin === true) {
	// 		console.log('Admin name: ', member.real_name);
	// 	}
	// })
})

// slack.api('chat.postMessage', {
// 	text: 'hello from Scott McConnell (bot)',
// 	channel: '#scottbot'
// }, function(err, response) {
// 	// console.log('response: ', response);
// })