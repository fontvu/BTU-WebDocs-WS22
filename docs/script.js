window.addEventListener("load", function() {
    getData();
})

function getData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const xmlDoc = xhttp.responseXML;
        const service = xmlDoc.getElementsByTagName("service");
        pullData(service);
    }
    xhttp.open("GET", "4c-xml-data-file.xml");
    xhttp.send();
}


function pullData(service) {
    let table="<tr><th>Service</th><th>Pricing</th></tr>";
    for(let i = 0; i < service.length; i++) {
        table += "<tr><td>" +
            service[i].getElementsByTagName("service_name")
            [0].childNodes[0].nodeValue +
            "</td><td>" +
            service[i].getElementsByTagName("package_price")
            [0].childNodes[0].nodeValue +
            "</td></tr>";
    }

    document.getElementById("xml").innerHTML = table;
}
