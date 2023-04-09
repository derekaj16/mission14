using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using movies_api.Models;

// In this controller, we provide a get method for our frontend to reach and
// pull data for all of our movies.

namespace movies_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : Controller
    {
        private JoelHiltonMovieCollectionContext context;

        public HomeController(JoelHiltonMovieCollectionContext temp) {
            context = temp;
        }

        [HttpGet(Name = "GetMovies")]
        public IEnumerable<Movie> GetMovies()
        {
            // Filter movies by title and select only the edited movies
            var movies = context.Movies.Where(m => m.Edited == "Yes").OrderBy(m => m.Title).ToArray();

            return movies;
        }
    }
}

