import { useEffect, useState } from 'react';
import { Movie } from '../../models/movie/Movie';
import Header from '../Header/Header';

function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // This function previews a loading effect until the movies
    // have been fetched from the API
    useEffect(() => {
        const fetchMovies = async () => {
            const rsp = await fetch('https://localhost:4000/home'); // Calling the API
            const temp = await rsp.json();
            setMovies(temp);
            setIsLoading(false);
        };
        fetchMovies();
    });

    return (
        <>
            <Header />
            <div className="container m-5 mx-auto">
                <div className="row">
                    <h4 className="text-center">
                        <b>Joel Hilton Movie Collection</b>
                    </h4>
                    <p className="text-center">
                        Did anyone else notice how all of these except one are
                        rated R? :)
                    </p>
                </div>

                {isLoading ? (
                    <div className="text-center mt-4">
                        <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Movie ID</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Year</th>
                                    <th>Director</th>
                                    <th>Rating</th>
                                    <th>Edited</th>
                                    <th>Lent To</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map((m) => (
                                    <tr key={m.movieId}>
                                        <td>{m.movieId}</td>
                                        <td>{m.title}</td>
                                        <td>{m.category}</td>
                                        <td>{m.year}</td>
                                        <td>{m.director}</td>
                                        <td>{m.rating}</td>
                                        <td>{m.edited}</td>
                                        <td>{m.lentTo}</td>
                                        <td>{m.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
}

export default MovieList;
