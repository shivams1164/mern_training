const http = require('http')
const fs = require('fs');
const url = require('node:url');

const data = fs.readFileSync('data.json', 'utf-8')
// console.log(data);

const dataObj = JSON.parse(data).products;


const cardTemplate = `
    <div class="product-card">
    <h3>$TITLE</h3>
    <img src="img_src" alt="product-images">
    <p>$PRICE</p>
    <p>$Brand</p>

    <a href="/product_links">Read more</a>
    </div>
    `

let result = [];
for (let i = 0; i < dataObj.length; i++) {

    let temp = cardTemplate;
    temp = temp.replace('$TITLE', dataObj[i].title)
    temp = temp.replace('img_src', dataObj[i].images[0])
    temp = temp.replace('$Brand', dataObj[i].brand)
    temp = temp.replace('$PRICE', dataObj[i].price)
    temp = temp.replace('product_links', `product?id=${i + 1}`);
    result.push(temp);
}

result = result.join('');

// console.log(result);
const server = http.createServer((req, res) => {


    res.writeHead(200, { 'Content-Type': 'text/html' });
    // const route = req.url;
    // const path = url.parse(req.url);
    // const pathname =path.pathname;

    const { pathname, query } = url.parse(req.url, true);
    // console.log(route, "\n\n");
    // console.log(path);
    console.log(query);

    if (pathname == '/home') {
        res.end(result);

    }
    else if (pathname == '/product') {
        const id = query.id;
        // console.log(dataObj[id]);
        const productid = dataObj[id].title;

        res.end(productid);
    }
    else {
        res.end("404 page not found");
    }

    // res.end(result);

});
server.listen(1164, () => {
    console.log("server started.....");
})

