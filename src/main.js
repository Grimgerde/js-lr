function Zapros() {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', `http://www.omdbapi.com/?t=blade+runner&apikey=da2ea953`, false);
        req.send(null);
        if (req.status != 200) () => reject();
        let result = JSON.parse(req.responseText).Search;
        console.log(req);
        console.log(req.responseText);
        console.log((req.responseText).search);
        console.log(result);
        resolve(result);
    });
}

function Out(res) {
    res.forEach(element => {
        let div = document.createElement('div');
        div.innerHTML = `<img src=${element.Poster}`;
        movies.appendChild(div);
    });
};