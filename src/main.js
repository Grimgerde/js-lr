var randomMovieArray =['Blade Runner', 'Blade Runner 2049','Blade Runner: Black Out 2022', 'On the Edge of Blade Runner','Dangerous Days: Making Blade Runner', 'Oscar Pistorius: Blade Runner Killer'];

function apiCall(){
    jQuery.getJSON('http://www.omdbapi.com/?t=blade+runner+2049'.then(function(response){
        var image=response.Poster;
        console.log(image);
    }));
};
apiCall();