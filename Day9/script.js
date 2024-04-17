const express = require('express');
const fs = require('fs');
const fsPromises = require("fs/promises");
const app = express()


// ---------------------   Through callback, read file synce

// app.get('/api/products', (req, res) => {
//  const data = fs.readFileSync('data.json', 'utf-8');

//     // console.log(data);
//     const arr = JSON.parse(data).products;
//     res.json(
//         {
//             status: 'success',
//             results: arr.length,
//             data: {
//                 products: arr,

//             }
//         }
//     );
// });

///--------------------------Through async await



app.get('/api/products', async (req, res) => {
    const data = await fsPromises.readFile('data1.json', 'utf-8')
    // console.log(data);
    const arr = JSON.parse(data).products;
    // const arr = JSON.parse(data);
    res.json(
        {
            status: 'success',
            // results: arr.length,
            data: {
                products: arr,

            }
        }
    );
});

app.use(express.json());



app.post('/api/products', async (req, res) => {

    // console.log(Object.keys(res));
    // console.log(req.body);
    const data = req.body;
    // data.id = 121;
    // console.log(data);

    const db = await fsPromises.readFile('data1.json', 'utf-8')
    const arr = JSON.parse(db);
    const len = arr.length;
    const newProduct = data;
    if (len == 0) {
        newProduct.id = 1;
        // console.log(arr);

    }
    else {
        // const newID = db[len - 1]
        // // arr =
        // arr.push(data);
        // console.log(arr);
        newProduct.id = len + 1;
        // console.log(arr);
    }
    arr.push(newProduct);
    fsPromises.writeFile('data1.json', JSON.stringify(arr));
    res.json({
        status: 'success',
        results: 1,
        data: {
            newProduct: newProduct,
        }

    }

    );
    // res.send("Working progress")


});


app.put('/api/products/:id', async (req, res) => {

    const arr = JSON.parse(await fsPromises.readFile('data1.json', 'utf-8'))
    const reqId = parseInt(req.params.id);
    const data = req.body;
    const newArr = arr.map((elem) => {
        if (elem.id == reqId) return data;
        else return elem;
    })

    fsPromises.writeFile('data1.json', JSON.stringify(newArr));
    // res.send("put request")
    res.json({
        status: 'success',
        results: 1,
        data: {
            newProduct: data,
        }

    }

    );

});


app.delete('/api/products/:id', async (req, res) => {
    const arr = JSON.parse(await fsPromises.readFile('data1.json', 'utf-8'))
    const reqId = parseInt(req.params.id);
    const newArr = arr.filter((elem) => {
        if (elem.id === reqId) return false;
        else return true;
    })

    fsPromises.writeFile('data1.json', JSON.stringify(newArr));
    res.status(204);
    res.json({
        status: "Success",
        data: {
            newProduct: null,
        }
    })
})




app.listen(1164);
