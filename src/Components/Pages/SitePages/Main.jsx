import { Link } from 'react-router-dom';

function Main() {
    let words = [
        "Salom",
        "Dunyo",
        "ITpark",
        "Samarqand",
        "O'zbekiston",
        "FRONTEND"
    ]
    return (
        <div>
            <h1>Bosh sahifa</h1>

            {
                words.map(w => (
                    <Link to={"/post/" + w}>
                        <h2 key={w}>{w}</h2>
                    </Link>
                ))
            }


        </div>
    );
}

export default Main;