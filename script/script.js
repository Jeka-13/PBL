let input = document.querySelector('input[type="file"]');

let data = new FormData();

function readFile(input) {
    document.getElementById("download-label").style.display="block";
    let file = input.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload= function (e){
        data.append('file', input.files[0]);
        fetch('http://localhost:63342/PBL/index.html?_ijt=msk3b97oo87hpnjtb81g9ib82d', { //here add your url
            method: 'POST',
            body: data
        }).then(success => console.log(success)
        ).catch(error=> console.log(error));

    };

    reader.onerror = function() {
        console.log(reader.error);
    };

}



