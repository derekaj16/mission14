using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using movies_api.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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
            var movies = context.Movies.Where(m => m.Edited == "Yes").OrderBy(m => m.Title).ToArray();

            return movies;
        }
    }
}

