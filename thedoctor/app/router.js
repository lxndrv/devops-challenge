module.exports = function(app){

	var AWS = require('aws-sdk');
	AWS.config.update({region: 'us-east-1'});
	var db = new AWS.DynamoDB();

  app.get('/health', function(req, res){

		var healthStatus = {
			'container':'hub.docker.com',
			'project':'https://github.com/lxndrv/devops-challenge',
			'health':'healthy'
		};

  	res.send(healthStatus);
  });

	app.get('/secret', function(req, res){
		var params = {
		//  AttributesToGet: [
		//    "secret_code"
		//   ],
		  TableName : 'devops-challenge',
		  Key : {
		    "code_name" : {
					"S" : "thedoctor"
		    }
		  }
		};
		//res.send('big secret');
		db.getItem(params, function(err, data) {
		  if (err) {
		    	console.log(err); // an error occurred
		  }
		  else {
		    	console.log(data); // successful response
					if(data && data.Item){
						res.send(data.Item);
						//res.send({'secret':'key'});
					}
					else{
							console.log("Invalid data");
					}
		    }
		});//getItem
	});//get secret

}
