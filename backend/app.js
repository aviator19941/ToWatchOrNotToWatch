const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());
//app.use(express.static(path.join(__dirname, 'dist/films-app')));

const NOW_PLAYING_API_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
const SEARCH_API_URL = 'https://api.themoviedb.org/3/search/multi?api_key=';
const API_KEY = '';

const ENTIRE_NOW_PLAYING_API_URL = `${NOW_PLAYING_API_URL}${API_KEY}`;
const ENTIRE_SEARCH_API_URL = `${SEARCH_API_URL}${API_KEY}&language=en-US&query=`;
const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;
const TOP_RATED_MOVIES_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`;
const TRENDING_MOVIES_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`;
const POPULAR_TV_URL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`;
const TOP_RATED_TV_URL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US`;
const TRENDING_TV_URL = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`;

function isEmptyOrSpaces(str){
  return str === null || str.match(/^ *$/) !== null;
}

app.get('/', (req,res) => {
  res.send('App Works !!!!');
});

app.get('/api/nowPlaying', (req, res) => {
  const nowPlayingMovies = [];

  axios.get(ENTIRE_NOW_PLAYING_API_URL)
    .then(response => {
      //res.json({"results": response.data.results});
      const results = response.data.results;
      const top5Results = results.slice(0, 6);
      top5Results.forEach(element => {
        let movieObj = {"id" : element.id,
          "title" : element.title,
          "poster_path" : element.poster_path
        };

        nowPlayingMovies.push(movieObj);
      });

      res.json({"results" : nowPlayingMovies});
    })
    .catch(error => console.log('Error ', error));
});

app.get('/api/popularMovies', (req, res) => {
  const popularMovies = [];
  let ndx = 0;

  axios.get(POPULAR_MOVIES_URL)
    .then(response => {
      const results = response.data.results;
      results.forEach(movie => {
        let poster_path = movie.poster_path;
        if (poster_path != null) {
          let path = "https://image.tmdb.org/t/p/w500" + poster_path;
          if (ndx < 10) {
            popularMovieObj = {
              "id" : movie.id,
              "title" : movie.title,
              "poster_path" : path
            }
            popularMovies.push(popularMovieObj);
            ndx += 1;
          }
        }
      });
      res.json({"popularMovies" : popularMovies});

    })
    .catch(error => console.log('Error ', error));
})

app.get('/api/topRatedMovies', (req, res) => {
  const topRatedMovies = [];
  let ndx = 0;

  axios.get(TOP_RATED_MOVIES_URL)
    .then(response => {
      const results = response.data.results;
      results.forEach(movie => {
        let poster_path = movie.poster_path;
        if (poster_path != null) {
          let path = "https://image.tmdb.org/t/p/w500" + poster_path;
          if (ndx < 10) {
            topRatedObj = {
              "id" : movie.id,
              "title" : movie.title,
              "poster_path" : path
            }
            topRatedMovies.push(topRatedObj);
            ndx += 1;
          }
        }
      });
      res.json({"topRatedMovies" : topRatedMovies});

    })
    .catch(error => console.log('Error ', error));
})

app.get('/api/trendingMovies', (req, res) => {
  const trendingMovies = [];
  let ndx = 0;

  axios.get(TRENDING_MOVIES_URL)
    .then(response => {
      const results = response.data.results;
      results.forEach(movie => {
        let poster_path = movie.poster_path;
        if (poster_path != null) {
          let path = "https://image.tmdb.org/t/p/w500" + poster_path;
          if (ndx < 10) {
            trendingObj = {
              "id" : movie.id,
              "title" : movie.title,
              "poster_path" : path
            }
            trendingMovies.push(trendingObj);
            ndx += 1;
          }
        }
      });
      res.json({"trendingMovies" : trendingMovies});

    })
    .catch(error => console.log('Error ', error));
})

app.get('/api/popularTV', (req, res) => {
  const popularTV = [];
  let ndx = 0;

  axios.get(POPULAR_TV_URL)
    .then(response => {
      const results = response.data.results;
      results.forEach(tv => {
        let poster_path = tv.poster_path;
        if (poster_path != null) {
          let path = "https://image.tmdb.org/t/p/w500" + poster_path;
          if (ndx < 10) {
            popularTvObj = {
              "id" : tv.id,
              "title" : tv.name,
              "poster_path" : path
            }
            popularTV.push(popularTvObj);
            ndx += 1;
          }
        }
      });
      res.json({"popularTV" : popularTV});

    })
    .catch(error => console.log('Error ', error));
})

app.get('/api/topRatedTV', (req, res) => {
  const topRatedTV = [];
  let ndx = 0;

  axios.get(TOP_RATED_TV_URL)
    .then(response => {
      const results = response.data.results;
      results.forEach(tv => {
        let poster_path = tv.poster_path;
        if (poster_path != null) {
          let path = "https://image.tmdb.org/t/p/w500" + poster_path;
          if (ndx < 10) {
            topRatedTVObj = {
              "id" : tv.id,
              "title" : tv.name,
              "poster_path" : path
            }
            topRatedTV.push(topRatedTVObj);
            ndx += 1;
          }
        }
      });
      res.json({"topRatedTV" : topRatedTV});

    })
    .catch(error => console.log('Error ', error));
})

app.get('/api/trendingTV', (req, res) => {
  const trendingTV = [];
  let ndx = 0;

  axios.get(TRENDING_TV_URL)
    .then(response => {
      const results = response.data.results;
      results.forEach(tv => {
        let poster_path = tv.poster_path;
        if (poster_path != null) {
          let path = "https://image.tmdb.org/t/p/w500" + poster_path;
          if (ndx < 6) {
            trendingTVObj = {
              "id" : tv.id,
              "title" : tv.name,
              "poster_path" : path
            }
            trendingTV.push(trendingTVObj);
            ndx += 1;
          }
        }
      });
      res.json({"trendingTV" : trendingTV});

    })
    .catch(error => console.log('Error ', error));
})

app.get('/api/multiSearch', (req, res) => {
  const value = req.query.query;
  const FINAL_SEARCH_URL = `${ENTIRE_SEARCH_API_URL}${value}`;
  const movieTVResults = [];
  let ndx = 1;

  axios.get(FINAL_SEARCH_URL)
    .then(response => {
      const results = response.data.results;
      let curMediaType = "";
      results.forEach(result => {
        if (movieTVResults.length < 20) {
          curMediaType = result.media_type;
          if (curMediaType == "movie") {
            if (result.backdrop_path != null) {
              let path = "https://image.tmdb.org/t/p/w500" + result.backdrop_path;
              let posterPath = "https://image.tmdb.org/t/p/w500" + result.poster_path;
              moviesObj = {
                "id" : result.id,
                "name" : result.title,
                "media_type" : result.media_type,
                "backdrop_path" : path,
                "poster_path" : posterPath,
                "vote_average" : result.vote_average,
                "release_date" : result.release_date.substring(0, 4)
              };
              movieTVResults.push(moviesObj);
            }
          } else if (curMediaType == "tv") {
            if (result.backdrop_path != null) {
              let path = "https://image.tmdb.org/t/p/w500" + result.backdrop_path;
              let posterPath = "https://image.tmdb.org/t/p/w500" + result.poster_path;
              tvObj = {
                "id" : result.id,
                "name" : result.name,
                "media_type" : result.media_type,
                "backdrop_path" : path,
                "poster_path" : posterPath,
                "vote_average" : result.vote_average,
                "release_date" : result.first_air_date.substring(0, 4)
              };
              movieTVResults.push(tvObj);
            }
          }
        }
      });
      res.json({"results" : movieTVResults});
    })
    .catch(error => console.log('Error ', error));
});

app.get('/api/details', (req, res) => {
  let params = req.query;
  let category = params.category;
  let id = params.id;
  let teaser = null;
  let trailer = null;
  let detailsObj = {};
  let castList = [];
  let recommendedList = [];
  let similarList = [];
  let DETAILS_URL = `https://api.themoviedb.org/3/${category}/${id}?api_key=${API_KEY}&language=en-US`;
  let VIDEOS_URL = `https://api.themoviedb.org/3/${category}/${id}/videos?api_key=${API_KEY}&language=en-US`;
  let CAST_URL = `https://api.themoviedb.org/3/${category}/${id}/credits?api_key=${API_KEY}&language=en-US`;
  let REVIEWS_URL = `https://api.themoviedb.org/3/${category}/${id}/reviews?api_key=${API_KEY}&language=en-US`;
  let RECOMMENDED_URL = `https://api.themoviedb.org/3/${category}/${id}/recommendations?api_key=${API_KEY}&language=en-US`;
  let SIMILAR_URL = `https://api.themoviedb.org/3/${category}/${id}/similar?api_key=${API_KEY}&language=en-US`;

  const detailsRequest = axios.get(DETAILS_URL);
  const videosRequest = axios.get(VIDEOS_URL);
  const castRequest = axios.get(CAST_URL);
  const reviewsRequest = axios.get(REVIEWS_URL);
  const recommendedRequest = axios.get(RECOMMENDED_URL);
  const similarRequest = axios.get(SIMILAR_URL);

  axios.all([detailsRequest, videosRequest, castRequest, reviewsRequest, recommendedRequest, similarRequest])
    .then(axios.spread((...responses) => {
      const detailsResponse = responses[0].data;
      const videosResponse = responses[1].data.results;
      const castResponse = responses[2].data.cast;
      const reviewsResponse = responses[3].data.results;
      const recommendedResponse = responses[4].data.results;
      const similarResponse = responses[5].data.results;

      if (category == "movie") {
        let backdrop_path = detailsResponse.backdrop_path;
        let path = "https://image.tmdb.org/t/p/w500" + backdrop_path;
        let posterPath = "https://image.tmdb.org/t/p/w500" + detailsResponse.poster_path;
        detailsObj = {
          "id" : detailsResponse.id,
          "category" : category,
          "backdrop_path" : path,
          "poster_path" : posterPath,
          "title" : detailsResponse.title,
          "tagline" : detailsResponse.tagline,
          "release_date" : detailsResponse.release_date.substring(0, 4),
          "vote_average" : +detailsResponse.vote_average,
          "runtime" : detailsResponse.runtime,
          "genres" : detailsResponse.genres,
          "spoken_languages" : detailsResponse.spoken_languages,
          "overview" : detailsResponse.overview
        }
      } else if (category == "tv") {
        let backdrop_path = detailsResponse.backdrop_path;
        let path = "https://image.tmdb.org/t/p/w500" + backdrop_path;
        let posterPath = "https://image.tmdb.org/t/p/w500" + detailsResponse.poster_path;
        detailsObj = {
          "id" : detailsResponse.id,
          "category" : category,
          "backdrop_path" : path,
          "poster_path" : posterPath,
          "title" : detailsResponse.name,
          "tagline" : detailsResponse.tagline,
          "first_air_date" : detailsResponse.first_air_date.substring(0, 4),
          "vote_average" : +detailsResponse.vote_average,
          "episode_run_time" : detailsResponse.episode_run_time,
          "genres" : detailsResponse.genres,
          "spoken_languages" : detailsResponse.spoken_languages,
          "overview" : detailsResponse.overview
        }
      }

      let videoObj = {};
      let foundTrailer = false;
      videosResponse.forEach(video => {
        let videoType = video.type;
        let videoKey = video.key;
        if (foundTrailer == true) {
          return;
        }
        if (videoType === "Trailer") {
          if (videoKey != null) {
            videoObj = {
              "site" : video.site,
              "type" : video.type,
              "name" : video.name,
              "key" : video.key
            };
            trailer = videoObj;
            foundTrailer = true;
          } else {
            foundTrailer = false;
          }
        } else if (videoType === "Teaser") {
          if (videoKey != null) {
            videoObj = {
              "site" : video.site,
              "type" : video.type,
              "name" : video.name,
              "key" : video.key
            };
            teaser = videoObj;
          }
        }
      })

      // Cast
      castResponse.forEach(cast => {
        if (cast.profile_path != null) {
          if (castList.length < 6) {
            let path = "https://image.tmdb.org/t/p/w500" + cast.profile_path;
            let castObj = {
              "id" : cast.id,
              "name" : cast.name,
              "character" : cast.character,
              "profile_path" : path
            };
            castList.push(castObj);
          }
        }
      })

      let finalVid = {};
      if (trailer != null) {
        finalVid = trailer;
      } else if (teaser != null) {
        finalVid = teaser;
      } else {
        finalVid = {
          "key" : ""
        };
      }

      // Reviews
      let avatarPath = null;
      let reviewList = [];
      let ndx = 0;
      
      // get first 10 results
      reviewsResponse.forEach(review => {
        if (ndx < 3) {
          let rating = 0;
          let path = null;

          if (review.author_details.avatar_path != null) {
            if (review.author_details.avatar_path.startsWith("/https://")) {
              path = review.author_details.avatar_path.substring(1);
              avatarPath = path;
            } else {
              avatarPath = "https://image.tmdb.org/t/p/original" + review.author_details.avatar_path;
            }
          } else {
            avatarPath = null;
          }

          if (review.author_details.rating == null) {
            rating = 0;
          } else {
            rating = review.author_details.rating;
          }
          reviewObj = {
            "author" : review.author_details.username,
            "avatar_path" : avatarPath,
            "rating" : rating,
            "content" : review.content,
            "created_at" : review.created_at,
            "url" : review.url
          }
          reviewList.push(reviewObj);
          ndx += 1;
        }
      })

      // Recommended
      let recNdx = 0;
      if (category == "movie") {
        recommendedResponse.forEach(rec => {
          let poster_path = rec.poster_path;
          if (poster_path != null) {
            let path = "https://image.tmdb.org/t/p/w500" + poster_path;
            if (recNdx < 10) {
              recommendedObj = {
                "id" : rec.id,
                "title" : rec.title,
                "poster_path" : path,
                "category" : category
              }
              recommendedList.push(recommendedObj);
              recNdx += 1;
            }
          }
        })
      } else if (category == "tv") {
        recommendedResponse.forEach(rec => {
          let poster_path = rec.poster_path;
          if (poster_path != null) {
            let path = "https://image.tmdb.org/t/p/w500" + poster_path;
            if (recNdx < 10) {
              recommendedObj = {
                "id" : rec.id,
                "title" : rec.name,
                "poster_path" : path,
                "category" : category
              }
              recommendedList.push(recommendedObj);
              recNdx += 1;
            }
          }
        })
      }

      // Similar
      let simNdx = 0;
      if (category == "movie") {
        similarResponse.forEach(rec => {
          let poster_path = rec.poster_path;
          if (poster_path != null) {
            let path = "https://image.tmdb.org/t/p/w500" + poster_path;
            if (simNdx < 24) {
              similarObj = {
                "id" : rec.id,
                "title" : rec.title,
                "poster_path" : path,
                "category" : category
              }
              similarList.push(similarObj);
              simNdx += 1;
            }
          }
        })
      } else if (category == "tv") {
        similarResponse.forEach(rec => {
          let poster_path = rec.poster_path;
          if (poster_path != null) {
            let path = "https://image.tmdb.org/t/p/w500" + poster_path;
            if (simNdx < 24) {
              similarObj = {
                "id" : rec.id,
                "title" : rec.name,
                "poster_path" : path,
                "category" : category
              }
              similarList.push(similarObj);
              simNdx += 1;
            }
          }
        })
      }

      res.json({
        "detailsData" : detailsObj,
        "video" : finalVid,
        "cast" : castList,
        "reviews" : reviewList,
        "recommended" : recommendedList,
        "similar" : similarList
      });
      
    })).catch(errors => {
      console.log('Error is, ', errors);
    })
});

app.get('/api/modalDetails', (req, res) => {
  let params = req.query;
  let id = params.personId;
  let PERSON_DETAILS_URL = `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`;
  let PERSON_EXTERNAL_URL = `https://api.themoviedb.org/3/person/${id}/external_ids?api_key=${API_KEY}&language=en-US`;
  let otherNames = "";
  let genderMap = { 0 : "Undefined", 1 : "Female", 2 : "Male"};

  const personDetailsRequest = axios.get(PERSON_DETAILS_URL);
  const personExternalRequest = axios.get(PERSON_EXTERNAL_URL);

  axios.all([personDetailsRequest, personExternalRequest])
    .then(axios.spread((...responses) => {
      
      const person = responses[0].data;
      const personExternalResponse = responses[1].data;

      let path = "https://image.tmdb.org/t/p/w500/" + person.profile_path;
      let ndx = 0;
      person.also_known_as.forEach(name => {
        if (ndx == person.also_known_as.length - 1) {
          otherNames += name;
        } else {
          otherNames += name + ", ";
        }
        ndx += 1;
      })

      let personObj = {
        "name" : person.name,
        "profile_path" : path,
        "birthday" : person.birthday,
        "place_of_birth" : person.place_of_birth,
        "gender" : genderMap[person.gender],
        "homepage" : person.homepage,
        "known_for_department" : person.known_for_department,
        "also_known_as" : otherNames,
        "biography" : person.biography
      }

      let imdb = null;
      let facebook = null;
      let insta = null;
      let twitter = null;
      if (isEmptyOrSpaces(personExternalResponse.imdb_id) == false) {
        imdb = "https://imdb.com/name/" + personExternalResponse.imdb_id;
      }

      if (isEmptyOrSpaces(personExternalResponse.instagram_id) == false) {
        insta = "https://instagram.com/" + personExternalResponse.instagram_id;
      }

      if (isEmptyOrSpaces(personExternalResponse.facebook_id) == false) {
        facebook = "https://facebook.com/" + personExternalResponse.facebook_id;
      }

      if (isEmptyOrSpaces(personExternalResponse.twitter_id) == false) {
        twitter = "https://twitter.com/" + personExternalResponse.twitter_id;
      }

      let externalIdsObj = {
        "imdb_id" : imdb,
        "instagram_id" : insta,
        "facebook_id" : facebook,
        "twitter_id" : twitter
      }

      res.json({
        "person" : personObj,
        "external_ids" : externalIdsObj
      })
      
    })).catch(errors => {
      console.log('Error is, ', errors);
    })
})

/*app.use('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/films-app/index.html'));
})*/

// Start the server ==========================================================================================================
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;
