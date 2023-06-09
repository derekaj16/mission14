import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import MovieList from '../components/MovieList/MovieList';
import Podcasts from '../components/Podcasts/Podcasts';
import './App.css';

function App() {
    return (
        // Set up routing for our website so we can view the various pages
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/movie-list" element={<MovieList />}></Route>
                <Route path="/podcasts" element={<Podcasts />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
