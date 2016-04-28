$(document).ready(function() {

	var sendLoginRequest;

	$('.fn_loginToSlack')
		.off('click.slacklogin')
		.on('click.slacklogin', function(e) {
			e.preventDefault();
			sendLoginRequest();
		});

	var data = {
		'client_id': '2547967933.38430492401',
		scope: 'files:read files:write:user'
	};

	sendLoginRequest = function() {
		console.log('sendLoginRequest');
		$.ajax({
			url: 'https://slack.com/oauth/authorize',
			method: 'GET',
			data: data,
			success: function(data) {

				if (data) {
					console.log('data: ', data);
				} else {
					console.log('no data');
				}
			},
			error: function() {
				console.error('erroring!');
			}

		});
	}

});