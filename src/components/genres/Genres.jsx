import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import "./style.scss";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="genres">
      {data?.map((g) => {
        if (!genres[g]?.name) return null;
        return (
          <div key={g} className="genre">
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

Genres.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
};

export default Genres;
