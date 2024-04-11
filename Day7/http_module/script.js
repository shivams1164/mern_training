
// const http = require('http');

// const app = http.createServer((req, res) => {
//     console.log('Request received');
//     console.log(req.url);
//     res.end('<h1>Hello World</h1>');

// });

// app.listen(4000);




// const http = require('http')

// const server = http.createServer((req, res) => {
//     console.log("request received");
//     console.log(req.statusCode);
//     console.log(Object.keys(req));
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     });

//     res.end('Hello world <h4>This is h4</h4> , <h1>This is h1</h1>');

// })


// server.listen(1164, () => {
//     console.log("server started......");
// });

// let page = '<h1>Welcome</h1>';


//................................... mini Project...................................

const http = require('http')
const fs = require('fs');

const data = fs.readFileSync('data.json', 'utf-8')
// console.log(data);


const dataObj = JSON.parse(data);
// console.log(dataObj);

const products = dataObj.products



const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">    
        <head>
            <style>
            .product-card{
                width:600px;
                max-width:600px;
                margin:20px auto;
                border:3px double brown;
                border-radius:3px;
            }
            </style>
        </head>
        <body>
        <h1>_Product Cards_</h1>
        </body>
    </html>
`

const cardTemplate = `
    <div class="product-card">
        <h3>___Title___</h3>
        <p">__Info__</p>
        </div>
    `
// const card1 = cardTemplate.replace('___Title___', products[0].title).replace('__Info__', products[0].description)
// const card2 = cardTemplate.replace('___Title___', products[1].title).replace('__Info__', products[1].description)
// all_card = card1 + card2


const all_card = products.map(elem => {
    let newcard = cardTemplate;
    newcard = newcard.replace('___Title___', elem.title)
    newcard = newcard.replace('__Info__', elem.description)
    return newcard

})

const allcardstring = all_card.join(' ');

let page = htmlTemplate.replace('_Product Cards_', allcardstring)


const server = http.createServer((req, res) => {
    console.log("request received");
    console.log(req.statusCode);
    console.log(Object.keys(req));
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(page);

})
server.listen(1164, () => {
    console.log("server started......");
});
