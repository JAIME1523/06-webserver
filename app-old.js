const http = require('http');

http.createServer((req, res) =>{
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write('Hola mundo')
    // res.write('id, nombre\n');
    // res.write('1, poedrito\n');
    // res.write('2, Gimena\n');
    // res.write('3, jose\n');


    res.end();
}).listen(8080);

console.log('escuchando en el puerto', 8080);