import { useSelector } from "react-redux";

function Button() {
  const favorites = useSelector((state) => state.favorites);
  console.log(favorites);
  return (
    <button className="btn btn-secondary mt-8">
      Favoris ({favorites.length})
    </button>
  );
}

Button.defaultProps = {
  favorites: [],
};

export default Button;