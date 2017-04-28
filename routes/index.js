var moviesJSON = require('../movies.json');

//home
exports.home = function(req, res) {
    var movies = moviesJSON.movies;
    res.render('home', {
        title : "Star War movies" ,
        movies : movies
    });
};
// movies single
exports.star_war_episode = function(req, res) {
    var movies = moviesJSON.movies;
    var episod_number = req.params.episod_number;
    if(episod_number >=1 && episod_number <=6) {
        var movie = movies[episod_number - 1];
        var title = movie.title;
        var main_characters = movie.main_characters;
    }else{
        res.render('notfound', {
            movies : movies,
            title : 'Page Not Found'
        });
    }
    res.render('movies_single', {
        movies : movies,
        title : title,
        movie : movie,
        main_characters : main_characters
    });
};
// not found
exports.notfound = function(req,res) {
    var movies = moviesJSON.movies;
    res.render('notfound',{
     movies : movies,
        title : 'Page Not Found'
    })
};
