function Zapros() {
    
    let name="blade runner" 
    return new Promise((resolve, reject) => { 
    const req = new XMLHttpRequest(); 
    req.open('GET', `http://www.omdbapi.com/?s=${name}&apikey=f7a37081`, false); 
    req.send(null); 
    if (req.status != 200) () => reject(() => console.log("Ошибка")); 
    let result = JSON.parse(req.responseText).Search; 
    resolve(result); 
    }); 
    } 
    function Out(res) { 
    let movies = document.getElementById("movies"); 
    res.forEach(element => { //Крутим полученный от сервера массив с объектами фильмов. 
    let div = document.createElement('div'); 
    
    div.innerHTML = `<img src=${element.Poster}>` 
    movies.appendChild(div); 
    }); 
    } 
    function Start() { 
    Zapros() 
    .then(result => Out(result)) 
    .catch(e => console.log(e)); 
    } 
    
    Start();