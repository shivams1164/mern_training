console.log("........App started........");

// const API_key
function callAPI() {


    // fetch)""

    fetch("https://newsapi.org/v2/top-headlines?country=in&from=2024-04-20&sortBy=publishedAt&apiKey=2f207fab56654feea8f88200343e8e8e")
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            renderUI(data);
        })

}


function renderUI(data) {


    const artical = data.articles;
    for (let i = 0; i <= artical.length; i++) {
        const ar = artical[i];
        const auther = ar.author;
        const title = ar.title;
        const description = ar.description;
        const root = document.getElementById("root");

        const div = document.createElement("div");
        div.setAttribute("class", "news-card");
        const h3 = document.createElement("h3");
        h3.innerText = ar.title;
        div.appendChild(h3);
        root.appendChild(div);

        const img = document.createElement("img");
        img.src = ar.urlToImage;
        div.appendChild(img);
        root.appendChild(div);

        const p = document.createElement("p");
        p.innerText = ar.description;
        div.appendChild(p);
        root.appendChild(div);

    }





    // const h11 = document.getElementById("authorName");
    // h11.innerText = auther;
    // console.log(auther);





}


callAPI();


// renderUI();