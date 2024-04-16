const http = require('http')
const fs = require('fs');
const url = require('node:url');

const data = fs.readFileSync('data.json', 'utf-8')
// console.log(data);

const dataObj = JSON.parse(data).products;


const cardTemplate = `
<div class="product-card" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 20px;">
<h3>$TITLE</h3>
<img src="img_src" alt="product-images" style="max-width: 100%; height: auto;">
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
    temp = temp.replace('product_links', `product?id=${i}`);
    result.push(temp);
}

result = result.join('');
// result = result.join('');

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
        const items = dataObj[id];


        // res.end(productid);
        res.end(`
        <div style="max-width: 800px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #333; text-align: center;">Product Display Page</h1>
        <h1 style="color: #333;">${items.id}</h1>
        <h2 style="color: #333;">${items.price}</h2>
        <img src="${items.thumbnail}" alt="Product Image" style="max-width: 100%; height: auto; margin-bottom: 20px; border-radius: 8px; display: block;">
        <p style="margin-bottom: 10px; color: #333;">${items.description}</p>
        <a href="http://127.0.0.1:1164/home" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px; transition: background-color 0.3s ease;">Back to Products Page</a>
    </div>
    
            `);
    }
    else {
        res.end("404 page not found");
    }

    // res.end(result);

});
server.listen(1164, () => {
    console.log("server started.....");
})

