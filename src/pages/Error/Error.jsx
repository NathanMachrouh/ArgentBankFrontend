/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import GreenError from '../../assets/images/404-green.webp';
import '../../sass/pages/_Error.scss';

function Error () {
    return (
        <div className="error-page">
            <main>
                <section className="error">
                    <img src={GreenError} alt="error 404" className="green-error"/>
                    <p className="text-error">The requested page doesn't exist...</p>
                    <p className="text-error">Please return to homepage</p>
                    < Link to="/">
                        <button className="button-404">Back to the homepage</button>
                    </Link>
                </section>
            </main>
        </div>
    )
}

export default Error