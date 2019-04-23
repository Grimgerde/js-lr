function Zapros() {

  let name = "blade runner"
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', `http://www.omdbapi.com/?s=${name}&apikey=f7a37081`, false);
    req.send(null);
    if (req.status != 200)() => reject(() => console.log("Ошибка"));
    let result = JSON.parse(req.responseText).Search;
    resolve(result);
  });
}

function Out(res) {
  let movies = document.getElementById("movies");
  res.forEach(element => {
    let img = document.createElement('img');

    img.src = element.Poster;
    movies.appendChild(img);
  });
}

function Start() {
  Zapros()
    .then(Out)
    .catch(e => console.log(e));
}

Start();