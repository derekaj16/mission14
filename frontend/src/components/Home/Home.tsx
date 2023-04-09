import React from 'react';
import Header from '../Header/Header';

function Home() {
    return (
        <div>
            <Header slogan="This is a cool website" />

            <div className="container">
                <div className="jumbotron mx-5 my-5">
                    <h1 className="display-4">Joel Hilton Movie Collection</h1>
                    <p className="lead">
                        Welcome to the home of all of my favorite movies. Check
                        out all of my best and all the information about them.
                    </p>
                    <hr className="my-4" />
                    <p>
                        I built this website using React on the frontend and C#
                        on the backend!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
