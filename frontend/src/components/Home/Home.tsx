import React from 'react';
import Header from '../Header/Header';
import joel from '../../img/JoelHiltonHeadshot.jpg';

function Home() {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="jumbotron mx-5 my-5">
                    <h1 className="display-4">Joel Hilton Movie Collection</h1>
                    <p className="lead">
                        Welcome to the home of all of my favorite movies. Check
                        out all of my best and all the information about them.
                    </p>
                    <hr className="my-4" />
                    <div className="mx-auto text-center">
                        <img src={joel} alt="Headshot of me" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
