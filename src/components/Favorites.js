import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Favorites() {
    const favorites = useSelector((state) => state.favorites);

    return (
        <div className="container px-2 pt-5rem">
            {favorites.map((match, index) => (
                <Link key={match} className="link" to={`/match/${match}`}>
                    <span className="favorites">Match numéro {index + 1}</span>
                    <br />
                </Link>
            ))}
        </div>
    );
}

export default Favorites;