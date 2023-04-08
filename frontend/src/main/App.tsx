import React from 'react';
import Header from '../components/Header/Header';
import MovieList from '../components/MovieList/MovieList';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header slogan="This is a cool website" />
            <div className="container">
                <MovieList />
            </div>
        </div>
    );
}

export default App;
