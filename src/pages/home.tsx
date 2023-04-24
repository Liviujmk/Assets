
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <h1>Pilot</h1>
            <div className="container">
                <button
                    className="btn"

                >
                    <Link to="/first">First Service</Link>
                </button>
                <button className="btn"

                >
                    <Link to="/second">Second Service</Link>
                </button>
            </div>
        </>
    )
}