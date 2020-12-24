var check;
let button = document.getElementById("download-button");
let button2 = document.getElementById("upload-button");
let waitText = document.getElementById('display-wait');
let formatText = document.getElementById("info-format");
let sectionInfo = document.getElementById("scrollToTeam");
let sectionContacts = document.getElementById("scrollToContacts")

sectionInfo.addEventListener("click", function (e) {
  document.getElementById("team").scrollIntoView();
});

sectionContacts.addEventListener("click", function (e) {
    document.getElementById("contacts").scrollIntoView();
});

function readFile(input) {
    let data = new FormData();

    data.append('file', input.files[0]);
    check = input.files[0];

    button2.style.display = 'none';
    waitText.style.display='block';
    formatText.style.display = 'none';

    fetch('http://localhost:8080/sound', { //here add your url
        method: 'POST',
        body: data
    }).then(response => {
            response.text().then(function(result){
                waitText.style.display = 'none';
                button.style.display = 'block';
                formatText.style.display = 'block';
                check = result
            })
        }
    )
}


button.addEventListener("click", function (e) {
    let filename = "output.mid";
    download(check, filename)
});

function download(check, filename) {
    let element = document.createElement('a');
    console.log(check);
    element.setAttribute('href', 'data:text/plain;base64,' + check);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

