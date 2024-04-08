console.log("...Weather Application...");

function fetchApi() {
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=HHF73PNR4YE3THCLV8D3GNAZU';
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            // renderUI();
        });
}

function renderUI(data) {
    const days = data.days;
    console.log(days);



    const row = document.createElement("tr");
    const Cell1 = document.createElement("th");
    Cell1.innerText = 'Data';
    row.appendChild(Cell1);
    root.appendChild(row);


    const Cell2 = document.createElement("th");
    Cell2.innerText = 'Maximum Temperature';
    row.appendChild(Cell2);
    root.appendChild(row);


    const Cell3 = document.createElement("th");
    Cell3.innerText = 'Manimum Temperature';
    row.appendChild(Cell3);
    root.appendChild(row);



    const ChildRow = document.createElement("row");
    const C1 = document.createElement("td");
    ChildRow.appendChild(c1);
    root.appendChild(ChildRow);


    const C2 = document.createElement("td");

    ChildRow.appendChild(C2);
    root.appendChild(ChildRow);

}

// renderUI(3);

fetchApi();

