var check;

function readFile(input) {
    let data = new FormData();

    data.append('file', input.files[0]);
    check = input.files[0];

    fetch('http://localhost:8080/sound', { //here add your url
        method: 'POST',
        body: data
    }).then(response => {
            response.text().then(function(result){
                check = result
            })
        }
    )
}

let button = document.getElementById("download-button");

button.addEventListener("click", function (e) {
    let filename = "output.mid";
    download(check, filename)
});

function download(check, filename) {
    let element = document.createElement('a');
    console.log(check)
    element.setAttribute('href', 'data:text/plain;base64,' + check);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

