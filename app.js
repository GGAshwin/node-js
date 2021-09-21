/*Readline tutorial
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let num1 = Math.floor(Math.random() * 10) + 1
let num2 = Math.floor(Math.random() * 10) + 1
let answer = num1 + num2

rl.question(`What is ${num1}+${num2}?\n`,
    (userinput) => {
        if (userinput.trim() == answer) {
            rl.close();
        }
        else {
            rl.setPrompt('Incorrect pesponse,Please try again\n')
            rl.prompt()
            rl.on('line', (userinput) => {
                if (userinput.trim() == answer)
                    rl.close()
                else {
                    rl.setPrompt(`Your answer of ${userinput}is incorrect, Try again\n`)
                    rl.prompt()
                }
            })
        }
    })

rl.on('close', () => {
    console.log('Correct!!!')
})*/

/*File System*/
//create
/*const fs = require('fs')
fs.writeFile('example.txt', 'This is an example', (err) => {
    if (err)
        console.log(err)
    else {
        console.log('file created successfully')
        fs.readFile('example.txt', 'utf8', (err, file) => {
            console.log(file)
        })
    }
})*/

//rename
/*const fs = require('fs')
fs.rename('example.txt', 'renamed.txt', (err) => {
    if (err)
        console.log(err)
    else
        console.log('successfully renamed')
})*/


//append data
/*const fs = require('fs')
fs.appendFile('renamed.txt', 'some data being appended', (err) => {
    if (err)
        console.log(err)
    else
        console.log('successfull')
})*/


//delete file
/*const fs = require('fs')
fs.unlink('renamed.txt', (err) => {
    if (err)
        console.log(err)
    else
        console.log('deleted successfully')
})*/

//make folder

/*const fs = require('fs')
fs.mkdir('new folder', (err) => {
    if (err)
        console.log(err)
    else
        console.log('folder created')
})*/

//delete folder

/*const fs = require('fs')
fs.rmdir('new folder', (err) => {
    if (err)
        console.log(err)
    else
        console.log('folder created')
})*/

/*const fs = require('fs')
fs.mkdir('new folder', (err) => {
    if (err)
        console.log(err)
    else {
        fs.writeFile('./new folder/txt.txt', '123', (err) => {
            if (err)
                console.log(err)
            else
                console.log("successful")
        })
    }
})*/

//rmdir cant be used on a folder with something in it

// read directory/folder
/*const fs = require('fs')
fs.readdir('new folder', (err, array) => {
    if (err)
        console.log(err)
    else
        for (let i of array) {
            fs.unlink('./new folder/' + i, (err) => {
                if (err)
                    console.log(err)
                else
                    console.log("deleted")
            })
        }
})*/

//Tip:for..in will give indices and for..of will give values/content


/*const fs = require('fs')
const readstream = fs.createReadStream('./text.txt', 'utf8')
const writestream = fs.createWriteStream('write.txt')
//can also be used to create a new file like fs.writefile()
readstream.on('data', (x) => {
    writestream.write(x)
})*/

//same as above using pipe

/*  const fs = require('fs')
    const zlib = require('zlib')
    const gzip = zlib.createGzip()
    //To compress file
    const readstream = fs.createReadStream('./read.txt', 'utf8')
    const writestream = fs.createWriteStream('write.txt.gz')
    readstream.pipe(gzip).pipe(writestream)*/