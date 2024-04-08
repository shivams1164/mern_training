console.log("...Weather Application...");

function fetchApi() {
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=HHF73PNR4YE3THCLV8D3GNAZU';
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            renderUI(data);
        })

}

function renderUI(data) {
    const root = document.getElementById("root");

    if (data && data.days) {
        const days = data.days;
        console.log(days);

        const table = document.createElement("table");

        const row = document.createElement("tr");
        const Cell1 = document.createElement("th");
        Cell1.innerText = 'Date';
        row.appendChild(Cell1);

        const Cell2 = document.createElement("th");
        Cell2.innerText = 'Maximum Temperature';
        row.appendChild(Cell2);

        const Cell3 = document.createElement("th");
        Cell3.innerText = 'Minimum Temperature';
        row.appendChild(Cell3);

        table.appendChild(row);

        days.forEach(day => {
            const newRow = document.createElement("tr");

            const newCell1 = document.createElement("td");
            newCell1.innerText = day.datetime;
            newRow.appendChild(newCell1);

            const newCell2 = document.createElement("td");
            newCell2.innerText = day.tempmax;
            newRow.appendChild(newCell2);

            const newCell3 = document.createElement("td");
            newCell3.innerText = day.tempmin;
            newRow.appendChild(newCell3);

            table.appendChild(newRow);
        });

        root.appendChild(table);
    }
}

fetchApi();
