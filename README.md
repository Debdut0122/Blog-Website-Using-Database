# node

setTimeout(action, time)

setInterval(action, time)

clearInterval();

__dirname
__filename

require(rel_path) => it doesn't return anything
    => add module.exports = { javaScript Object to whatever you have to export}

require('os')
    => os.platform(), os.homedir()

require('fs')
fs.readFile(relativePath,function)
    eg;
    fs.readFile(relativePath, (err,data)=>{
        // here data is in buffer, data.toString() gives in string format
    })

This is asynchornous function 
    => asynchronous meaning it won't wait for complete execution of the current function to run the next set of instructions 

fs.writeFile(relativePath,textToWrite,callbackFunction )

fs.mkdir(dirName,function)

fs.existsSync()

fs.rmdir()
fs.unlink()


## readStream and writeStream
readStream = fs.createReadStream(fileName,{encoding:"utf8})
readStream.on('data',function)

readStream = fs.createWriteStream(fileName,{encoding:"utf8})
readStream.write(data)

## Server
`
const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    // this function will fire whenever server is rquested 
    console.log(req.url, req.method)
    res.setHeader('Content-type','text/html');
    // res.statusCode 
    res.setHeader('Location',pathToWhichWeNeedToRedirect)
    fs.readFile(FileName, (err,data)=>{
        if(err){
            console.log("Error occured")
        }
        else{
            res.write(data);
            res.end();
        }
    })
})

server.listen(3000,'localhost') 
`

*ejs helps to inject dynamic content to the webpage*
