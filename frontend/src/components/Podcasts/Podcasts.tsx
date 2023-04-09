import Header from '../Header/Header';

function Podcasts(props: any) {
    return (
        <>
            <Header />
            <div className="container m-5 mx-auto text-center">
                <a
                    className="btn btn-primary"
                    href="https://baconsale.com/category/podcast/"
                    target="_blank"
                >
                    Click here to check out the Bacon Sale podcast!
                </a>
            </div>
        </>
    );
}

export default Podcasts;
