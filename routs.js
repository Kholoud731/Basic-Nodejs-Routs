const routHandeler = (req,res)=>{

    const url = req.url;
    const method = req.method;
    const rootURL = `<html>
    <h2>Hello User</h2>

    <form action="create-user" method="POST"/>
    <label>Add user</label>
        <input type ="text" name="user">
        <button type="submit">Submit</button>
    </form>
    </html>`

    const usersList = `<html>
    <ul>
        <li>user 1</li>
        <li>user 2</li>
        <li>user 3</li>
        <li>user 4</li>
        <li>user 5</li>
    </ul>
    </html>`

    if(url ==='/'){

        res.setHeader('content-type', 'text/html')
        res.write(rootURL)
        return res.end();

    }

    if(url === '/users'){
        res.setHeader('content-type', 'text/html')
        res.write(usersList)
        return res.end();
    }

    if(url === '/create-user' && method === 'POST'){

        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk)
        })
        req.on('end', ()=>{
            const finalData = Buffer.concat(body).toString()
            const userName = finalData.split('=')[1]
            console.log(userName)
        })

        res.statusCode =302
        res.setHeader('location','/')
        return res.end()

    }
}

module.exports = routHandeler