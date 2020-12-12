function readFile(input) {
    document.getElementById("download-label").style.display="block";
    let data = new FormData();

    data.append('file', input.files[0]);

    fetch('http://localhost:8080/sound', { //here add your url
        method: 'POST',
        body: data
    }).then(r => console.log(r))

}


