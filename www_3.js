const http = require('http');
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Marie Abel, veevbiprogrammeerimine</title>\n</head>\n<body>\n';
const pageBody = '\t<h1>Marie Abel, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna Ülikoolis</a> ning ei sislda tõsiseltvõetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>';
const pageFoot = '\n</body>\n</html>';
const dateTimeET = require('./src/dateTimeET.js'); 

http.createServer(function(req, res){
	res.writeHead(200, {"Content-type": "text/html"});
	res.write(pageHead);
	res.write(pageBody);
	res.write('<p>Tänane kuupäev: ' + dateTimeET.weekday() + ' ' + dateTimeET.fullDate(0) + '</p>');
    res.write('<p>Praegu on kell: ' + dateTimeET.fullTime() + '</p>');
	res.write(pageFoot);
	res.write('Veeb läkski käima!');
	return res.end();
}).listen(5119);