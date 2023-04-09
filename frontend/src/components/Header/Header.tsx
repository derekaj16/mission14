import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import './Header.css';

function Header(props: any) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary d-flex justify-content-between">
                {/* <p className="navbar-brand">Movies</p> */}
                <div className="d-flex justify-content-between">
                    <Link to="/">
                        <img src={logo} width="85" height="70" alt="" />
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/podcasts">
                                    <button className="btn btn-primary">
                                        Podcasts
                                    </button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/movie-list">
                                    <button className="btn btn-primary">
                                        Movies
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
