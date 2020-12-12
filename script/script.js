let check;

function readFile(input) {
    let data = new FormData();

    data.append('file', input.files[0]);
    check = input.files[0];

    fetch('http://localhost:8080/sound', { //here add your url
        method: 'POST',
        body: data
    }).then(r => {
        console.log(r);
        document.getElementById("download-label").style.display="block";
        }
    )
}

let button = document.getElementById("download-button");

button.addEventListener("click", function (e) {
    let filename = "output.txt";

    download(check, filename)

});

function download(check, filename) {
   let element = document.createElement('a');
   element.setAttribute('href', 'data:text/plain;charset=utf-8,'+ encodeURIComponent(check));
    element.setAttribute('download', filename);
    element.style.display = 'none';
   document.body.appendChild(element);
   element.click();
   document.body.removeChild(element);
}

