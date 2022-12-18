const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>');
        res.write('<body><h1>Welcome to first page</h1>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input name="username"> ');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>users</title></head>');
        res.write('<body><ul>');
        res.write('<li>User1</li>');
        res.write('<li>User2</li>');
        res.write('</ul></body>');
        res.write('</html>');
        return res.send();
    }


    if (url === '/create-user' && method === 'POST') {
        const body = [];

        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const userName = parsedBody.split('=')[1];
            console.log(userName);
        });

        res.statusCode = 302;
        res.setHeader('location', '/')
        return res.end();
    }


}

module.exports = requestHandler