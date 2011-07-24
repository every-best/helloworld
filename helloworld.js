var sys=require('sys'),http=require('http');
http.createServer(function(req,res){
	setTimeout(function(){
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.end("Hello Wolrd\n");
	},2000);
	
}).listen(8000);

sys.puts("Server Running at http://127.0.0.1:8000/");