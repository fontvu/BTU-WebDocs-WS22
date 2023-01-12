window.addEventListener("load", function() {
    getData();
})

function getData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const xmlDoc = xhttp.responseXML;
        const service = xmlDoc.getElementsByTagName("services");
        pullData(service);
    }
    xhttp.open("GET", "4c-xml-data-file.xml", true);
    xhttp.send();
}


function pullData(service) {
    let table="<tr><th>Service</th><th>Pricing</th></tr>";
    for(let i = 0; i < service.length; i++) {
        table += "<tr><td>" +
            service[i].getElementsByTagName("service_name")
            [i].childNodes[i].nodeValue +
            "</td><td>" +
            service[i].getElementsByTagName("package_price")
            [i].childNodes[i].nodeValue +
            "</td></tr>";
    }

    document.getElementById("xml").innerHTML = table;
}
