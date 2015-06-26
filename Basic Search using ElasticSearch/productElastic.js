function querySearch(param,res)
{
	var elasticsearch = require('elasticsearch');
	var client = new elasticsearch.Client({
	  host: 'localhost:9200',
	  log: 'trace'
	});
	console.log("testing");
	client.search({
	  index: 'paxcom',
	  type: 'myproducts',
	  body: {
	    query: {
	      match: {
		product_name: {
			query:param
		
	      }
	    }
	  }
	}	
	}).then(function (resp) {
	    var hits = resp.hits.hits;
		console.log("############################");
		console.log(hits);
	    res.send(hits);
	}, function (err) {
	    console.trace(err.message);
	});
}
exports.querySearch=querySearch;
