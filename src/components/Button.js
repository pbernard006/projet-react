import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Button() {
  const favorites = useSelector((state) => state.favorites);
  console.log(favorites);
  return (
    <a className="link" href={`/favoris`}>
      <button className="btn btn-secondary mt-8">
        Favoris ({favorites.length})
      </button>
    </a>
  );
}

Button.defaultProps = {
  favorites: [],
};

export default Button;
